import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom"

export default class MenuExampleBasic extends Component {
    // constructor(props) {
    //     super(props)
    // }
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    // console.log(this.props)

    return (
        <Menu>
            <Menu.Item
                as="span"
                name='Accueil'
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
            >
                <Link to="/">Accueil</Link>                
            </Menu.Item>
            
            <Menu.Item
                as='span'
                name='shop'
                active={activeItem === 'shop'}
                onClick={this.handleItemClick}
            >
                <Link to="/shop">Boutique</Link>
            </Menu.Item>
        </Menu>
    )
  }
}