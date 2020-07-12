import React, { Component } from 'react';
import SearchNavigation from './SearchNavigation'
import BottomBar from './BottomBar'

export class Search extends Component{
    render(){
        return(
            <div>
                <SearchNavigation/>
            <h2>Search page</h2>
            <BottomBar/>
            </div>
            
        )
    }
}