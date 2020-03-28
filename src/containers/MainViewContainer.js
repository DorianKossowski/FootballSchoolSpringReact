import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import './mainViewContainer.css'
import CoachesList from '../components/CoachesList';
import AddCoach from '../components/AddCoach';
import EditCoach from '../components/EditCoach';

class MainViewContainer extends Component {
    render() {
        return (
            <div className='mainContent'>
                    <Switch>
                        <Route exact path='/' component={CoachesList}/>
                        <Route path='/add' component={AddCoach}/>
                        <Route path='/edit/:coachId' component={EditCoach}/>
                    </Switch>
            </div>
        );
    }
}

export default MainViewContainer;