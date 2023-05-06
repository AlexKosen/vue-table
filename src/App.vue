<script>
import { mapActions, mapGetters } from 'vuex';
// import { RouterLink, RouterView } from 'vue-router'

export default {
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
  
</template>

<style scoped>

</style>
