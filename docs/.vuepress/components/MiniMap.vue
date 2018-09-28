<template>
  <div class="minimap-container" :style="{ width: `${mapWidth}px` }">
    <div ref="minimap" class="minimap" :style="{ top: `${topOffset + top}px`, zoom: `${zoom}%` }">
      <div ref="canvasContainer"></div>
    </div>
  </div>
</template>

<script>

/*
  Issues:

  Content centering when minimap is displayed is done by adding non-scoped css padding-right to the div.page element.
  This is not removed when navigating to a page without minimap, e.g WebpackBundleAnalayzer so it's content is not centered properly. 

  Minimap rendering via html2canvas does not wait for custom elements on the content page to complete rendering.
  So, the test result pages do not show a propper minimap when first navigated to, but will if the page is refreshed.
  Also, mermaid diagrams are not shown as per content for the same reason.

*/

import Vue from 'vue'
import html2canvas from 'html2canvas'

export default {
  name: 'MiniMap',
  data() {
    return {
      minimapIsMounted: false,
      mapWidth: 250,
      topOffset: 250,
      top: 0,
      zoom: 25,
      content: null,
      page: null,
      subPage: null
    }
  },
  mounted() {
    this.content = this.$parent.$el
    this.setCanvas()
    window.addEventListener('scroll', this.onScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll(event) {
      const mapEffectiveHeight = this.$refs.minimap.clientHeight * this.zoom / 100
      if(mapEffectiveHeight < window.innerHeight) {
        return
      }
      const speed = .50 
      const scrollTop = window.scrollY 
      this.top = -(scrollTop * speed ) 
    },
    setCanvas() {
      const canvasContainer = this.$refs.canvasContainer 
      const options = {
        ignoreElements: (element) => 
          element.classList.contains('nav-dropdown') || 
          element == canvasContainer 
      }
      Vue.nextTick(() => {
        html2canvas(this.content, options).then(canvas => {
          canvasContainer.appendChild(canvas)
          this.minimapIsMounted = true
        });
      })
    }
  },
}
</script>

<style scoped>
div.minimap {
  background-color: lightgoldenrodyellow;
  border: lightgrey;
  border-style: solid;
  position: fixed;
  right: 10px;
}
</style>
<style>
div.page {
  padding-right: 250px;
}
</style>