<template>
  <div class="container" v-if="productDetail">
    <div class="row justify-content-center mb-3">
      <div class="col-lg-3">
        <img :src="productDetail.image" class="w-100" alt="">
      </div>
      <div class="col-lg-5">
        <div class="">
          <h4>{{ productDetail.title }}</h4>
          <div class="d-flex justify-content-between my-4">
            <p class="mb-0 badge bg-secondary">{{ productDetail.category }}</p>
            <Rating :rating="productDetail.rating" />
          </div>
          <p class="text-black-50 fw-light">
            {{ productDetail.description }}
          </p>
        </div>
      </div>
      <div class="col-8">
        <div class="mt-4">
          <ControlCart :product-detail="productDetail" />
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <Product v-for="product in relatedProducts" :key="product.id" :product-detail="product" />
    </div>
  </div>
</template>

<script>
import Rating from "@/components/Rating";
import ControlCart from "@/components/ControlCart";
import Product from "@/components/Product";
import {mapState} from "vuex";
export default {
  name : "ProductDetailView",
  components: {Product, ControlCart, Rating},
  data() {
    return {
      // productDetail: null,
      // relatedProducts : [],
      // currentId : null
    }
  },
  computed: {
    ...mapState({
      productDetail(state){
        return state.products.find(product => product.id == this.currentId)
      },
      relatedProducts(state){
        let currentCategory = this.productDetail.category
        let result = state.products.filter((product,index) => product.category === currentCategory);
        result.length = 3;
        return result
      }

    }),
    currentId(){
      return this.$route.params.id
    }
  },
  mounted() {
    console.log(this.$route.params.id)
    // this.currentId = this.$route.params.id;
    // let currentId = this.$route.params.id;
    // fetch('https://fakestoreapi.com/products/'+currentId)
    //     .then(res=>res.json())
    //     .then(json=> {
    //       console.log(json)
    //       this.productDetail = json;
    //
    //       fetch("https://fakestoreapi.com/products/category/"+json.category)
    //       .then(res=>res.json())
    //       .then(json => {
    //         this.relatedProducts = json.filter((el,index)=> el.id != currentId ).filter((el,index)=>index<4)
    //       })
    //
    //     })
  }
}
</script>

<style scoped>

</style>