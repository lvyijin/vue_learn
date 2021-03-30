<template>
    <div>
        <p v-if="productCount==0">请添加产品到购物车</p>
        <ul v-for="cproduct in cartProducts"
            :key="cproduct.id">
            <li v-show="cproduct.inventory>0">
            <p>{{ cproduct.title }}: 共 {{ cproduct.inventory }} 件
                <button v-on:click="deleteProductFromCart(cproduct.id)"> - </button>
            </p>
            </li>
        </ul>
        <p v-if="productCount >0 ">总价: ¥{{ totalPrice }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    // props: ['cartProducts']
    computed: {
        cartProducts(){
            return this.$store.state.cart.cartProducts
        },
        productCount(){
            var count = 0
            this.$store.state.cart.cartProducts.map(cp => count += cp.inventory)
            return count
        },
        // totalPrice(){
        //     var prices = 0 
        //     this.$store.state.cart.cartProducts.map(cp => prices += cp.inventory*cp.price)
        //     return prices
        // }
        ...mapGetters('cart',{
            totalPrice: 'totalPrice'
        })
    },
    methods: {
        deleteProductFromCart(id){
            console.log("enter vue deleteProductFromCart")
            this.$store.dispatch('cart/deleteProductFromCart', id)
            this.$store.dispatch('product/addProduct', id)
        }
    }
}
</script>

<style lang="less" scoped>

</style>