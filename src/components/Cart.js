import React from 'react'
import { Card, Icon, Sticky } from 'semantic-ui-react'
import { connect } from 'react-redux'

const Cart = (props) => {
    const {items} = props
    console.log(props)
    return (
        <Sticky>
            <Card>
                <Card.Content header='Panier' />
                <Card.Content description={"Description du produit"} />
                {items.map(item => {
                    const title = fetch(`http://localhost:4000/products/${item.id}`)
                        .then(result => result.json())
                        .then(data => {
                            console.log(data)
                            return data.title
                        })
                        console.log(title)
                    return (<p>{item.id} - Quantité: {item.quantity}</p>)
                })}
                <Card.Content extra>
                    <Icon name='plus square outline' />Ajouter
                </Card.Content>
            </Card>
        </Sticky>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart    }
}

export default connect(
    mapStateToProps,
    null
)(Cart)