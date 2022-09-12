<template>
  <div>
    <button v-if="isAdded" class="btn btn-outline-primary active w-100" @click.stop>Added</button>
    <button v-else class="btn btn-outline-primary w-100" @click.stop="add">Add to Cart</button>
  </div>
</template>

<script>
export default {
  name:"AddToCartButton",
  data() {
    return {
      isAdded: false
    }
  },
  props: {
    productDetail: Object,
  },
  methods: {
    add() {
      this.isAdded = true
      this.$store.commit("addCart",{
        ...this.productDetail,
        quantity : 1,
        cost : this.productDetail.price
      })
    },
    remove(){
      this.isAdded = false
    }
  },
  mounted() {
    if(this.$store.state.cart.find(c=>c.id === this.productDetail.id)){
      this.isAdded = true
    }
  }
}
</script>

<style scoped>

</style>