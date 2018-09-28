<template>
    <figure>
      <!-- <img src="../../images/coverage.jpg" alt=""/> -->
      <img :src="imagesrc" alt=""/>
      <figcaption>Legenda: {{ caption }} - {{ src }}</figcaption>
    </figure>
</template>
<script>
export default {
  props: ['src', 'caption'],
  computed: {
    imagesrc () {
      // return '../../guides/contribute/images/' + this.src // this.image
      // console.log('../docs/images/' + this.src)
      // return '../docs/images/' + this.src // this.image
      return './images/' + this.src // this.image
    }
  }
}
</script>
