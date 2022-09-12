<template>
  <div class="home">
    <img src="../assets/logo.png" @click="toAbout" alt="Vue Logo">
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

import router from "../router";

export default {
  name: "Home",
  // components: {
  //   HelloWorld,
  // },
  methods: {
    toAbout() {
      console.log("to about");
      router.push({name:"About",query:{name:'hhz',age:'18'}});
    }
  },
};
</script>
