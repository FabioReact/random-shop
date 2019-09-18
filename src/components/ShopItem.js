import React from 'react'
import { Button, Item } from 'semantic-ui-react'
import { connect } from 'react-redux'

const ShopItem = (props) => {
    // console.log(props)
    return (
        <Item>
            <Item.Image size='small' src={props.data.img} />
            <Item.Content verticalAlign='middle'>
                <Item.Header>{props.data.title}</Item.Header>
                <Item.Description>Prix unitaire: {props.data.price}</Item.Description>
                <Item.Extra>
                    <Button floated='right' onClick={() => props.onAddToCart(props.data)}>Ajouter</Button>
                </Item.Extra>
            </Item.Content>
        </Item>
    )
}

// const mapStateToProps = (state) => {
//     return null
// }

const mapDispatchToProps = (dispatch) => {
    return {
        onAddToCart: (item) => dispatch({type: 'ADD_TO_CART', payload: item})
    }
}

export default connect(null, mapDispatchToProps)(ShopItem)