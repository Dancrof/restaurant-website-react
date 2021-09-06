import React, { Fragment } from 'react'
import './navbar.css';
import themeGlobal from '../themeConfig';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import Slide from '@material-ui/core/Slide';

import { ThemeProvider } from 'styled-components';


function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

function Navbar(props) {

    return (
       <Fragment>
           <ThemeProvider theme={themeGlobal}>
                <CssBaseline />
                <HideOnScroll {...props}>
                    <AppBar>
                        <Toolbar className="nav">
                          <div className="icon_menu">
                          <IconButton className="icon" edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                          </IconButton>
                          <Typography variant="h6" className="title">
                            News
                          </Typography>
                          </div>
                          <div className="menu_nav">
                            <Button color="inherit"><b>Home</b></Button>
                            <Button color="inherit"><b>About</b></Button>
                            <Button color="inherit"><b>Contact</b></Button>
                          </div>
                        </Toolbar>
                    </AppBar>
                </HideOnScroll>
                <Toolbar />
           </ThemeProvider>
       </Fragment>
    );
}

export default Navbar
