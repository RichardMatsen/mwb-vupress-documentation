<template>
  <div class="mermaid">
    <ClientOnly>
      <slot></slot>
    </ClientOnly>
  </div>
</template>

<script>
export default {
  mounted() {
    import("../../../node_modules/mermaid/dist/mermaid").then(m => {
      m.initialize({
        startOnLoad: true
      });
      m.init();
    });
  }
};
</script>
