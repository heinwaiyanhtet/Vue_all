<template>
  <h1>Oops!</h1>
  <h3>The {{ resource }} you are looking for isn't here.</h3>
  <router-link :to="{name:'EventList'}"> Back to the home page </router-link>
</template>

<script>
export default {
  props:{
    resource : {
       type:String,
       required:true,
       default:'page',
    }
  }
}
</script>