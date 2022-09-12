<template>
  <div>
      <h1>This is a contact view</h1>
      <router-link  class="btn btn-primary" :to="{name:'profile',params:{name:'hein',age:29}}">to profile</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>