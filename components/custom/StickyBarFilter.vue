<template>
  <div
    class="border-border-200 bg-light lg:top-15 sticky top-14 z-10 flex h-14 items-center justify-between border-t border-b bg-white py-3 px-5 md:top-16 md:hidden md:h-16 lg:hidden lg:px-7"
  >
    <button
      @click="$emit('filterButton')"
      class="border-border-200 text-heading hover:border-accent-hover hover:bg-accent hover:text-light focus:border-accent-hover focus:bg-accent focus:text-light focus:outline-none md:py-1.5 flex h-8 items-center rounded border bg-gray-100 bg-opacity-90 py-1 px-3 text-sm font-semibold transition-colors duration-200 md:h-10 md:px-4 md:text-base"
    >
      Filtros
    </button>
  </div>
</template>

<script>
export default {
  name: 'StickyBarFilter',
  data() {
    return {};
  },
};
</script>
