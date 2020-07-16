import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { NavLink } from 'react-router-dom';
import './Style.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function HomeNavigation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div  color="red">
      <AppBar position="static" style={{ backgroundColor:'red' }}>
        <Toolbar>
        <NavLink  style={{color: 'white', textDecoration: 'none'}} 
        activeStyle={{color: 'White', textDecoration: 'none'}} to='/location'>
            <b>Location</b><LocationOnIcon />
         </NavLink>
        
        
 
         
        </Toolbar>
      </AppBar>
    </div>
    </div>
  );
}