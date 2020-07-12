import React from 'react';
import './App.css';
import {Home} from './Components/Home';
import Location from './Components/Location';
import {SelectedKitchen} from './Components/SelectedKitchen';
import {Lunch} from './Components/Lunch';
import {Dinner} from './Components/Dinner';
import {Payment} from './Components/Payments';
import {Cart} from './Components/Cart';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Search } from './Components/Search';
import { Account } from './Components/Account'
function App() {
  return (
    <BrowserRouter>
   
   
    
      
      
      <Switch>
      
        <Route path='/' component={Home} exact  />
        
        <Route path='/location' component={Location} />
        <Route path='/selectedkitchen' component={SelectedKitchen} />
        <Route path='/lunch' component={Lunch} />
        <Route path='/dinner' component={Dinner} />
        <Route path='/payment' component={Payment} />
        <Route path='/cart' component={Cart} />
        <Route path='/search' component={Search} />
        <Route path='/account' component={Account} />
      </Switch>
    
    
    </BrowserRouter>
  );
}

export default App;
