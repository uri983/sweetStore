<template>
  <!-- Hero banner -->
  <div class="relative">
    <div class="-z-1 overflow-hidden">
      <div class="relative">
        <div
          class="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"
        >
          <div class="swiper-wrapper">
            <div class="swiper-slide swiper-slide-active">
              <div
                class="max-h-140 sm:max-h-60 relative w-full md:h-screen lg:h-screen"
              >
                <span
                  ><img
                    alt="Get Your Bakery Items Delivered"
                    src="https://s29938.pcdn.co/wp-content/uploads/2018/10/Wallpaper-MuffinMani_Confetti_1-1100x1318.jpg.optimal.jpg"
                    decoding="async"
                    data-nimg="fill"
                    class="md:min-h-140 ld:min-h-140 h-48 w-full object-cover sm:min-h-10 md:h-full lg:h-full"
                    sizes="100vw"
                    srcset="
                      https://s29938.pcdn.co/wp-content/uploads/2018/10/Wallpaper-MuffinMani_Confetti_1-1100x1318.jpg.optimal.jpg
                    "
                /></span>
                <div
                  class="absolute inset-0 flex w-full flex-col items-center p-5 text-center md:mt-8 md:justify-center md:px-20 lg:mt-8 lg:justify-center lg:space-y-10"
                >
                  <h1
                    class="text-heading text-2xl font-bold tracking-tight lg:text-4xl xl:text-5xl"
                  >
                    Los mejores dulces de la ciudad
                  </h1>
                  <p class="text-heading text-sm lg:text-base xl:text-lg">
                    los mejores dulces importados de nuestra tienda a la puerta
                    de tu casa
                  </p>
                  <div class="max-w-3xl w-full">
                    <form class="w-full">
                      <div
                        class="shadow-900 relative flex h-14 rounded md:rounded-lg"
                      >
                        <label for="search" class="sr-only">Buscar</label
                        ><input
                          type="text"
                          value=""
                          autocomplete="off"
                          class="search item-center text-heading focus:outline-none bg-light focus:border-accent flex h-full w-full appearance-none overflow-hidden truncate rounded-l-lg border border-transparent px-4 text-sm placeholder-gray-500 shadow-lg transition duration-300 ease-in-out focus:ring-0 ltr:border-r-0 ltr:pl-6 ltr:pr-14 rtl:border-l-0 rtl:pr-6 rtl:pl-14"
                          name="search"
                          placeholder="Buscar un producto...."
                        /><button
                          class="flex h-full items-center justify-center rounded-r-lg bg-blue-200 px-8 font-semibold text-blue-50 transition-colors duration-200"
                        >
                          Buscar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroBanner',
  data() {
    return {};
  },
};
</script>
