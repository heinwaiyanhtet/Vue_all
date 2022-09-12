<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-8 col-lg-6">
        <ControlCart v-for="(cart,index) in carts" :key="index" :product-detail="cart" />
        <hr>
        <div class="d-flex justify-content-between align-items-center">
          <h1 class="mb-0">Total Cost : {{ costTotal }}</h1>
          <button class="btn btn-lg btn-primary">Check Out</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ControlCart from "@/components/ControlCart";
import {mapState} from "vuex";
export default {
  components: {ControlCart},
  computed: {
    costTotal(){
      return this.carts.reduce((pv,cv)=>pv+Number(cv.cost),0).toFixed(2)
    },
    ...mapState({
      carts(state){
        return state.cart;
      }
    }),
  },
}
</script>

<style scoped>

</style>