import React from 'react'
import { Card, Icon, Sticky } from 'semantic-ui-react'
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
                            <li key={item.id}>{item.title} - {item.price}€</li>
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

export default connect(
    mapStateToProps,
    null
)(Cart)