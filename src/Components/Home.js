import React, { Component } from 'react';
import BottomBar from './BottomBar'
import HomeNavigation from './HomeNavigation'

export class Home extends Component{
    render(){
        return(
            <div>
                <HomeNavigation/>
            <h2>Home page</h2>
            <BottomBar/>
            </div>
            
        )
    }
}