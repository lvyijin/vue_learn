<template>
  <div id="app">
    <h1>购物车示例</h1>
    <p>账号: {{ email }}</p>

    <p></p>
    <h2>产品</h2>
    <Products/>

    <h2>购物车</h2>
    <CartProducts/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Products from './components/Products.vue'
import CartProducts from './components/CartProducts.vue'

export default{
  computed: mapState({
    email: state => state.userinfo.email
  }),
  components: {
    Products,
    CartProducts
  },

}

</script>

<style>

</style>
