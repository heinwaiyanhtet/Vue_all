<template>
  <div class="border border-primary rounded p-3 mb-3">
    <div class="row align-items-center">
      <div class="col-8">
        <p class="small text-black-50 mb-0">
          Unit Price : ${{productDetail.price}}
        </p>
        <p class="mb-2">{{ productDetail.title }}</p>
        <p class="mb-0 text-primary">Cost : ${{calcCost}}</p>
      </div>
      <div class="col-4">
        <div class="row mb-3 g-2">
          <div class="col-3">
            <button class="btn btn-primary w-100" @click="minus">
              <i class="fa-solid fa-minus"></i>
            </button>
          </div>
          <div class="col-6">
            <input type="text" v-model="quantity" class="form-control border-primary text-end">
          </div>
          <div class="col-3">
            <button class="btn btn-primary w-100" @click="plus">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
        <AddToCartButton :product-detail="productDetail" />
      </div>
    </div>
  </div>
</template>


<script>
import AddToCartButton from "@/components/AddToCartButton";
export default {
  name : "ControlCart",
  data() {
    return {
      quantity: this.productDetail.quantity
    }
  },
  computed: {
    calcCost() {
      console.log("I'm computed")
      let cost = this.productDetail.price * this.quantity;
      return cost.toFixed(2)
    }
  },
  methods: {
    plus() {
      this.productDetail.quantity = ++this.quantity
      this.productDetail.cost = this.calcCost
      this.$store.commit("cartQuantityChange",this.productDetail)
    },
    minus(){
      if(this.productDetail.quantity > 1){
        this.productDetail.quantity = --this.quantity
        this.productDetail.cost = this.calcCost
        this.$store.commit("cartQuantityChange",this.productDetail)
      }
    }
  },
  components: {AddToCartButton},
  props: {
    productDetail: Object,
    }
  }
</script>

<style>

</style>