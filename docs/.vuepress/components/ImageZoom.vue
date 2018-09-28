<template>
  <div id="container">
    <!-- <img src="../images/Scrollbar_CSS_Adjustment.jpg" alt="scrollbar adjustments" width="400" style="margin-left: 1.5em"/> -->
    <img :src="src" :alt="alt" :width="width" />
  </div>
</template>

<script>
import mediumZoom from 'medium-zoom'

export default {
  props: ['src', 'alt', 'width', 'data-style'],
  mounted() {
    mediumZoom('#container img')
  }
};
</script>
