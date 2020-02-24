import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import './mainViewContainer.css'
import CoachesList from '../components/CoachesList';
import AddCoach from '../components/AddCoach';

class MainViewContainer extends Component {
    render() {
        return (
            <div className='mainContent'>
                    <Switch>
                        <Route exact path='/' component={CoachesList}/>
                        <Route path='/add' component={AddCoach}/>
                    </Switch>
            </div>
        );
    }
}

export default MainViewContainer;