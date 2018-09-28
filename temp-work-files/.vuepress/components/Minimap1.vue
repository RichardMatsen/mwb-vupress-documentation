<template>
  <div>
    <main id="content">
      <div class="section" data-title="1">Lorem</div>
      <div class="section" data-title="2">Ipsum</div>
      <div class="section" data-title="3">Gotsum</div>
    </main>
    <aside ref="minimap" id="minimap"></aside>
  </div>
</template>

<script>
import Minimap from 'dom-minimap'

export default {
  // props: [
  //   'content'
  // ],
  mounted() {
    console.log(this)
    console.log(this.$parent.$el)
    console.log(this.$refs)
    const minimap = Minimap({ 
      content: this.$parent.$el,
      // content: 'content',
      // sections: 'content'
      sections: 'section',
      title: 'data-title' 
    })
    const map = minimap();
    console.log('map', map)
    this.$refs.minimap.appendChild(minimap())
    // this.$parent.$el.appendChild(map)
  }
}
</script>
