import React, { Component } from 'react';
import CartNavigation from './CartNavigation'
import BottomBar from './BottomBar'

export class Cart extends Component{
    render(){
        return(
            <div>
                <CartNavigation/>
            <h2>My Cart page</h2>
            <BottomBar/>
            </div>
        )
    }
}