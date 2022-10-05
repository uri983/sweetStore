<template>
  <main class="">
    <div class="container pt-7 pb-4">
      <div
        class="container mx-auto flex flex-col space-y-6 px-6 py-10 lg:h-[32rem] lg:flex-row lg:items-center lg:py-16"
      >
        <div class="w-full lg:w-1/2">
          <div class="lg:max-w-lg">
            <h1
              class="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl"
            >
              Ubicación
            </h1>
          </div>
          <img
            class="lg:max-w-2xl mx-auto mt-4 h-full w-full rounded-md rounded object-cover"
            :src="require(`~/assets/location.png`)"
            alt="glasses photo"
          />
        </div>

        <div
          class="flex h-96 w-full flex-col items-center justify-center text-center lg:w-1/2"
        >
          <div class="mt-4 space-y-5">
            <p class="-mx-2 items-center text-gray-700 dark:text-gray-200">
              <span class="mx-2"
                >Av. Huayacan Km1 Plaza Punto Vieira Local 1A</span
              >
            </p>
          </div>
          <div class="mt-10 flex">
            <button
              v-if="$device.isAndroid || $device.isDesktop"
              @click="openMap()"
              class="outline-none focus:outline-none mr-1 mb-1 flex rounded bg-sweetPrimary px-8 py-3 text-base font-bold uppercase text-white shadow-md transition-all duration-150 ease-linear hover:shadow-lg"
              type="button"
            >
              <BaseIcon
                :icon="'arcticons:google-maps'"
                size="lg"
                class="mr-2 -mb-1 text-white"
              />
              <span class="text-white">Como llegar</span>
            </button>
            <button
              v-if="$device.isIos || $device.isDesktop"
              @click="openMap()"
              class="outline-none focus:outline-none mr-1 mb-1 flex rounded bg-sweetPrimary px-8 py-3 text-base font-bold uppercase text-white shadow-md transition-all duration-150 ease-linear hover:shadow-lg"
              type="button"
            >
              <BaseIcon
                :icon="'arcticons:maps'"
                size="lg"
                class="mr-px -mb-1 text-white"
              />
              <span class="text-white">Como llegar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import refetchCurrencyMixin from '~/modules/swell/mixins/refetchCurrency';

export default {
  name: 'ProductIndexPage',
  mixins: [refetchCurrencyMixin],

  data() {
    return {
      products: [],
      productCount: 0,
      pages: {},
      currentPage: 0,
      settings: {
        productCols: 3,
      },
    };
  },

  async fetch() {
    const { $swell, $route } = this;
    const page = parseInt($route.query.page) || 1;
    const limit = parseInt($route.query.limit) || 24;

    // Set preload data
    this.products = [...Array(limit).keys()];

    // Fetch all products
    const products = await $swell.products.list({
      page,
      limit,
      expand: ['variants'],
      $currency: $swell.currency.list().map((currency) => currency.code),
    });

    // Set component data
    if (products) {
      this.products = products.results;
      this.productCount = products.count;
      this.pages = products.pages;
      this.currentPage = page;
    }
  },
  methods: {
    openMap() {
      window.open(
        'https://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=21.126106830479788, -86.83926485418037',
      );
    },
  },

  // Watch URL query for pagination changes (triggers fetch method again)
  // https://nuxtjs.org/api/pages-watchquery/
  watchQuery: ['page'],
};
</script>
