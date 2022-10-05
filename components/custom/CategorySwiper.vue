<template>
  <div class="w-full bg-gray-100">
    <div class="px-4 pt-2 pb-5 lg:p-3 lg:pb-3">
      <h1 class="text-heading text-lg font-bold tracking-tight">Categorías</h1>
      <div ref="swiper" class="relative">
        <div class="swiper flex">
          <div class="swiper-wrapper flex">
            <template v-for="(cate, index) in categories">
              <div
                :key="index"
                class="swiper-slide mx-2 mb-4 w-32 rounded bg-white"
                @click="categorySelection(cate)"
                v-bind:class="{
                  'border-sweetPrimary border-4': selectCategory === cate.id,
                }"
              >
                <div
                  class="bg-light relative cursor-pointer overflow-hidden rounded border-transparent text-center"
                  role="button"
                >
                  <div
                    class="pa-2 relative my-2 mb-3 flex h-10 w-auto items-center justify-center overflow-hidden"
                  >
                    <span>
                      <div v-if="cate.images && cate.images.length">
                        <img
                          :alt="cate.name"
                          :src="cate.images[0].file.url"
                          decoding="async"
                          data-nimg="fill"
                          sizes="100vw"
                          :srcset="cate.images[0].file.url"
                          style="object-fit: contain"
                        />
                      </div>
                    </span>
                  </div>
                  <span
                    class="text-heading block px-4 pb-4 text-center text-sm font-semibold"
                  >
                    {{ cate.name }}</span
                  >
                </div>
              </div>
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
  name: 'CategorySwiper',
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
  mounted() {
    // Swiper.use([Navigation, Pagination]);
  },
};
</script>
<style scoped>
.swiper {
  height: 90px;
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
