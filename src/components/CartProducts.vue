<template>
    <div>
        <ul v-for="cproduct in cartProducts"
            :key="cproduct.id">
            <li v-show="cproduct.number>0">
            <p>{{ cproduct.name }}: {{ cproduct.number }}
                <button v-on:click="$emit('delete-products-from-cart', cproduct.id)"> - </button>
            </p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['cartProducts']
}
</script>

<style lang="less" scoped>

</style>