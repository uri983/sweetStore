<template>
  <main class="">
    <div class="container pt-4 pb-4">
      <div
        class="container mx-auto flex flex-col px-6 py-4 lg:h-[32rem] lg:flex-row lg:py-16"
      >
        <div class="w-full lg:w-1/2">
          <div class="lg:max-w-lg">
            <h1
              class="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl"
            >
              Contactanos
            </h1>

            <div class="mt-8 space-y-5">
              <p
                class="-mx-2 flex items-center text-gray-700 dark:text-gray-200"
              >
                <span class="mx-2"
                  >Encuentranos en nuestras redes sociales:</span
                >
              </p>

              <p
                class="-mx-2 flex items-center text-gray-700 dark:text-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mx-2 h-6 w-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span class="mx-2">9981234567</span>
              </p>
              <button
                @click="
                  open('https://api.whatsapp.com/send?phone=5219983032752')
                "
                class="outline-none focus:outline-none mr-1 mb-1 flex rounded bg-wp px-8 py-3 text-base font-bold uppercase text-white shadow-md transition-all duration-150 ease-linear hover:shadow-lg active:bg-blue-600"
                type="button"
              >
                <BaseIcon
                  :icon="'mdi:whatsapp'"
                  size="lg"
                  class="mr-px -mb-1 text-white"
                />
                <span class="text-white">WhatsApp</span>
              </button>
              <button
                @click="open('https://www.instagram.com/munchers__inc/?hl=es')"
                class="outline-none focus:outline-none mr-1 mb-1 flex rounded bg-insta px-8 py-3 text-base font-bold uppercase text-white shadow-md transition-all duration-150 ease-linear hover:shadow-lg active:bg-blue-600"
                type="button"
              >
                <BaseIcon
                  :icon="'mdi:instagram'"
                  size="lg"
                  class="mr-px -mb-1 text-white"
                />
                <span class="text-white">Instagram</span>
              </button>
              <button
                @click="open('https://www.facebook.com/TheSweetSpotCancun/')"
                class="outline-none focus:outline-none mr-1 mb-1 flex rounded bg-fb px-8 py-3 text-base font-bold uppercase text-white shadow-md transition-all duration-150 ease-linear hover:shadow-lg active:bg-blue-600"
                type="button"
              >
                <BaseIcon
                  :icon="'mdi:facebook'"
                  size="lg"
                  class="mr-px -mb-1 text-white"
                />
                <span class="text-white">Messenger</span>
              </button>
            </div>
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
    open(url) {
      window.open(url);
    },
  },

  // Watch URL query for pagination changes (triggers fetch method again)
  // https://nuxtjs.org/api/pages-watchquery/
  watchQuery: ['page'],
};
</script>
