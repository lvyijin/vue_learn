<template>
    <div>
        <ul v-for="product in products"
            :key="product.id">
            <li>
            <p>{{ product.title }}: 余 {{ product.inventory }} 件，价格 ¥{{ product.price }} </p>
            <button :disabled="product.inventory<=0" v-on:click="addProducttoCart(product)">加入购物车</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    // props:["products"],
    computed:{
        products(){
// .product 是 store/modules/product.js 的名字，需要指定哪个文件里的 state
            return this.$store.state.product.all
        }
    },
    methods:{
        addProducttoCart(product){
            this.$store.dispatch('product/minusProduct', product)
            // 如何在给product减1后，给cart 加 1
            this.$store.dispatch('cart/addProducttoCart', product)
        }
    },
    created(){
        this.$store.dispatch('product/getAllProducts')
    }
}
</script>

<style scoped>

</style>

