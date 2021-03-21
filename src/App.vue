<template>
  <div id="app">
    <h1>购物车示例</h1>
    <p>账号: {{ email }}</p>
    <p></p>
    <h2>产品</h2>
    <ul v-for="product in products"
        :key="product.id">
        <li>
          <p>{{ product.name }}: 余 {{ product.number }} 件</p>
          <button :disabled="product.number<=0" v-on:click="addProducttoCart(product.id)">加入购物车</button>
        </li>
    </ul>
    <h2>清单</h2>
    <p>请添加产品到购物车</p>
    <ul v-for="cproduct in cartProducts"
        :key="cproduct.id">
        <li v-show="cproduct.number>0">
          <p>{{ cproduct.name }}: {{ cproduct.number }}
            <button v-on:click="deleteProductsFromCart(cproduct.id)"> - </button>
          </p>
        </li>
    </ul>
    <p>合计: {{ allProductCount }}</p>
    <button :disabled="allProductCount<=0">提交</button>
  </div>
</template>

<script>
export default{
  name: "cart",
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
    addProducttoCart: function(id){
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
