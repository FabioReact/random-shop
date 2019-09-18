const initialCart = {
    cart: [
        {
            id: '1',
            title: "Tshirt - Batman",
            img: "https://amp.businessinsider.com/images/56e71048dd0895ed158b4684-750-386.png",
            price: "15"
        }
    ]
}

const cartReducer = (state = initialCart, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const newCart = state.cart.concat(action.payload)
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