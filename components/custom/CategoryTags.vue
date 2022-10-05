<template>
  <div class="w-full bg-gray-100">
    <div class="px-4 pt-2 pb-5 lg:p-3 lg:pb-3">
      <h1 class="text-heading text-lg font-bold tracking-tight">Categorías</h1>
      <div ref="swiper" class="relative">
        <div class="swiper flex">
          <div class="swiper-wrapper flex overflow-x-scroll">
            <template v-for="(cate, index) in categories">
              <span
                :key="index"
                @click="categorySelection(cate)"
                class="mr-1 inline-block cursor-pointer rounded bg-blue-200 py-1 px-2 text-xs font-semibold uppercase uppercase text-blue-600 last:mr-0"
                v-bind:class="{
                  'text-pink-600 bg-pink-200': selectCategory === cate.id,
                }"
              >
                {{ cate.name }}
              </span>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import 'swiper/swiper-bundle.min.css';
// import { Swiper, Navigation, Pagination } from 'swiper';
import refetchCurrencyMixin from '~/modules/swell/mixins/refetchCurrency';
export default {
  name: 'CategoryTags',
  mixins: [refetchCurrencyMixin],
  components: {},
  data() {
    return {
      selectCategory: null,
      aspectRatio: '1:1',
      sizes: null,
      widths: [192, 262, 358, 548, 716, 1096],
      categories: [],
      categoriesCount: 0,
      pages: {},
      currentPage: 0,
    };
  },
  async fetch() {
    const { $swell } = this;

    this.categories = [...Array(5).keys()].map(() => ({}));

    // Fetch all categories
    const categories = await $swell.categories.list();
    this.aspectRatio = await this.$swell.settings.get(
      'productPreviews.aspectRatio',
      '1:1',
    );

    // Set component data
    if (categories) {
      this.categories = categories.results;
    }
  },

  // Watch URL query for pagination changes (triggers fetch method again)
  // https://nuxtjs.org/api/pages-watchquery/
  watchQuery: ['page'],
  methods: {
    categorySelection(category) {
      if (this.selectCategory === category.id) {
        this.selectCategory = null;
      } else {
        this.selectCategory = category.id;
      }
      this.$emit('selectCategory', { category: this.selectCategory });
    },
  },
  mounted() {},
};
</script>
<style>
::-webkit-scrollbar {
  display: none;
  width: 1px;
  background: transparent; /* make scrollbar transparent */
}
</style>
<style scoped>
.swiper {
  width: 100%;
  display: flex;
  overflow: hidden;
  position: relative;
}

.swiper-slide {
  width: 80px !important;
}

.swiper-button-next,
.swiper-button-prev {
  position: absolute;
  top: 50%;
  width: calc(var(--swiper-navigation-size) / 44 * 27);
  height: var(--swiper-navigation-size);
  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffb4f2 !important;
  border-radius: 9999px;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 25px;
}
</style>
