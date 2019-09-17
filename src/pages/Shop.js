import React, { Component } from 'react'
import { Button, Item } from 'semantic-ui-react'

const ShopItem = (props) => {
    return (
        <Item>
            <Item.Image size='small' src={props.data.img} />
    
            <Item.Content verticalAlign='middle'>
                <Item.Header>{props.data.title}</Item.Header>
                <Item.Description>Prix unitaire: {props.data.price}</Item.Description>
                <Item.Extra>
                    <Button floated='right'>Action</Button>
                </Item.Extra>
            </Item.Content>
        </Item>
    )
}

export default class Shop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
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

    // componentDidUpdate

    // componentWillUnmount

    render() {
        return (
            <div>
                <Item.Group relaxed>
                    {this.state.products.map(product =>  <ShopItem data={product} key={product.id}/>)}
                </Item.Group>
            </div>
        )
    }
}
