import React from 'react'
import { Card, Icon, Sticky, Button, List, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'

const Cart = (props) => {
    // console.log(props)
    return (
        <Sticky>
            <Card>
                <Card.Content header='Panier' />
                <Card.Content>
                    <List divided relaxed>
                        {props.cart.map(item => {
                            return (
                                <List.Item key={item.id}>
                                    <Image avatar src={item.img} />
                                    <List.Content>
                                        <List.Header as='a'>{item.title}</List.Header>
                                        <List.Description as='a'>
                                            {item.price}€ x{item.quantity}
                                        </List.Description>
                                    </List.Content>
                                    <Button
                                        icon="trash alternate"
                                        floated="right"
                                        negative
                                        basic
                                        onClick={() => props.onDeleteFromCart(item.id)} 
                                    />
                                </List.Item>
                            )
                        })}
                    </List>
                </Card.Content>
                <Card.Content extra textAlign="center">
                    <Button icon="shopping cart" positive content="Commander" />
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