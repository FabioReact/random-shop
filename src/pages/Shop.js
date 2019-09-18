import React, { Component } from 'react'
import { Item, Grid } from 'semantic-ui-react'

import Cart from '../components/Cart'
import ShopItem from '../components/ShopItem'

export default class Shop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
        }
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
                                />
                            )}
                        </Item.Group>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Cart />
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
