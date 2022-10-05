<template>
  <div
    v-show="loading"
    class="fixed top-0 left-0 right-0 bottom-0 z-50 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gray-700 opacity-95"
  >
    <div
      class="loader mb-4 h-12 w-12 rounded-full border-4 border-t-4 border-gray-200 ease-linear"
    ></div>
    <h2 class="text-center text-xl font-semibold text-white">{{ Title }}</h2>
    <p class="w-1/3 text-center text-white">{{ Subtitle }}</p>
  </div>
</template>

<script>
export default {
  name: 'LoaderProcess',
  components: {},
  data() {
    return {};
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    Title: {
      type: String,
      default: 'Procesando',
    },
    Subtitle: {
      type: String,
      default: 'Esto pude tardar unos minutos.',
    },
  },
  // Watch URL query for pagination changes (triggers fetch method again)
  // https://nuxtjs.org/api/pages-watchquery/
  methods: {},
  mounted() {},
};
</script>
<style scoped>
.loader {
  border-top-color: #3498db;
  animation: spinner 1.5s linear infinite;
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
