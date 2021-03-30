
const state = {
    cartProducts: []
}

const getters = {
    totalPrice: (state) => {
        var prices = 0 
        state.cartProducts.map(cp => prices += cp.inventory*cp.price)
        return prices
    }
}

const actions = {
    addProducttoCart(context, id){
        context.commit('addProducttoCart', id)
    },
    deleteProductFromCart(context, id){
        context.commit('deleteProductFromCart', id)
    }

}

const mutations = {
    addProducttoCart(state, product){
        // 如果这个商品已经存在购物车了
        var exist = false
        state.cartProducts.map(p => {
            if(p.id == product.id){
                p.inventory ++
                exist = true
                return
            }
        }
        )
        if(!exist){
            // 如果这个商品不存在于购物车
            console.log("enter not exist")
            var cartPro = {...product}
            cartPro.inventory = 1
            state.cartProducts.push(cartPro)
        }
        
    },
    deleteProductFromCart(state, id){
        state.cartProducts.map(p => {
            if(p.id == id){
                console.log("enter cart deleteProductFromCart" + id)
                p.inventory --
                console.log(p)
                return
            }
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}