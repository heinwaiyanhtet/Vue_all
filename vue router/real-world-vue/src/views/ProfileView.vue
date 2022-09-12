<template>
  <div>
      <h1>My Name is  {{ showNameFromRoute }}</h1>
      <router-link class="btn btn-primary" to="/">To Home</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    showNameFromRoute() {
      return this.$route.params.name;
    }
  },
}
</script>

<style scoped>

</style>