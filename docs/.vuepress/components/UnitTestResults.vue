<template>
  <div ref="container" class="container">

  </div>
</template>

<script>
import Vue from 'vue'

export default {
  mounted() {
    Promise.all([
      Vue.http.get('../unit-test-results/Karma_files/context.html'),
      Vue.http.get('../unit-test-results/Karma_files/jasmine.css')
    ])
    .then(responses => {
      const parsed = this.parseResults(responses.map(r => r.body))
      const container  = this.$refs.container
      container.innerHTML = parsed
    })
  },
  methods: {
    parseResults([html, JasmineCss]) {

      const sytlesStart = html.indexOf('<style>') 
      const stylesEnd = html.slice(sytlesStart).indexOf('</style>')
      const embeddedStyles = html.slice(sytlesStart, sytlesStart + stylesEnd)

      const htmlStart = html.indexOf('<div class="html-reporter">')
      const htmlEnd = html.slice(htmlStart).indexOf('<script type="text/javascript" src="./scripts.bundle.js.download" crossorigin="anonymous"><\/script>')
      let template = html.slice(htmlStart, htmlStart + htmlEnd)

      var regex = /<a href="http:\/\/localhost:9876\/context\.html\?spec=.*?">/gi;
      template = template.replace(regex, '<a>')

      return template + embeddedStyles + `<style>${JasmineCss}</style>`
    },
  }
}
</script>

<style scoped>
div.container {
  height: 100%;
}
iframe {
  height: 750px;
}
</style>

