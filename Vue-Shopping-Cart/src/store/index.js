import {createStore} from "vuex";

export default createStore({
    state : {
        name : "hhz",
        products : [],
        cart : [],
    },
    mutations:{
        productsFromApi(state,val){
            state.products = val
        },
        addCart(state,val){
            state.cart.push(val)
        },
        cartQuantityChange(state,val){
            let index = state.cart.findIndex(c=>c.id===val.id);
            state.cart[index].quantity = val.quantity
            state.cart[index].cost = val.cost
        },
    }
});