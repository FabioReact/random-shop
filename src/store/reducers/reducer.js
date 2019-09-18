const initialCart = {
    cart: [
        {
            id: '1',
            title: "Tshirt - Batman",
            img: "https://amp.businessinsider.com/images/56e71048dd0895ed158b4684-750-386.png",
            price: "15",
            quantity: 1
        }
    ]
}

const cartReducer = (state = initialCart, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            let newCart
            // updateElement me sert à savoir si mon élément est déjà dans mon panier ou non
            const updateElement = state.cart.filter(item => item.id === action.payload.id)
            // Si oui, je met à jour la quantité de mon élément
            if (updateElement.length !== 0) {
                newCart = state.cart.map(item => {
                    if (item.id === action.payload.id)
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        }
                    return {
                        ...item
                    }
                })
            } else {
                // Sinon, j'ajoute mon nouvel élément
                newCart = state.cart.concat({
                    ...action.payload,
                    quantity: 1
                })
            }
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

export default cartReducer