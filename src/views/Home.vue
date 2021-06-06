<template>
  <div class="home">
    <div v-for="group in groups" :key="group.pk">
      <div>{{ group.get_day_of_week_display }}</div>
      <div>{{ group.get_time_display }}</div>
      <div>{{ group.get_location_display }}</div>
    </div>
  </div>
</template>

<script>

import instance from '../api'

export default {
  name: 'Groups',
  components: {
  },
  data() {
    return {
      groups: []
    }
  },
  methods: {
    updateGroups(data) {
      console.log(data)
    }
  },
  mounted() {
    instance.get('groups/?tutor=2')
    .then(response => {
      console.log(response)
      this.groups = response.data
    })
  }
}
</script>
