import React, { Component } from 'react';
import BottomBar from './BottomBar'
import AccountNavigation from './AccountNavigation'

export class Account extends Component{
    render(){
        return(
            <div>
                <AccountNavigation/>
            <h2>Account page</h2>
            <BottomBar/>
            </div>
            
        )
    }
}