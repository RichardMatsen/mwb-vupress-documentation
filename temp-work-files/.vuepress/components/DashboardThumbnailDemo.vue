<template>
  <div class="dashboard-thumbnail-outer">
    <dashboard-thumbnail :measure="measure"></dashboard-thumbnail>
  </div>
</template>

<script>
import DashboardThumbnail from './DashboardThumbnail.vue'

export default {
  name: 'DashboardThumbnailDemo',
  data () {
    return {
      measure: {
        id: 1,
        title: 'Validations',
        link: '',
        icon: '',
        history: []
      }
    }
  },
}
</script>
