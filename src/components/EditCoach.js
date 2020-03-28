import React, { Component } from 'react';

import api from '../helpers/Api.js';

class EditCoach extends Component {

    state = {
        coach: {}
    }

    componentDidMount() {
        const {coachId} = this.props.match.params;
        api.get(`coaches-edit/${coachId}`)
        .then(response => response.data)
        .then(data => this.setState({coach : data}))
        .catch(e => console.log('Get error: ', e));
    }
    
    render() {
        const {coach} = this.state;
        return (
            <div>
                <h1>{coach.name} {coach.surname}</h1>
                <div className='leftCenteredDiv'>
                    <h3>Contact details</h3>
                    <p>Mail: {coach.mail}</p>
                    <p>Phone: {coach.phone}</p>
                    <h3>Teams</h3>
                </div>
            </div>
        );
    }
}

export default EditCoach;