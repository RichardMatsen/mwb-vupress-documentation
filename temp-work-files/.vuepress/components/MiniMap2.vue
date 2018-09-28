<template>
  <div class="minimap-container" :style="{ width: `${mapWidth}px` }">
    <div ref="minimap" class="minimap" :style="{ top: `${topOffset + top}px`, zoom: `${zoom}%` }">
      <div ref="canvasContainer"></div>
    </div>
  </div>
</template>

<script>

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
    // this.adjustMapPosition()
    this.content = this.$parent.$el
    // this.content.marginLeft = this.content.marginLeft - (this.mapWidth /2) 
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
    adjustMapPosition() {
      this.content = this.$parent.$el
      this.page = this.$parent.$parent.$el 
      this.subPage = document.createElement('div')
      this.subPage.classList.add('subpage')
      this.subPage.appendChild(this.content)
      this.page.insertBefore(this.subPage, this.page.children[0])
      this.subPage.appendChild(this.$el)
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
/* div.minimap-container {
  min-width: 250px;
  width: 250px;
} */
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
/* div.subpage {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
} */
/* div.content {
  margin-left: calc(margin-left - 250px)
} */
</style>