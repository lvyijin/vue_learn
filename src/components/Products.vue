<template>
    <div>
        <ul v-for="product in products"
            :key="product.id">
            <li>
            <p>{{ product.name }}: 余 {{ product.number }} 件</p>
            <button :disabled="product.number<=0" v-on:click="$emit('add-products-to-cart', product.id)">加入购物车</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:["products"]
}
</script>

<style scoped>

</style>