//import React, { Component } from 'react';
//import { Navbar } from 'react-bootstrap';
//import { NavLink } from 'react-router-dom';
//import ArrowBackIcon from '@material-ui/icons/ArrowBack';
//export class Navigation extends Component{
//    render(){
//        return(
//            
//            <Navbar expand="xl" variant="dark" bg="danger">
//            <ArrowBackIcon/>
//            <NavLink className='d-inline p-1 text-white {margin: 0 auto}'
//             to="/location">
//             Location
//            </NavLink>
//            </Navbar>
//           
//        )
//    }
//}
//


// Location search page nav bar XD
import React from 'react';
import { fade,makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
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
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.40),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function LocationNavigation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div  color="red">
      <AppBar position="static" style={{ backgroundColor:'red' }}>
        <Toolbar>
        <NavLink  style={{color: 'white', textDecoration: 'none' }} 
        activeStyle={{color: 'White', textDecoration: 'none'}} to='/'>
        <ArrowBackIcon  edge="start" className={classes.menuButton}
         color="white" aria-label="menu " />
         </NavLink>
        
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
 
         
        </Toolbar>
      </AppBar>
    </div>
    </div>
  );
}