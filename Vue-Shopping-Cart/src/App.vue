<template>
  <div>
    <Nav></Nav>
    <RouterView></RouterView>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
export default {
  components: {Nav},
  created() {
    if(localStorage.getItem("products")){
      let json = JSON.parse(localStorage.getItem("products"))
      this.$store.commit('productsFromApi',json)
    }else{
      fetch('https://fakestoreapi.com/products/')
          .then(res=>res.json())
          .then(json=> {
            console.log(json)
            localStorage.setItem("products",JSON.stringify(json))
            this.$store.commit('productsFromApi',json)
          })
    }

  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;700&display=swap');

@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~@fortawesome/fontawesome-free/css/all.min.css";
@import "~animate.css/animate.min.css";

*{
  font-family: 'Oswald', sans-serif;
}

</style>