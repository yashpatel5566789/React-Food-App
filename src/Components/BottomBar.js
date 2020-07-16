import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
//import { red } from '@material-ui/core/colors';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
//import { NavLink } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    width: 370,
    
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div className="fixed-bottom">
    <React.Fragment position="static">
    
    

    
    <BottomNavigation
    
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
      
    > 
      
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      
      <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      
      <BottomNavigationAction label="Cart" icon={<ShoppingCartIcon />} />
      <BottomNavigationAction label="Account" icon={<AccountCircleIcon />} />

    </BottomNavigation>
  
   
    </React.Fragment>
    </div>
  );
}

