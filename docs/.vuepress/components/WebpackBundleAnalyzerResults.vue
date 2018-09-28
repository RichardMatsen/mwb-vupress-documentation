<template>
  <div ref="resultsContainer" class="resultsContainer" @mousemove="updateCoordinates">
    <div id="visualization" style="width: 900px; height: 900px"></div>

    <transition name="fade" mode="out-in">
      <div ref="tooltip" class="tooltip" v-if="module" :style="{ left: tooltipCoords.x, top: tooltipCoords.y }">
        <div>
          <transition name="fade" mode="out-in">
            <div :key="module.label">
              <div :key="module.label"><strong>{{module.label}}</strong></div>
              <br/>
              <div key="module.weight">
                Stat size: <strong>{{ filesize(module.weight) }}</strong>
              </div>
              <div v-if="!module.inaccurateSizes">
                Parsed size: <strong>{{ filesize(module.parsedSize) }}</strong>
              </div>
              <div v-if="!module.inaccurateSizes">
                Gzipped size: <strong>{{ filesize(module.gzipSize) }}</strong>
              </div>
              <div v-if="module.path" :key="module.path">
                <div>Path: <strong>{{module.path}}</strong></div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue'
import filesize from 'filesize'

export default {
  data() {
    return {
      zoomOutDisabled: false,
      module: null,
      tooltipCoords: {
        x: '0',
        y: '0'
      },
    }
  },
  mounted() {
    import('../public/webpack-bundle-analyzer/carrotsearch.foamtree.js').then(m => {
      Vue.http.get('../webpack-bundle-analyzer/Webpack Bundle Analyzer Saved.html')
        .then(response => {
          const data = this.parseResults(response.body)
          this.initFoamTree(data)
        })
    });
  },
  methods: {
    parseResults(html) {
      const dataStart = html.indexOf('window.chartData =')
      const dataEnd = html.slice(dataStart).indexOf('window.defaultSizes = "parsed";')
      let dataString = html.slice(dataStart + 18, dataStart + dataEnd).trim().slice(0, -1)
      dataString = dataString.replace(/statSize/g, 'weight')
      return { groups: JSON.parse(dataString) } 
    },
    initFoamTree(data) {
      const vm = this;
      const foamtree = new CarrotSearchFoamTree({
        id: "visualization",
        dataObject: data,
        layout: "squarified",
        stacking: 'flattened',
        relaxationInitializer: "ordered",
        layoutByWeightOrder: true,
        pixelRatio: window.devicePixelRatio || 1,
        maxGroups: Infinity,
        maxGroupLevelsDrawn: Infinity,
        maxGroupLabelLevelsDrawn: Infinity,
        maxGroupLevelsAttached: Infinity,
        groupMinDiameter: 0,
        groupLabelVerticalPadding: 0.2,
        rolloutDuration: 0,
        pullbackDuration: 0,
        fadeDuration: 0,
        groupExposureZoomMargin: 0.2,
        zoomMouseWheelDuration: 300,
        openCloseDuration: 200,
        titleBarDecorator(opts, props, vars) {
          vars.titleBarShown = false;
        },
        // groupColorDecorator(options, properties, variables) {
        //   const {highlightGroups} = component.props;
        //   const module = properties.group;

        //   if (highlightGroups && highlightGroups.has(module)) {
        //     variables.groupColor = {
        //       model: 'rgba',
        //       r: 255,
        //       g: 0,
        //       b: 0,
        //       a: 0.8
        //     };
        //   }
        // },
        onGroupClick(event) {
          event.preventDefault();
          this.zoomOutDisabled = false;
          this.zoom(event.group);
        },
        onGroupDoubleClick: (event) => event.preventDefault(),
        onGroupHover(event) {
          event.preventDefault()
          // Ignoring hovering on `FoamTree` branding group
          if (event.group && event.group.attribution) {
            return
          }
          vm.onHover(event)
        },
        // onGroupMouseWheel(event) {
        //   const {scale} = this.get('viewport');
        //   const isZoomOut = (event.delta < 0);

        //   if (isZoomOut) {
        //     if (this.zoomOutDisabled) return event.preventDefault();
        //     if (scale < 1) {
        //       this.zoomOutDisabled = true;
        //       event.preventDefault();
        //     }
        //   } else {
        //     this.zoomOutDisabled = false;
        //   }
        // },        
        // rainbowSaturationCorrection: 1,
        rainbowLightnessCorrection: 1,
      });
    },
    onHover(event) {
      this.module = event.group;
    },
    filesize(n) {
      // Wrap imported filesize fuction for use on template
      return n ? filesize(n) : ''
    },
    updateCoordinates(event) {
      if (!this.module) return;

      const pos = {
        left: event.pageX + 10,
        top: event.pageY + 30
      };

      const boundingRect = this.$refs.tooltip.getBoundingClientRect();
      if (pos.left + boundingRect.width > window.innerWidth) {
        // Shifting horizontally
        pos.left = window.innerWidth - boundingRect.width;
      }
      if (pos.top + boundingRect.height > window.innerHeight) {
        // Flipping vertically
        pos.top = event.pageY - 30 - boundingRect.height;
      }

      this.tooltipCoords = {
        x: `${pos.left}px`,
        y: `${pos.top}px`
      }
    }
  }
}
</script>

<style scoped>
div.resultsContainer {
  margin-left: -12%;
  margin-right: -12%;
}
.container {
  align-items: stretch;
  display: flex;
  height: 100%;
  position: relative;
  width: 100%;
}
.map {
  flex: 1;
}
.tooltip {
  font: normal 11px Verdana;
  position: absolute;
  padding: 5px 10px;
  border-radius: 4px;
  background: #fff;
  border: 1px solid #aaa;
  opacity: 0.7;
  white-space: nowrap;
  visibility: visible;
  transition: opacity .2s ease, visibility .2s ease;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
