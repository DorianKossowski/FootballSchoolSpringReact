import React, { Component } from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Link } from "react-router-dom";

import './index.css';

import MainViewContainer from './containers/MainViewContainer'

class App extends Component {
    
  render() {
    return (
      <div className='fullHeight'>
        <Router>
        <Navbar variant='dark' bg='dark' className='navStyle'>
            <Container className='logoStyle'> 
                <Navbar>Football School</Navbar>
            </Container>
            <Nav className='flex-column'>
                <Navbar className='navTitleStyle'>Coaches</Navbar>
                <Nav.Item className='navElementStyle'><Link to='/'><FontAwesomeIcon icon={faCaretRight}/> List</Link></Nav.Item>
                <Nav.Item className='navElementStyle'><Link to='/add'><FontAwesomeIcon icon={faCaretRight}/> Add</Link></Nav.Item>
                <Nav.Item className='navElementStyle'><Link to='/'><FontAwesomeIcon icon={faCaretRight}/> Service fees</Link></Nav.Item>
                
                <Navbar className='navTitleStyle'>Teams</Navbar>
                <Nav.Item className='navElementStyle'><Link to='/'><FontAwesomeIcon icon={faCaretRight}/> List</Link></Nav.Item>
            </Nav>
        </Navbar>
        
        <div className='mainContainerStyle'>
            <Navbar className="justify-content-end headerStyle">
                <Navbar.Text>Hello Admin</Navbar.Text>
            </Navbar>
            <MainViewContainer/>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;