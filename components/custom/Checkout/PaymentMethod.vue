<template>
  <!-- Panel -->
  <div class="w-full">
    <div class="container pb-4 md:pb-0">
      <div class="flex py-4">
        <h3>Metodo de pago</h3>
      </div>
    </div>
    <div class="container pt-2 pb-4 md:pb-0">
      <div class="flex flex-wrap">
        <div class="w-full rounded bg-gray-100 py-4 pt-4 text-center">
          <h3>Pago contraentrega</h3>
          <p>Pagas al recibir tu pedido</p>
        </div>
        <div class="w-full" v-if="false">
          <ul class="mb-0 flex list-none flex-row flex-wrap pt-3 pb-4">
            <li class="-mb-px mr-2 flex-auto text-center last:mr-0">
              <a
                class="block rounded px-5 py-3 text-xs font-bold uppercase leading-normal shadow-lg"
                v-bind:class="{
                  'bg-sweetPrimary text-white': typePayment == 1,
                }"
                @click="typePayment = 2"
              >
                Tarjeta bancaria (prox.)
              </a>
            </li>
            <li class="-mb-px mr-2 flex-auto text-center last:mr-0">
              <a
                class="block rounded bg-white px-5 py-3 text-xs font-bold uppercase leading-normal text-pink-600 shadow-lg"
                v-bind:class="{
                  'bg-sweetPrimary text-white': typePayment == 2,
                }"
                @click="typePayment = 2"
              >
                Pago contraentrega
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="typePayment == 1" class="container pt-2 pb-4 md:pb-0">
        <template v-for="(card, index) in cards">
          <div class="mb-4 flex items-center" :key="index">
            <input
              type="radio"
              :value="card.id"
              v-model="cardSelected"
              name="Address-radio"
              class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
            />
            <div class="ml-2 text-sm">
              <label
                for="helper-radio"
                class="font-medium text-gray-900 dark:text-gray-300"
              >
                **** **** **** {{ card.last4 }} {{ card.brand }}
                {{ card.expMonth }}/{{ card.expYear }}
              </label>
            </div>
          </div>
        </template>
        <div v-if="customerLoggedIn" class="mb-4 flex items-center">
          <input
            type="radio"
            value=""
            v-model="cardSelected"
            name="Address-radio"
            class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
          />
          <div class="ml-2 text-sm">
            <label
              for="helper-radio"
              class="font-medium text-gray-900 dark:text-gray-300"
              >Otra tarjeta
            </label>
          </div>
        </div>
        <!-- Fields -->
        <div class="pt-6 pb-4" v-if="cardSelected == ''">
          <div class="mb-6">
            <InputText
              v-model="cardNumber"
              v-cardformat:formatCardNumber
              class="mb-2"
              :class="{ 'tracking-large': type === 'update' }"
              :label="$t('account.payments.popup.cardNumber.label')"
              name="ccNumber"
              autocomplete="cc-number"
              :disabled="type === 'update'"
            />

            <template v-if="$v.cardNumber.$dirty">
              <span
                v-if="!$v.cardNumber.required"
                class="label-sm text-error-default"
                >{{ $t('account.payments.popup.cardNumber.required') }}</span
              >

              <span
                v-else-if="!$v.cardNumber.maxLength"
                class="label-sm text-error-default"
                >{{
                  $t('account.payments.popup.cardNumber.maxLength', { n: 19 })
                }}</span
              >
            </template>
          </div>

          <div class="flex-no-wrap mb-6 flex">
            <div :class="type === 'update' ? 'w-full' : 'mr-3 w-1/2'">
              <InputText
                v-model="cardExpiry"
                v-cardformat:formatCardExpiry
                :label="$t('account.payments.popup.cardExpiry.label')"
                :disabled="type === 'update'"
                name="ccExpiry"
                autocomplete="cc-exp"
              />

              <template v-if="$v.cardExpiry.$dirty">
                <span
                  v-if="!$v.cardExpiry.required"
                  class="label-sm text-error-default"
                  >{{ $t('account.payments.popup.cardExpiry.required') }}</span
                >

                <span
                  v-else-if="!$v.cardExpiry.validDate"
                  class="label-sm text-error-default"
                  >{{ $t('account.payments.popup.cardExpiry.date') }}</span
                >
              </template>
            </div>

            <div class="ml-3 w-1/2">
              <InputText
                v-model="cardCVC"
                v-cardformat:formatCardCVC
                :label="$t('account.payments.popup.cvc.label')"
                name="ccCVC"
                autocomplete="cc-csc"
              />

              <template v-if="$v.cardCVC.$dirty">
                <span
                  v-if="!$v.cardCVC.required"
                  class="label-sm text-error-default"
                  >{{ $t('account.payments.popup.cvc.required') }}</span
                >

                <span
                  v-else-if="
                    !$v.cardCVC.integer ||
                    !$v.cardCVC.minLength ||
                    !$v.cardCVC.maxLength
                  "
                  class="label-sm text-error-default"
                  >{{ $t('account.payments.popup.cvc.format') }}</span
                >
              </template>
            </div>
          </div>
        </div>
      </div>
      <div v-if="false" class="container pt-2 pb-4 text-center md:pb-0">
        <h4 class="pt-8 pb-8">Pagas al recibir tu pedido</h4>
      </div>
    </div>
    <!-- Action buttons -->
    <button
      @click="processPayment"
      class="outline-none focus:outline-none mr-1 mb-1 w-full rounded bg-blue-500 px-8 py-4 text-base font-bold uppercase text-white shadow-md transition-all duration-150 ease-linear hover:shadow-lg active:bg-blue-600"
      type="button"
    >
      <span v-if="!loading" class="text-white">Procesar Pago</span>
      <span v-if="loading" class="animate-pulse text-white">Procesando...</span>
    </button>
  </div>
</template>

<script>
// Helpers
import { mapState } from 'vuex';
import { validationMixin } from 'vuelidate';
import swell from 'swell-js';
import values from 'lodash/values';
import isEmpty from 'lodash/isEmpty';

// Validation helper
import {
  required,
  minLength,
  maxLength,
  integer,
} from 'vuelidate/lib/validators';
const validDate = (date) => {
  if (!date.includes('/')) return false;

  const month = date.split('/')[0].trim();
  let year = date.split('/')[1].trim();

  if (!month || !year || (!year.length === 2 && !year.length === 4))
    return false;

  if (year.length === 2) {
    year = new Date().getFullYear().toString().substring(0, 2) + year;
  }

  const currMonth = new Date().getMonth() + 1;
  const currYear = new Date().getFullYear();

  const expMonth = parseInt(month, 10);
  const expYear = parseInt(year, 10);

  if (month < 0 || month > 12) return false;

  if (expYear > currYear || (expYear === currYear && expMonth >= currMonth)) {
    return true;
  } else {
    return false;
  }
};
swell.init('the-sweet-spot', 'pk_hBV175iteknfyEmM6vy66w4ovXdixvct');
export default {
  mixins: [validationMixin],

  props: {
    card: {
      type: Object,
      default: null,
    },
    cardsLength: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
      default: '',
    },
    refresh: {
      type: Boolean,
      value: false,
    },
    newBillingAddress: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      defaultCardId: null,
      cardSelected: '',
      cards: [],
      loading: false,
      typePayment: 2,
      addresses: null,
      cardName: '',
      cardNumber: '',
      cardExpiry: '',
      cardCVC: '',
      setDefault: false,
      billingAddress: null,
      isCreating: false,
      isUpdating: false,
      isDeleting: false,
      formattedDefaultAddress: '',
    };
  },

  async fetch() {
    // Set component data
    const { results: addresses } = await this.$swell.account.listAddresses();
    this.addresses = addresses;
  },

  computed: {
    ...mapState(['cart', 'customerLoggedIn', 'customer', 'cartIsUpdating']),
    formattedAddressOptions() {
      if (!this.addresses) return;
      return this.addresses.map((address) => {
        return {
          value: address,
          label: `${address.name}, ${address.address2 || ''} ${
            address.address1
          }, ${address.state}, ${address.city} ${address.zip}, ${
            address.country
          }`,
        };
      });
    },
    expMonth() {
      if (!this.cardExpiry.includes('/')) return;
      return this.cardExpiry.split('/')[0].trim();
    },
    expYear() {
      if (!this.cardExpiry.includes('/')) return;
      const year = this.cardExpiry.split('/')[1].trim();
      // Affix century if year is only two digits
      if (year.length === 2) {
        return new Date().getFullYear().toString().substring(0, 2) + year;
      }
      return year;
    },
    disableDefaultOption() {
      // Disable if no default card is set and no cards exist
      if (!this.defaultCardId && !this.cardsLength) return true;
      // Disable if current card is the only one and default
      if (this.card) {
        if (this.defaultCardId === this.card.id && this.cardsLength === 1)
          return true;
      }
      return false;
    },
  },

  watch: {
    async customer() {
      const { results: cards } = await this.$swell.account.listCards();

      if (this.customer.billing) {
        this.defaultCardId = this.customer.billing.accountCardId;
        this.cards = cards;
      }
    },
    newBillingAddress(address) {
      if (!address) return;

      this.billingAddress = address;

      const { name, address1, address2, state, city, zip, country } = address;

      this.formattedDefaultAddress = `
            ${name},
            ${address2 || ''} ${address1},
            ${state},
            ${city} ${zip},
            ${country}
          `;
    },
  },

  created() {
    // Prefill form data for updating existing data
    if (this.card) {
      this.cardExpiry = `${this.card.expMonth} / ${this.card.expYear}` || '';

      // Set formatted card number of existing card
      const { brand, last4 } = this.card;
      if (brand === 'American Express') {
        this.cardNumber = `••••  ••••   •••${last4.substring(
          0,
          1,
        )}   ${last4.substring(1, last4.length)}`;
      } else {
        this.cardNumber = `••••  ••••   ••••   ${last4}`;
      }

      // Set default check state
      if (this.defaultCardId === this.card.id) this.setDefault = true;

      // Set default address
      if (this.card.billing && !values(this.card.billing).every(isEmpty)) {
        this.billingAddress = this.card.billing;

        const { name, address1, address2, state, city, zip, country } =
          this.card.billing;

        this.formattedDefaultAddress = `
          ${name},
          ${address2 || ''} ${address1},
          ${state},
          ${city} ${zip},
          ${country}
        `;
      }
    }

    // If there's no default card, force set default
    if (!this.defaultCardId && !this.cardsLength && this.type === 'new') {
      this.setDefault = true;
    }
  },

  methods: {
    async processPayment() {
      this.loading = true;
      if (this.typePayment === 1) {
        if (this.cardSelected === '') {
          this.$v.$touch();
          if (this.$v.$invalid) return;
          const cardInfo = await this.tokenizeCard();
          if (cardInfo.success) {
            const updateResponse = await this.updateCardBilling(cardInfo.data);
            if (updateResponse) {
              const completeOrder = await this.$swell.cart.submitOrder();
              await this.$store.dispatch('closeCart', {});
              await this.$store.dispatch('initializeCustomer');
              console.log(completeOrder);
              location.href = '/confirmation/' + completeOrder.id;
              this.loading = false;
            }
          }
        } else {
          const card = this.cards.find((card) => card.id === this.cardSelected);
          if (card) {
            console.log(card);
            delete card.parentId;
            delete card.fingerprint;
            delete card.dateCreated;
            delete card.dateUpdated;
            delete card.active;
            delete card.id;
            const updateResponse = await this.updateCardBilling(card);
            if (updateResponse) {
              const completeOrder = await this.$swell.cart.submitOrder();
              await this.$store.dispatch('closeCart', {});
              console.log(completeOrder);
              location.href = '/confirmation/' + completeOrder.id;
              this.loading = false;
            }
          }
        }
      } else {
        const updateResponse = await this.updateCardMethod();
        if (updateResponse) {
          const completeOrder = await this.$swell.cart.submitOrder();
          await this.$store.dispatch('closeCart', {});
          console.log(completeOrder);
          location.href = '/confirmation/' + completeOrder.id;
          this.loading = false;
        }
      }
      this.loading = false;
    },
    async updateCardMethod() {
      try {
        await this.$swell.cart.update({
          billing: {
            method: 'cash',
          },
        });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
    async updateCardBilling(data) {
      try {
        await this.$swell.cart.update({
          billing: {
            card: data,
          },
        });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
    async tokenizeCard() {
      try {
        const response = await this.$swell.card.createToken({
          number: this.cardNumber,
          exp_month: this.expMonth,
          exp_year: this.expYear,
          cvc: 321,
          // Note: some payment gateways may require a Swell `account_id` and `billing` for card verification (Braintree)
          account_id: this.cart.account_id,
          /* billing: {
            address1: '1 Main Dr.',
            zip: 90210,
            // Other standard billing fields optional
          }, */
        });
        return { success: true, data: response };
      } catch (e) {
        console.log(e);
        return { success: false, data: e };
      }
    },
    async updateCard() {
      try {
        this.isUpdating = true;

        if (this.billingAddress) {
          const { name, address1, address2, city, state, zip, country } =
            this.billingAddress;

          await this.$swell.account.updateCard(this.card.id, {
            billing: {
              name,
              address1,
              address2,
              city,
              state,
              zip,
              country,
            },
          });
        }

        if (this.setDefault) {
          // Set current card as default
          await this.$swell.account.update({
            billing: {
              accountCardId: this.card.id,
            },
          });
        }

        // Close panel and fetch updated data
        this.isUpdating = false;
        this.$emit('click-close');
        this.$store.dispatch('initializeCustomer');
        this.$store.dispatch('showNotification', {
          message: this.$t('account.payments.popup.save.success'),
        });
        this.$emit('refresh');
      } catch (err) {
        this.$store.dispatch('showNotification', {
          message: this.$t('account.payments.popup.save.error'),
          type: 'error',
        });
      }
    },

    async createCard() {
      try {
        // Validate fields
        this.$v.$touch();
        if (this.$v.$invalid) return;

        this.isCreating = true;

        const { token } = await this.$swell.card.createToken({
          number: this.cardNumber,
          exp_month: this.expMonth,
          exp_year: this.expYear,
          cvc: this.cardCVC,
        });

        if (token) {
          const card = await this.$swell.account.createCard({ token });

          if (!card)
            throw new Error(this.$t('account.payments.popup.create.error'));

          if (this.billingAddress) {
            const { name, address1, address2, city, state, zip, country } =
              this.billingAddress;

            await this.$swell.account.updateCard(card.id, {
              billing: {
                name,
                address1,
                address2,
                city,
                state,
                zip,
                country,
              },
            });
          }

          if (this.setDefault) {
            // Set current address as default
            await this.$swell.account.update({
              billing: {
                accountCardId: card.id,
              },
            });
          }

          // Close panel and fetch updated data
          this.isCreating = false;
          this.$emit('click-close');
          this.$store.dispatch('initializeCustomer');
          this.$store.dispatch('showNotification', {
            message: this.$t('account.payments.popup.create.success'),
          });
          this.$emit('refresh');
        }
      } catch (err) {
        this.isCreating = false;
        this.$store.dispatch('showNotification', {
          message: this.$t('account.payments.popup.create.error'),
          type: 'error',
        });
      }
    },

    async deleteCard() {
      try {
        this.isDeleting = true;

        await this.$swell.account.deleteCard(this.card.id);

        // If set as default, reset account's default card ID.
        if (this.defaultCardId === this.card.id) {
          await this.$swell.account.update({
            billing: {
              accountCardId: null,
            },
          });
        }

        this.isDeleting = false;

        // Close panel and fetch updated data
        this.$emit('click-close');
        this.$store.dispatch('initializeCustomer');
        this.$store.dispatch('showNotification', {
          message: this.$t('account.payments.popup.delete.success'),
        });
        this.$emit('refresh');
      } catch (err) {
        this.$store.dispatch('showNotification', {
          message: this.$t('account.payments.popup.delete.error'),
          type: 'error',
        });
      }
    },

    async handleEnterKey() {
      switch (this.type) {
        case 'update':
          await this.updateCard();
          break;
        case 'new':
          await this.createCard();
          break;
        default:
      }
    },
  },

  validations: {
    cardNumber: { required, maxLength: maxLength(19) },
    cardExpiry: { required, validDate },
    cardCVC: {
      required,
      integer,
      minLength: minLength(3),
      maxLength: maxLength(4),
    },
  },
};
</script>
