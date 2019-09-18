import React from 'react'
import { Card, Icon, Sticky, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

const Cart = (props) => {
    console.log(props)
    return (
        <Sticky>
            <Card>
                <Card.Content header='Panier' />
                <Card.Content description={"Description du produit"} />
                <ul>
                    {props.cart.map(item => {
                        return (
                            <li key={item.id}>
                                {item.title} - {item.price}€
                                <Button
                                    icon="trash alternate"
                                    negative
                                    basic
                                    onClick={() => props.onDeleteFromCart(item.id)} 
                                />
                            </li>
                        )
                    })}
                </ul>
                <Card.Content extra>
                    <Icon name='plus square outline' />Ajouter
                </Card.Content>
            </Card>
        </Sticky>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteFromCart: (id) => dispatch({type: 'DELETE_FROM_CART', payload: {id}})
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart)