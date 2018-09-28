<template>
  <div ref="container" class="container">

  </div>
</template>

<script>
import Vue from 'vue'

export default {
  mounted() {
    Vue.http.get('../cypress-test-results/cypress-tests.html')
      .then(response => {
        const parsed = this.parseResults(response.body)
        const container  = this.$refs.container
        container.innerHTML = parsed
        this.initialize();
    })
  },
  methods: {
    parseResults(results) {
      const htmlStart = results.indexOf('<body>')
      const htmlEnd = results.indexOf("<script")
      let html = results.slice(htmlStart + 6, htmlEnd)

      const styleStart = results.indexOf('<style type="text/css">')
      const styleEnd = results.indexOf('</style>')
      let styles = results.slice(styleStart + 21, styleEnd)

      const newMochaHeaderStyles = `
        #mocha .mocha-header {
            background-color: lightgray;
            padding: 0.5em;
            display: flex;
            align-items: center;
            font-size: 14px;
            margin: 0;
            color: #888;
            z-index: 1;
        }`
      const mochaHeaderStart = styles.indexOf('#mocha .mocha-header {')
      const mochaHeaderEnd = styles.slice(mochaHeaderStart).indexOf('}') + mochaHeaderStart
      styles = styles.slice(0, mochaHeaderStart) + newMochaHeaderStyles + styles.slice(mochaHeaderEnd + 1)

      return html + `<style>${styles}</style>`
    },
    initialize() {
      const vm = this;
      this.$el.querySelector('#toggle-passes').addEventListener('click', function(e) {
        e.preventDefault();
        vm.togglePasses();
      });

      const tests = this.$el.querySelectorAll('.test');
      for (let i = 0; i < tests.length; i++) {
        const head = tests[i].children[0];
        head.onclick = function () {
          const code = this.parentElement.children[1];
          const display = code.style.display;
          if (display && display === 'block') {
            code.style.display = 'none';
          } else {
            code.style.display = 'block';
          }
        };
      }
    },
    hideSuitesWithout(className) {
      var suites = this.$el.querySelectorAll('#report > .suite');
      for (let i = 0; i < suites.length; i++) {
        let suite = suites[i];
        const els = suite.querySelectorAll(className);
        if (!els.length) {
          suite.classList.add('hidden');
        }
      }
    },
    unhide() {
      const suites = this.$el.querySelectorAll('.hidden');
      for (let i = 0; i < suites.length; i++) {
        suites[i].classList.remove('hidden');
      }
    },
    togglePasses() {
      const report = this.$el.querySelector('#report');
      report.classList.toggle('hide-passes');
      if (report.classList.contains('hide-passes')) {
        this.hideSuitesWithout('.test .fail');
      } else {
        this.unhide();
      }
    }
  },
}
</script>

<style scoped>
</style>
