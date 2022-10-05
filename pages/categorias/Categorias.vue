<template>
  <div class="h-screen w-full bg-gray-100">
    <div class="px-4 pt-2 pb-5 lg:p-3 lg:pb-3">
      <h1
        class="text-heading mt-10 text-center text-3xl font-bold tracking-tight"
      >
        Categorías
      </h1>
      <div ref="swiper" class="relative mx-auto mt-8">
        <div class="swiper flex">
          <div class="swiper-wrapper flex flex-wrap">
            <template v-for="(cate, index) in categories">
              <NuxtLink
                :prefetch="false"
                :key="index"
                :to="'/?category=' + cate.slug"
                :title="cate.name"
              >
                <div class="mx-2 mb-4 h-36 w-36 rounded bg-white">
                  <div
                    class="bg-light relative cursor-pointer overflow-hidden rounded border-transparent text-center"
                    role="button"
                  >
                    <div
                      class="pa-2 relative my-2 mb-3 flex h-24 w-auto items-center justify-center overflow-hidden"
                    >
                      <span>
                        <div v-if="cate.images && cate.images.length">
                          <img
                            class="h-24 p-2"
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
              </NuxtLink>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  mounted() {},
};
</script>
