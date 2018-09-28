<template>
  <div class="foamtree">
    <ClientOnly>
      <slot></slot>
    </ClientOnly>
  </div>
</template>

<script>
export default {
  mounted() {
    import('../public/webpack-bundle-analyzer/carrotsearch.foamtree.js').then(m => {
      m();
    });
  }
};
</script>
