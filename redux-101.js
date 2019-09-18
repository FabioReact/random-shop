const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    cart: [],
    name: "Fabio"
}

// Création de rootReducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const newCart = state.cart.concat(action.payload)
            return {
                ...state,
                cart: newCart
            }
        }
        case 'DELETE_FROM_CART': {
            const newCart = state.cart.filter(element => element.id !== action.payload.id)
            return {
                ...state,
                cart: newCart
            }
        }
        default:
            return state
    }
}

// Création du Store
// Pour créer un store, createStore prend en paramètre un reducer, que l'on appelle communement notre "rootReducer"
const store = createStore(rootReducer)
// console.log(store.getState())

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'ADD_TO_CART', payload: {
    id: 1,
    item: 'Belt',
    quantity: 1
}})
// console.log(store.getState())

store.dispatch({type: 'DELETE_FROM_CART', payload: {
    id: 1
}})
// console.log(store.getState())