<template>
  <div>
    <!-- Hero banner -->
    <HeroBanner v-if="false" />
    <!-- END Hero banner-->
    <FilterPanel
      v-if="$breakpoints.sSm"
      v-show="filterModalIsVisible"
      :show="filterModalIsVisible"
      :filters="filters"
      :filter-state="filterState"
      @click-close="toggleFilterModal()"
      @change="updateFilters"
    />
    <StickyBarFilter @filterButton="toggleFilterModal()" />
    <LoaderProcess :Title="'Cargando productos'" :loading="loading" />
    <div class="grid grid-cols-12">
      <div
        class="col-start-1 col-end-4 hidden rounded-lg text-center font-bold md:block lg:block"
      >
        <Filters
          v-if="$breakpoints.lMd"
          :filters="filters"
          :filter-state="filterState"
          @change="updateFilters"
        />
      </div>
      <div class="col-start-1 col-end-13 md:col-start-4 lg:col-start-4">
        <CategorySwiper @selectCategory="findByCategory" />
        <h1 class="text-heading ml-4 mt-4 text-lg font-bold tracking-tight">
          Productos
        </h1>
        <div class="container pt-2 pb-4">
          <productList :columnCount="5" :products="products" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { stringify } from 'qs';
import productList from '../../components/custom/productList.vue';
import Filters from '../../components/custom/Filters.vue';
import HeroBanner from '../../components/custom/HeroBanner.vue';
import StickyBarFilter from '../../components/custom/StickyBarFilter.vue';
import CategorySwiper from '../../components/custom/CategoryTags.vue';
import LoaderProcess from '../../components/custom/LoaderProcess.vue';
import refetchCurrencyMixin from '~/modules/swell/mixins/refetchCurrency';

import { getFilterStateFromQuery } from '~/modules/swell/utils/getFilterStateFromQuery';

// onst swellNode = require('swell-node');
export default {
  name: 'ProductIndexPage',
  mixins: [refetchCurrencyMixin],
  components: {
    HeroBanner,
    StickyBarFilter,
    CategorySwiper,
    Filters,
    productList,
    LoaderProcess,
  },
  data() {
    return {
      loading: false,
      filterModalIsVisible: false,
      products: [],
      filters: [],
      filterState: {},
      productCount: 0,
      pages: {},
      currentPage: 0,
      settings: {
        productCols: 3,
      },
    };
  },

  async fetch() {
    this.loading = true;
    const { $swell, $route } = this;
    const page = parseInt($route.query.page) || 1;
    // const limit = parseInt($route.query.limit) || 24;
    // Set preload data
    this.products = [];

    // Fetch all products
    let products = await this.fetchProducts();
    const categories = await $swell.categories.list();
    this.filters = await $swell.products.filterableAttributeFilters(products);
    this.filters.push(this.buildCategoryFilters(categories));
    this.filterState = getFilterStateFromQuery($route.query, this.filters);
    if (this.activeFilterCount) {
      products = await this.fetchProducts(this.filterState, this.filters);
    }
    // Set component data
    if (products) {
      this.products = products.results;
      this.productCount = products.count;
      this.pages = products.pages;
      this.currentPage = page;
    }
    this.loading = false;
  },
  methods: {
    buildCategoryFilters(categories) {
      const catFilters = [];
      categories.results.forEach((item) => {
        catFilters.push({
          value: item.slug,
          label: item.name,
        });
      });
      return {
        id: 'category',
        label: 'Category',
        type: 'select',
        options: catFilters,
      };
    },
    async findByCategory(data) {
      this.loading = true;
      const { $swell } = this;
      /* const limit = parseInt($route.query.limit) || 24;
      this.products = [...Array(limit).keys()]; */
      // Fetch all products
      let dataFilter = {
        $currency: $swell.currency.list().map((currency) => currency.code),
      };

      if (data.category) {
        dataFilter = {
          category: data.category,
          expand: ['variants'],
          $currency: $swell.currency.list().map((currency) => currency.code),
        };
      }
      const products = await $swell.products.list(dataFilter);
      if (products) {
        this.products = products.results;
        this.productCount = products.count;
        this.pages = products.pages;
      }
      this.loading = false;
    },
    async updateProductsFiltered() {
      this.loading = true;
      const { $route } = this;
      // Parse URL query params
      // this.page = parseInt($route.query.page) || 1;
      // this.sortMode = $route.query.sort || '';
      this.filterState = await getFilterStateFromQuery(
        $route.query,
        this.filters,
      );
      if (this.filterState.price) {
        this.filterState.price[0] = Number(this.filterState.price[0]);
        this.filterState.price[1] = Number(this.filterState.price[1]);
      }

      const products = await this.fetchProducts(this.filterState, this.filters);

      this.products = products.results;
      this.loading = false;
    },
    updateFilters(filterState) {
      this.updateRouteQuery(filterState);
    },
    updateRouteQuery(newQuery) {
      const { path, query: currentQuery } = this.$route;
      const query = { ...currentQuery, ...newQuery };

      // Remove filters from merged query if not present in new query
      const currentFilterState = getFilterStateFromQuery(
        currentQuery,
        this.filters,
      );
      const newFilterState = getFilterStateFromQuery(newQuery, this.filters);

      Object.keys(currentFilterState).forEach((key) => {
        if (!newFilterState[key]) delete query[key];
      });

      if (!query.sort) delete query.sort;

      this.$router.replace({ path, query }).catch((_err) => {
        // Avoid duplicate navigation error
        // TODO remove in Vue 3
      });
    },
    async fetchProducts(filterState) {
      console.log(this.$swell);
      const filtros = { $filters: filterState };
      const fullQuery = [stringify(filtros)].join('&').replace(/^&/, '');
      let url = '/products/';
      if (fullQuery !== '') {
        url = url + '?' + fullQuery;
      }
      const no = await this.$swell.get(url, {
        expand: ['variants'],
      });
      return no;
    },

    toggleFilterModal() {
      this.filterModalIsVisible = !this.filterModalIsVisible;
    },
  },
  computed: {
    ...mapState(['currency']),
    activeFilterCount() {
      return Object.keys(this.filterState).length;
    },
  },
  watch: {
    // Call the update method when the URL query changes
    '$route.query': 'updateProductsFiltered',
  },
  // Watch URL query for pagination changes (triggers fetch method again)
  // https://nuxtjs.org/api/pages-watchquery/
  watchQuery: ['page'],
  async mounted() {
    // Fetch filtered products on mount
    await this.updateProductsFiltered();
  },
};
</script>
