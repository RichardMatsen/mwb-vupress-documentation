<template>
  <div ref="resultsContainer" class="resultsContainer">

  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data() {
    return {
      table: null,
      headers: [],
      rows: [],
      cols: [],
      currentSort: {
        index: 0,
        desc: false
      }
    }
  },
  mounted() {
    Promise.all([
      Vue.http.get('../code-coverage-results/index.html'),
      Vue.http.get('../code-coverage-results/base.css'),
      Vue.http.get('../code-coverage-results/prettify.css'),
    ])
    .then(responses => {
      const parsed = this.parseResults(responses.map(r => r.body))
      const container  = this.$refs.resultsContainer
      container.innerHTML = parsed
      this.addSorting()
    })
  },
  methods: {
    parseResults([html, baseCss, prettifyCss]) {
      
      const htmlStart = html.indexOf("<div class='wrapper'>")
      const htmlEnd = html.slice(htmlStart).indexOf('<script src="prettify.js"><\/script>')
      const template = html.slice(htmlStart, htmlStart + htmlEnd)
        .replace(/<a href="src/gi, '<a href="../code-coverage-results/src')

      baseCss = baseCss.replace('sort-arrow-sprite.png', '../code-coverage-results/sort-arrow-sprite.png')
      /*
        Add scoping to the baseCss styles
        Note, using capturing groups in replace() is not recommended
        Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n
      */
      const regex = /^(.*?)\{/gm   // Capture all chars before literal '{'. Assumes multiline.
      const matches = baseCss.match(regex)
      matches.forEach(match => {
        if (!(match.slice(1,6) == 'media')) {
          baseCss = baseCss.replace(match, `.resultsContainer .wrapper ${match}`)
        }
      })

      return template + `<style>${baseCss + prettifyCss}</style>`
    },
    addSorting() {
      this.table = document.querySelector('.coverage-summary')
      if (!this.table) {
        return;
      }
      this.getModel();
      this.loadData();
      this.addSortIndicators();
      this.enableUI();
    },
    getModel() {
      this.headers = [...this.table.querySelector('thead tr').querySelectorAll('th')]
      this.rows = [...this.table.querySelector('tbody').querySelectorAll('tr')]
      this.cols = this.headers
        .map(colNode => {
          const col = {
            key: colNode.getAttribute('data-col'),
            sortable: !colNode.getAttribute('data-nosort'),
            type: colNode.getAttribute('data-type') || 'string',
            defaultDescSort: colNode.getAttribute('data-type') === 'number'
          }
          if (col.sortable) {
            const span = `<span class="sorter"></span>`;
            colNode.innerHTML = colNode.innerHTML + span;
          }
          return col
        });
    },
    loadData() {
      this.rows.forEach(row => {
        row.data = [...row.querySelectorAll('td')]
          .reduce((acc, node, idx) => {
            let val = node.getAttribute('data-value');
            if (this.cols[idx] && this.cols[idx].type === 'number') {
              val = Number(val);
            }
            acc[this.cols[idx].key] = val;
            return acc;
        })
      })
    },
    addSortIndicators() {
      this.headers[this.currentSort.index]
        .className += this.currentSort.desc ? ' sorted-desc' : ' sorted';
    },
    removeSortIndicators() {
      const col = this.headers[this.currentSort.index];
      col.className = col.className
        .replace(/ sorted$/, '')
        .replace(/ sorted-desc$/, '');
    },
    getSorter(i, desc) {
      const key = this.cols[i].key
      return (a, b) => {
        a = a.data[key];
        b = b.data[key];
        const result = a < b ? -1 : a > b ? 1 : 0;
        return desc ? result * -1 : result;
      }
    },
    sortByIndex(i, sorter) {
      const tableBody = this.table.querySelector('tbody');
      this.rows.forEach(row => {
        tableBody.removeChild(row);
      }) 
      this.rows.sort(sorter);
      this.rows.forEach(row => {
        tableBody.appendChild(row);
      })
    },
    ithSorter(i) {
      const vm = this;
      return () => {
        const desc = vm.currentSort.index === i 
          ? !vm.currentSort.desc
          : vm.cols[i].defaultDescSort;
        const sorter = vm.getSorter(i, desc);
        vm.sortByIndex(i, sorter);
        vm.removeSortIndicators();
        vm.currentSort.index = i;
        vm.currentSort.desc = desc;
        vm.addSortIndicators();
      };
    },
    enableUI() {
      this.cols.filter(col => col.sortable).forEach((col, i) => {
        const el = this.headers[i].querySelector('.sorter').parentElement;
        if (el.addEventListener) {
          el.addEventListener('click', this.ithSorter(i));
        } else {
          el.attachEvent('onclick', this.ithSorter(i));
        }
      })
    }
  }
}
</script>

<style scoped>
  div.resultsContainer {
    /* 
      Want contents to overflow right margin of partent, 
      and not have to display a horizontal scrollbar.
      First attempt, works on desktop. ToDo: check mobile
    */ 
    /* width: 1250px; */
    /* zoom: 75%; */
    margin-left: -12%;
    margin-right: -12%;
    zoom: 75%;
  }
  @media (max-width: 1250px) {
    div.resultsContainer {
      zoom: 60%;
    }
  }
</style>
