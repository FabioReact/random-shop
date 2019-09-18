import React, { Component } from 'react'
import { Button, Item, Grid } from 'semantic-ui-react'

import Cart from '../components/Cart'

const ShopItem = (props) => {
    return (
        <Item>
            <Item.Image size='small' src={props.data.img} />
            <Item.Content verticalAlign='middle'>
                <Item.Header>{props.data.title}</Item.Header>
                <Item.Description>Prix unitaire: {props.data.price}</Item.Description>
                <Item.Extra>
                    <Button floated='right' onClick={() => props.onAddItem(props.data.id)}>Ajouter</Button>
                </Item.Extra>
            </Item.Content>
        </Item>
    )
}

export default class Shop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            cart: []
        }
    }

    onAddItem = (id) => {
        const result = this.state.cart.find(element => element.id === id)
        
        if (result) {
            const index = this.state.cart.indexOf(result)
            return this.setState(state => {
                const newCart = [...state.cart]
                newCart[index].quantity += 1
                return {
                    cart: newCart
                }
            })
        }

        this.setState(state => {
            return {
                cart: state.cart.concat({
                    id: id,
                    quantity: 1
                })
            }
        })
    }

    componentDidMount() {
        fetch("http://localhost:4000/products", {method: "GET"})
            .then(result => result.json())
            .then(data => {
                this.setState({
                    products: data
                })
            })
    }

    render() {
        // console.log(this.state.cart)
        return (
            <div>
                <Grid>
                    <Grid.Column width={12}>
                        <Item.Group relaxed>
                            {this.state.products.map(product =>  
                                <ShopItem 
                                    data={product}
                                    key={product.id}
                                    onAddItem={this.onAddItem}
                                />)}
                        </Item.Group>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Cart items={this.state.cart} />
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
