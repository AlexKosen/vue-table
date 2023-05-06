<script>
import { mapActions, mapGetters } from 'vuex';
import vTable from './components/table/v-table.vue';
// import { RouterLink, RouterView } from 'vue-router'

export default {
  components: {
    vTable,
  },

  computed: {
    ...mapGetters([
      'USERS'
    ])
  },

  methods: {
    ...mapActions([
      'GET_USER_FROM_API'
    ])
  },
  mounted() {
    this.GET_USER_FROM_API()
},
}
</script>

<template>
  <div id="app">
    <vTable
      :users_data = USERS
    />
  </div>
</template>

<style scoped>

</style>
