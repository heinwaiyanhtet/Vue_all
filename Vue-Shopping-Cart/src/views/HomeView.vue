<template>
  <div class="container">
    <div class="row">
      <Product v-for="product in products.length && products" :key="product.id" :product-detail="product"></Product>
    </div>
  </div>
</template>

<script>
import Product from "@/components/Product";
import {mapState} from "vuex";
export default {
  components: {Product},
  data() {
    return {
      // products : [],
    }
  },
  computed: {
    ...mapState({
      products:state => state.products
    })
  },
  methods: {

  },
  created() {
    console.log("created")
  },
  mounted() {
    // fetch('https://fakestoreapi.com/products/')
    //     .then(res=>res.json())
    //     .then(json=> {
    //       console.log(json)
    //       this.products = json
    //     })
    // console.log("mounted")
  }
}
</script>

<style scoped>

</style>