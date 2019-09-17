import React from 'react'
import { Card, Icon, /*Sticky*/ } from 'semantic-ui-react'


const Cart = () => (
    // <Sticky>
        <Card>
            <Card.Content header='Panier' />
            <Card.Content description={"Description du produit"} />
            <Card.Content extra>
                <Icon name='plus square outline' />Ajouter
            </Card.Content>
        </Card>

    // </Sticky>
)

export default Cart