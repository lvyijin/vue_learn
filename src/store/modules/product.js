import shop from '../../api/shop'

// initial state
const state = {
    all: []
}

// getters
const getters = {}

const actions = {
    getAllProducts(context){
        shop.getProducts(products => {
            context.commit('getAllProducts', products)
        })
    },
    minusProduct(context, product){
        context.commit('minusProduct', product.id)
    },
    addProduct(context, id){
        context.commit('addProduct', id)
    }
}

const mutations = {
    getAllProducts(state, products){
        state.all = products
    },
    minusProduct(state, id){
        state.all.map(product => {
            if(product.id == id){
                product.inventory --
                return
            }
        })
    },
    addProduct(state, id){
        state.all.map(product => {
            if(product.id == id){
                product.inventory ++
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