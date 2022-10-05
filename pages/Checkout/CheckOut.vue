<template>
  <main>
    <LoaderProcess :Title="'Cargando productos'" :loading="!cart" />
    <section class="md:flex">
      <div class="relative md:w-2/3">
        <div v-if="cart && cart.items && cart.items.length">
          <div class="mt-8">
            <h2
              class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl"
            >
              The Sweet Spot
            </h2>

            <p
              class="max-w-screen-md mx-auto text-center text-gray-500 md:text-lg"
            >
              Por favor llena tu información.
            </p>
          </div>
          <div class="text-gray-600">
            <div class="container mx-auto flex flex-col flex-wrap px-5 py-4">
              <div class="mx-auto flex flex-wrap">
                <a
                  @click="step = 1"
                  v-bind:class="{
                    'text-blue-500 bg-blue-100 border-indigo-500': step == 1,
                  }"
                  class="title-font inline-flex w-1/2 cursor-pointer items-center justify-center border-b-2 py-3 font-medium leading-none tracking-wider sm:w-auto sm:justify-start sm:px-6"
                >
                  Metodo de envío
                </a>
                <a
                  @click="dataShipping ? (step = 2) : (step = step)"
                  v-bind:class="{
                    'text-blue-500 bg-blue-100 border-indigo-500': step == 2,
                  }"
                  class="title-font inline-flex w-1/2 cursor-pointer items-center justify-center border-b-2 py-3 font-medium leading-none tracking-wider sm:w-auto sm:justify-start sm:px-6"
                >
                  Información del cliente
                </a>
                <a
                  v-bind:class="{
                    'text-blue-500 bg-blue-100 border-indigo-500': step == 3,
                  }"
                  @click="step = 3"
                  class="title-font inline-flex w-1/2 cursor-pointer items-center justify-center border-b-2 py-3 font-medium leading-none tracking-wider sm:w-auto sm:justify-start sm:px-6"
                >
                  Metodo de pago
                </a>
              </div>
              <div class="flex w-full flex-col">
                <div class="bg-white py-4 sm:py-4 lg:py-4">
                  <div class="max-w-screen-2xl mx-auto px-4 md:px-8">
                    <!-- form - start -->
                    <ShippingMethod
                      v-show="step == 1"
                      @onSelectShipping="onSelectShipping"
                      @advance="step = 2"
                    />
                    <ClientInfo
                      v-show="step == 2"
                      :dataShipping="dataShipping"
                      @advance="step = 3"
                    />
                    <PaymentMethod v-show="step == 3" />
                    <!-- form - end -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Cart overview -->
      <div class="bg-gray-200 md:w-1/3">
        <cartPreview />
      </div>
    </section>
  </main>
</template>

<script>
// Helpers
import { mapState } from 'vuex';
import { validationMixin } from 'vuelidate';
import cartPreview from '../../components/custom/cartPreview.vue';
import ClientInfo from '../../components/custom/Checkout/ClientInfo.vue';
import ShippingMethod from '../../components/custom/Checkout/ShippingMethod.vue';
import PaymentMethod from '../../components/custom/Checkout/PaymentMethod.vue';
import LoaderProcess from '../../components/custom/LoaderProcess.vue';
import pageMeta from '~/mixins/pageMeta';
import refetchCurrencyMixin from '~/modules/swell/mixins/refetchCurrency';

export default {
  name: 'ProductDetailPage',
  mixins: [pageMeta, validationMixin, refetchCurrencyMixin],

  data() {
    return {
      step: 1,
      dataShipping: null,
    };
  },
  components: {
    cartPreview,
    ClientInfo,
    ShippingMethod,
    PaymentMethod,
    LoaderProcess,
  },
  async fetch() {
    await this.$store.dispatch('initializeCustomer');
  },

  computed: {
    ...mapState([
      'cart',
      'cartIsUpdating',
      'currency',
      'customerLoggedIn',
      'customer',
      'locale',
    ]),
  },

  watch: {},

  mounted() {
    console.log(this.$swell);
    this.$store.dispatch('initializeCustomer');
  },

  methods: {
    onSelectShipping(data) {
      this.dataShipping = data;
    },
  },

  validations() {},
};
</script>
