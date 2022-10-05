<template>
  <!-- Panel -->
  <div class="w-full">
    <LoaderProcess :loading="loading" />
    <div class="container pb-4 md:pb-0">
      <div class="flex py-4">
        <h3>Información de cliente</h3>
      </div>
      <div class="pt-1 pb-1">
        <div v-if="!customerLoggedIn" class="mb-2">
          <InputText
            v-model="email"
            class="mb-2"
            :label="$t('Correo electronico')"
            name="email"
            autocomplete="address-level2"
          />
          <template v-if="$v.city.$dirty">
            <span
              v-if="!$v.city.required"
              class="label-sm text-error-default"
              >{{ $t('account.addresses.popup.city.required') }}</span
            >
          </template>
        </div>
        <div v-if="customer" class="rounded bg-gray-100 py-4 text-center">
          <h3>{{ customer.firstName }} {{ customer.lastName }}</h3>
          <p>{{ customer.email }}</p>
        </div>
      </div>
    </div>
    <div
      v-if="dataShipping && dataShipping.type == 2"
      class="container pt-2 pb-4 md:pb-0"
    >
      <div class="flex py-4">
        <h3>Dirección de envío</h3>
      </div>
      <template v-for="(address, index) in addresses">
        <div v-if="address.active" class="mb-4 flex items-center" :key="index">
          <input
            type="radio"
            @change="onChangeAdress"
            :value="address.id"
            v-model="addressSelect"
            name="Address-radio"
            class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
          />
          <div class="ml-2 text-sm">
            <label
              for="helper-radio"
              class="font-medium text-gray-900 dark:text-gray-300"
              >{{ address.address1 }} {{ address.city }} {{ address.state }}
              {{ address.zip }} {{ address.country }}
            </label>
            <p
              id="helper-radio-text"
              class="text-xs font-normal text-gray-500 dark:text-gray-300"
            >
              {{ address.name }}
            </p>
          </div>
        </div>
      </template>
      <div v-if="customerLoggedIn" class="mb-4 flex items-center">
        <input
          type="radio"
          @change="onChangeAdress"
          value=""
          v-model="addressSelect"
          name="Address-radio"
          class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
        />
        <div class="ml-2 text-sm">
          <label
            for="helper-radio"
            class="font-medium text-gray-900 dark:text-gray-300"
            >Otra dirección
          </label>
        </div>
      </div>
      <!-- Fields -->
      <div class="pt-6 pb-4" v-if="addressSelect == '' || !customerLoggedIn">
        <MapsAutocomplete @onChange="onChangeMaps" />
        <div class="flex-no-wrap mb-4 flex">
          <div class="mr-3 w-1/2">
            <div class="mb-4">
              <InputText
                v-model="firstName"
                class="mb-2"
                :label="$t('account.addresses.popup.firstName.label')"
                name="fname"
                autocomplete="given-name"
              />
              <template v-if="$v.firstName.$dirty">
                <span
                  v-if="!$v.firstName.required"
                  class="label-sm text-error-default"
                  >{{ $t('account.addresses.popup.firstName.required') }}</span
                >

                <span
                  v-if="!$v.firstName.maxLength"
                  class="label-sm text-error-default"
                  >{{
                    $t('account.addresses.popup.firstName.maxLength', { n: 40 })
                  }}</span
                >
              </template>
            </div>
          </div>
          <div class="mr-3 w-1/2">
            <div class="mb-4">
              <InputText
                v-model="lastName"
                class="mb-2"
                :label="$t('account.addresses.popup.lastName.label')"
                name="surname"
                autocmplete="family-name"
              />
              <template v-if="$v.lastName.$dirty">
                <span
                  v-if="!$v.lastName.required"
                  class="label-sm text-error-default"
                  >{{ $t('account.addresses.popup.lastName.required') }}</span
                >

                <span
                  v-if="!$v.lastName.maxLength"
                  class="label-sm text-error-default"
                  >{{
                    $t('account.addresses.popup.lastName.maxLength', { n: 40 })
                  }}</span
                >
              </template>
            </div>
          </div>
        </div>

        <div class="flex-no-wrap mb-4 flex">
          <div class="w-4/4 mr-3">
            <div class="mb-4">
              <InputText
                v-model="address1"
                class="mb-2"
                :label="$t('account.addresses.popup.address1.label')"
                name="address1"
                autocomplete="address-line1"
              />
              <template v-if="$v.address1.$dirty">
                <span
                  v-if="!$v.address1.required"
                  class="label-sm text-error-default"
                  >{{ $t('account.addresses.popup.address1.required') }}</span
                >
              </template>
            </div>
          </div>
          <div class="mr-3 w-1/4">
            <InputText
              v-show="false"
              v-model="address2"
              class="mb-4"
              :label="$t('account.addresses.popup.address2.label')"
              name="address2"
              autocomplete="address-line2"
            />
          </div>
        </div>

        <div class="mb-4">
          <InputText
            v-model="city"
            class="mb-2"
            :label="$t('account.addresses.popup.city.label')"
            name="city"
            autocomplete="address-level2"
          />
          <template v-if="$v.city.$dirty">
            <span
              v-if="!$v.city.required"
              class="label-sm text-error-default"
              >{{ $t('account.addresses.popup.city.required') }}</span
            >
          </template>
        </div>

        <div class="mb-4">
          <label class="label-xs-bold-faded mb-2 block" for="country-select">{{
            $t('account.addresses.popup.country.label')
          }}</label>

          <div class="relative mb-2">
            <country-select
              id="country-select"
              v-model="country"
              class="w-full appearance-none rounded border border-primary-med bg-primary-lightest px-4 py-3"
              :country="country"
              :usei18n="false"
              :autocomplete="true"
            />

            <BaseIcon
              icon="uil:angle-down"
              class="center-y absolute right-0 mr-2"
            />
          </div>

          <template v-if="$v.state.$dirty">
            <span
              v-if="!$v.country.required"
              class="label-sm text-error-default"
              >{{ $t('account.addresses.popup.country.required') }}</span
            >
          </template>
        </div>

        <div class="flex-no-wrap mb-4 flex">
          <div class="mr-3 w-1/2">
            <label class="label-xs-bold-faded mb-2 block" for="region-select">{{
              $t('account.addresses.popup.region.label')
            }}</label>

            <div class="relative mb-2">
              <region-select
                id="region-select"
                v-model="state"
                class="w-full appearance-none truncate rounded border border-primary-med bg-primary-lightest py-3 pl-4 pr-6"
                :country="country"
                :region="state"
                :disable-placeholder="true"
                :usei18n="false"
              />

              <div>
                <BaseIcon
                  icon="uil:angle-down"
                  class="center-y absolute right-0 mr-2"
                />
              </div>
            </div>

            <template v-if="$v.state.$dirty">
              <span
                v-if="!$v.state.required"
                class="label-sm text-error-default"
                >{{ $t('account.addresses.popup.region.required') }}</span
              >
            </template>
          </div>

          <div class="ml-3 w-1/2">
            <InputText
              v-model="zip"
              class="mb-2"
              :label="$t('account.addresses.popup.zipCode.label')"
              name="zipCode"
              autocomplete="postal-code"
            />

            <template v-if="$v.zip.$dirty">
              <span
                v-if="!$v.zip.required"
                class="label-sm text-error-default"
                >{{ $t('account.addresses.popup.zipCode.required') }}</span
              >
            </template>
          </div>
        </div>

        <div class="mb-4">
          <InputText
            v-model="phone"
            class="mb-2"
            :label="$t('account.addresses.popup.phone.label')"
            name="phone"
            autocomplete="tel"
          />
          <template v-if="$v.phone.$dirty">
            <span
              v-if="!$v.phone.validPhone"
              class="label-sm text-error-default"
              >{{ $t('account.addresses.popup.phone.format') }}</span
            >
          </template>
        </div>

        <!-- Duplicate button elements to match fixed content below -->
        <div class="pointer-events-none invisible block grid gap-y-4 md:hidden">
          <div v-if="type === 'new'" class="btn">|</div>
          <div v-if="type === 'update'" class="btn">|</div>
          <div v-if="type === 'update' && deletable" class="btn">|</div>
        </div>
      </div>
    </div>
    <div
      v-if="dataShipping && dataShipping.type == 1"
      class="container pt-2 pb-4 text-center md:pb-0"
    >
      <h4 class="pt-8 pb-8">Tu compra se recoge en suscursal</h4>
      <span class="mx-2 mb-8"
        >Av. Huayacan Km1 Plaza Punto Vieira Local 1A</span
      >
    </div>
    <button
      v-if="dataShipping"
      @click="updateAddress()"
      class="outline-none focus:outline-none float-right mr-1 mb-1 flex rounded bg-blue-500 px-8 py-3 text-base font-bold uppercase text-white shadow-md transition-all duration-150 ease-linear hover:shadow-lg active:bg-blue-600"
      type="button"
    >
      <span v-if="!loading" class="text-white"
        >Continuar a metodos de envío</span
      >
      <span v-if="loading" class="animate-pulse text-white">Procesando...</span>
    </button>
    <!-- Action buttons -->
  </div>
</template>

<script>
// Helpers
import { mapState } from 'vuex';
import { validationMixin } from 'vuelidate';
import { required, maxLength, helpers } from 'vuelidate/lib/validators';
import axiosInstance from '../../../plugins/axiosInstance.js';
import LoaderProcess from './../LoaderProcess.vue';
import MapsAutocomplete from './../MapsAutocomplete.vue';
// Phone number validation
const validPhone = helpers.regex(
  'validPhone',
  /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/,
);

export default {
  components: {
    async CountrySelect() {
      const { CountrySelect } = await import('vue-country-region-select');
      return CountrySelect;
    },
    async RegionSelect() {
      const { RegionSelect } = await import('vue-country-region-select');
      return RegionSelect;
    },
    LoaderProcess,
    MapsAutocomplete,
  },

  mixins: [validationMixin],

  props: {
    dataShipping: {
      type: Object,
      default: null,
    },
    address: {
      type: Object,
      default: null,
    },
    type: {
      type: String,
      default: 'update',
    },
    flow: {
      type: String,
      default: 'default',
    },
    addressesLength: {
      type: Number,
      default: 0,
    },
    deletable: {
      type: Boolean,
      default: false,
    },
    defaultable: {
      type: Boolean,
      default: false,
    },
    isCreating: {
      type: Boolean,
      default: false,
    },
    isUpdating: {
      type: Boolean,
      default: false,
    },
    isDeleting: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      loading: false,
      name: '',
      email: '',
      firstName: '',
      lastName: '',
      address1: '',
      address2: '',
      state: '',
      city: '',
      zip: '',
      country: '',
      phone: '',
      setDefault: false,
      addresses: null,
      defaultAddressId: '',
      addressSelect: null,
    };
  },
  async fetch() {
    // Set page data
  },
  computed: {
    ...mapState(['cart', 'customerLoggedIn', 'customer', 'cartIsUpdating']),
    disableDefaultOption() {
      // Disable if no default address is set and no addresses exist
      if (!this.defaultAddressId && !this.addressesLength) return true;
      // Disable if current address is the only one and default
      if (this.address) {
        if (
          this.defaultAddressId === this.address.id &&
          this.addressesLength === 1
        )
          return true;
      }
      return false;
    },

    addressBody() {
      const {
        firstName,
        lastName,
        address1,
        address2,
        city,
        state,
        zip,
        country,
        phone,
      } = this;
      return {
        firstName,
        lastName,
        address1,
        address2,
        city,
        state,
        zip,
        country,
        phone,
      };
    },
  },
  watch: {
    cart() {
      console.log(this.cart);
      this.name = this.cart.shipping.name;
      this.firstName = this.cart.shipping.firstName;
      this.lastName = this.cart.shipping.lastName;
      this.address1 = this.cart.shipping.address1;
      this.address2 = this.cart.shipping.address2;
      this.state = this.cart.shipping.state;
      this.city = this.cart.shipping.city;
      this.zip = this.cart.shipping.zip;
      this.country = this.cart.shipping.country;
      this.phone = this.cart.shipping.phone;
      this.email = this.cart.account?.email || '';
      this.initializeAddress();
    },
    customer() {
      this.getAdresses();
    },
  },
  created() {
    // Prefill form data for updating existing

    if (this.address) {
      this.firstName = this.address.firstName || '';
      this.lastName = this.address.lastName || '';
      this.address1 = this.address.address1 || '';
      this.address2 = this.address.address2 || '';
      this.state = this.address.state || '';
      this.city = this.address.city || '';
      this.zip = this.address.zip || '';
      this.country = this.address.country || '';
      this.phone = this.address.phone || '';

      // Set default check state
      if (this.defaultAddressId === this.address.id) {
        this.setDefault = true;
      }
    }

    // If there's no default card, force set default
    if (
      !this.defaultAddressId &&
      !this.addressesLength &&
      this.type === 'new'
    ) {
      this.setDefault = true;
    }
  },
  async mounted() {},
  methods: {
    onChangeMaps(dataMaps) {
      this.address1 = dataMaps.route + ' ' + dataMaps.street_number || '';
      this.address2 = dataMaps.lat + '|' + dataMaps.lng;
      this.state = dataMaps.stateName === 'Quintana Roo' ? 'ROO' : '';
      this.city = dataMaps.city;
      this.zip = dataMaps.zipcode || '';
      this.country = dataMaps.countryCode || '';
    },
    async getAdresses() {
      const { results: addresses } = await this.$swell.account.listAddresses();

      if (this.customer.shipping) {
        this.defaultAddressId = this.customer.shipping.accountAddressId;
        this.addressSelect = this.defaultAddressId;
        this.initializeAddress();
      }

      this.addresses = addresses;
      this.onChangeAdress();
    },
    initializeAddress() {
      if (this.cart) {
        if (this.cart.shipping) {
          if (this.cart.shipping.accountAddressId) {
            this.addressSelect = this.cart.shipping.accountAddressId;
          }
        }
      }
    },
    onChangeAdress() {
      if (this.addressSelect !== '') {
        const address = this.addresses.find(
          (address) => address.id === this.addressSelect,
        );
        if (address) {
          this.name = address.name;
          this.firstName = address.firstName;
          this.lastName = address.lastName;
          this.address1 = address.address1;
          this.address2 = address.address2;
          this.state = address.state;
          this.city = address.city;
          this.zip = address.zip;
          this.country = address.country;
          this.phone = address.phone;
        }
      }
    },
    async updateAddress() {
      this.loading = true;
      const data = {
        name: this.name,
        firstName: this.firstName,
        lastName: this.lastName,
        address1: this.address1,
        address2: this.address2,
        city: this.city,
        state: this.state,
        zip: this.zip,
        country: this.country, // Two letter ISO country code
        phone: this.phone,
      };
      const dataAcc = {
        email: this.email,
      };
      const dataShip = {
        dataAddress: data,
        dataAccount: dataAcc,
      };
      const axios = axiosInstance.instance();
      const shippingParams = JSON.parse(JSON.stringify(this.dataShipping));
      shippingParams.price = 60;
      const response = await axios.put(
        'updateShippingService/' + this.cart.id,
        shippingParams,
      );
      if (response.status === 200) {
        await this.$store.dispatch('initializeCart', {});
        this.$emit('onSelectShipping', shippingParams);
        await this.$store.dispatch('updateShipping', dataShip);
        this.$emit('advance');
        this.loading = false;
      }
      this.loading = false;
    },
    create() {
      // Validate fields
      this.$v.$touch();
      if (this.$v.$invalid) return;

      if (this.flow === 'payment') {
        this.$emit('new-billing-address', {
          ...this.addressBody,
          isDefault: this.setDefault,
        });
        return;
      }

      this.$emit('new', { ...this.addressBody, isDefault: this.setDefault });
    },

    update() {
      this.$v.$touch();
      if (this.$v.$invalid) return;

      this.$emit('update', { ...this.addressBody, isDefault: this.setDefault });
    },

    remove() {
      this.$emit('delete', this.address.id);
    },

    async handleEnterKey() {
      switch (this.type) {
        case 'update':
          await this.update();
          break;
        case 'new':
          await this.create();
          break;
        default:
      }
    },
  },

  validations: {
    firstName: { required, maxLength: maxLength(40) },
    lastName: { required, maxLength: maxLength(40) },
    address1: { required },
    city: { required },
    email: { required },
    state: { required },
    zip: { required },
    country: { required },
    phone: { validPhone },
  },
};
</script>
