<template>
  <div id="app">
    <h1>购物车示例</h1>
    <p>账号: {{ email }}</p>

    <p></p>
    <h2>产品</h2>
    <Products v-bind:products="products" v-on:add-products-to-cart="addProductstoCart"></Products>

    <h2>清单</h2>
    <p>请添加产品到购物车</p>
    <CartProducts v-bind:cartProducts="cartProducts" v-on:delete-products-from-cart="deleteProductsFromCart"></CartProducts>
    
    <p>合计: {{ allProductCount }}</p>

    <button :disabled="allProductCount<=0">提交</button>
  </div>
</template>

<script>

import Products from './components/Products.vue'
import CartProducts from './components/CartProducts.vue'

export default{
  name: "cart",
  components: {
    Products,
    CartProducts
  },
  data(){
    return {
      email: "yijing.lv@shopee.com",
      products:[
        {
          id: 0,
          name: "华为 Mate10",
          number: 4
        },
        {
          id: 1,
          name: "小米9",
          number: 2
        },
        {
          id: 2,
          name: "OPPO",
          number: 2
        }
      ],
      cartProducts: [
        {
          id: 0,
          name: "华为 Mate10",
          number: 0
        },
        {
          id: 1,
          name: "小米9",
          number: 0
        },
        {
          id: 2,
          name: "OPPO",
          number: 0
        }
      ]
    }},
  computed: {
    allProductCount: function(){
      let count = 0
      for (let i in this.cartProducts){
          count += this.cartProducts[i].number
      }
      return count
    }
  },
  methods:{
    addProductstoCart: function(id){
      console.log("enter addProducttoCart")
      console.log(id)
      this.products[id].number--
      this.cartProducts[id].number++
    },
    deleteProductsFromCart: function(id){
      this.products[id].number++
      this.cartProducts[id].number--
    }
  }
}

</script>

<style>

</style>
