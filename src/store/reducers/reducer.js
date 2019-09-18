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
        case 'YOLO': {
            console.log('Doing Nothing')
            return state
        }
        default:
            return state
    }
}

export default cartReducer