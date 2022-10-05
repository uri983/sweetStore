<template>
  <!-- Panel -->
  <div class="w-full">
    <LoaderProcess :loading="loading" />
    <div class="container pb-4 md:pb-0">
      <div class="flex py-4">
        <h3>Metodo de envío</h3>
      </div>
    </div>
    <div class="container pt-2 pb-4 md:pb-0">
      <div @click="selectMethod(1)" class="w-full">
        <div
          class="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg"
          v-bind:class="{
            'text-blue-500 bg-blue-100 border-indigo-500': selected == 1,
          }"
        >
          <div class="flex-auto px-4 py-5">
            <h6 class="text-xl font-semibold">{{ pickup.service }}</h6>
            <p class="text-blueGray-400 mt-2 mb-4">
              Precio: ${{ pickup.price }} MXN.
            </p>
          </div>
        </div>
      </div>
      <div @click="selectMethod(2)" class="w-full">
        <div
          class="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg"
          v-bind:class="{
            'text-blue-500 bg-blue-100 border-indigo-500': selected == 2,
          }"
        >
          <div class="flex-auto px-4 py-5">
            <h6 class="text-xl font-semibold">{{ standar.service }}</h6>
            <p class="text-blueGray-400 mt-2 mb-4">
              Precio calculado segun tu ubicación
            </p>
          </div>
        </div>
      </div>
    </div>
    <button
      @click="addShippingMethod"
      class="outline-none focus:outline-none float-right mr-1 mb-1 flex rounded bg-blue-500 px-8 py-3 text-base font-bold uppercase text-white shadow-md transition-all duration-150 ease-linear hover:shadow-lg active:bg-blue-600"
      type="button"
    >
      <span v-if="!loading" class="text-white">Continuar</span>
      <span v-if="loading" class="animate-pulse text-white">Procesando...</span>
    </button>
    <!-- Action buttons -->
  </div>
</template>

<script>
// Helpers
import { mapState } from 'vuex';
import { validationMixin } from 'vuelidate';
import axiosInstance from '../../../plugins/axiosInstance.js';
import LoaderProcess from './../LoaderProcess.vue';
export default {
  mixins: [validationMixin],
  components: { LoaderProcess },
  props: {},

  data() {
    return {
      selected: 1,
      loading: false,
      pickup: {
        price: 0,
        service: 'Recoger en tienda',
        service_name: 'Recoger en tienda',
      },
      standar: {
        price: 0,
        service: 'Envio Estandar (Cancún)',
        service_name: 'Envio Estandar (Cancún)',
      },
    };
  },
  async fetch() {
    // Set page data
  },
  computed: {
    ...mapState(['cart', 'customerLoggedIn', 'customer', 'cartIsUpdating']),
  },
  watch: {
    cart() {
      console.log(this.$swell);
      console.log(this.cart);
      const service = this.cart?.shipping?.service || null;
      console.log(service);
      if (service === this.standar.service) {
        this.selected = 2;
      } else {
        this.selected = 1;
      }
    },
    customer() {
      console.log(this.customer);
    },
  },
  created() {},
  mounted() {},
  methods: {
    selectMethod(type) {
      this.selected = type;
    },
    async addShippingMethod() {
      this.loading = true;
      try {
        const axios = axiosInstance.instance();
        const dataParams = this.selected === 1 ? this.pickup : this.standar;
        const data = await axios.put(
          'updateShippingService/' + this.cart.id,
          dataParams,
        );
        if (data.status === 200) {
          await this.$store.dispatch('initializeCart', {});
          dataParams.type = this.selected;
          this.$emit('onSelectShipping', dataParams);
          this.$emit('advance');
          this.loading = false;
        }
      } catch (e) {
        console.log(e);
        this.loading = false;
      }
      this.loading = false;
    },
  },
};
</script>
