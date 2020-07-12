import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { NavLink } from 'react-router-dom';


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

export default function LunchNavigation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div  color="red">
      <AppBar position="static" style={{ backgroundColor:'red' }}>
        <Toolbar>
        <NavLink  style={{color: 'white', textDecoration: 'none' }} 
        activeStyle={{color: 'White', textDecoration: 'none'}} to='/selectedkitchen'>
        <ArrowBackIcon  edge="start" className={classes.menuButton}
         color="white" aria-label="menu " />
         </NavLink>
        
            <b>LUNCH</b>
       
        
        
 
         
        </Toolbar>
      </AppBar>
    </div>
    </div>
  );
}