import React, { Component } from 'react';
import axios from 'axios';

import GenericTable from './genericTable/GenericTable';

class CoachesList extends Component {
    
    state = {
        coaches : []
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/admin/coaches-list`)
        .then(response => response.data)
        .then(data => this.setState({coaches : data}))
        .catch(e => console.log('Get error: ', e));
    }

    getCoachesList() {
        if(this.state.coaches.length === 0) {
            return (
                <div>Lack of coaches in database</div>
            );
        }
        return ( 
            <GenericTable header={['Mail', 'Name', 'Manager', 'Status']} rows={this.state.coaches}/>
        );
    }

    render() {
        return (
            <div>
                <h1>Coaches</h1>
                {this.getCoachesList()}
            </div>
        );
    }
}

export default CoachesList;