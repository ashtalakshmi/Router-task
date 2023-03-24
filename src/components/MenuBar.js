import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {AppBar,Toolbar,Container} from '@mui/material'

class Menubar extends Component{
    render(){
        return(
            <>
             <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>  
        <div className="home">
            <Link to='/' className="about">Home</Link>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="home">
            <Link to='/about' className="about">About</Link>
            </div>
            <div className="home">
            <Link to='/contact' className="about">Contact</Link>
            </div>
            <div className="home">
            <Link to='/details' className="about">Details</Link>
            </div>
            <div className="article">
            <Link to='/articleform' className="about">Article Form</Link>
            </div>
            <div className="article1">
            <Link to='/yuparticle' className="about">Yup Article </Link>
            </div>
            <div className="article1">
            <Link to='/signup' className="about">signup</Link>
            </div>
        </Toolbar>
      </Container>
    </AppBar>
                                 
            </>
        )
    }
}
export default Menubar;