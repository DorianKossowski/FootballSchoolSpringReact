import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Alert, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'

import api from '../helpers/Api.js';

class AddCoach extends Component {

    state = {
        redirect: false,
        errMsg: ''
    }

    getAddCoachForm() {
        return (
            <div>
                <h1>Add new manager</h1>
                <Formik 
                    initialErrors={{ mail: 'Required', numOfTeams: 'Required' }} 
                    initialValues={{ mail: '', numOfTeams: '' }} 
                    validate={this.validateFields()} 
                    onSubmit={this.handleSubmit()}>
                    {({ isSubmitting, isValid }) => (
                        <Form>
                            <div className='formGroupStyle'>
                                <h6>New manager's mail</h6>
                                <Field className='form-control' name="mail" type="email" placeholder="mail" />
                                <ErrorMessage className='errorMsgStyle' name="mail" component="div" />
                            </div>
                            <div className='formGroupStyle'>
                                <h6>Maximum number of teams</h6>
                                <Field className='form-control' name='numOfTeams' type="number" placeholder="max. number of teams" />
                                <ErrorMessage className='errorMsgStyle' name="numOfTeams" component="div" />
                            </div>
                            <Button type="submit" disabled={isSubmitting || !isValid}>Submit</Button>
                        </Form>
                    )}
                </Formik>
            </div>
        );
    }

    validateFields() {
        return values => {
            const errors = {};
            if (!values.mail) {
                errors.mail = 'Required';
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.mail)) {
                errors.mail = 'Invalid email address';
            }
            if(!values.numOfTeams) {
                errors.numOfTeams = 'Required'
            }
            else if(values.numOfTeams < 1) {
                errors.numOfTeams = 'Number of teams has to be greater than 0'
            }
            return errors;
        };
    }

    handleSubmit() {
        return (values, actions) => {
            this.setState({ errMsg: '' });
            api.post('coaches-add', { mail: values.mail, maxNumberOfTeams: values.numOfTeams })
                .then(() => this.setState({ redirect: true }))
                .catch(error => {
                    this.setState({ errMsg: this.getErrorMsg(error) });
                    actions.setSubmitting(false);
                });
        };
    }

    getErrorMsg(error) {
        return  error.response ? error.response.data.message : error.message;
    }

    render() {
        return (
            <div>
                { this.state.errMsg !== '' ? <Alert variant='danger'>{this.state.errMsg}</Alert> : null }
                { this.state.redirect ?  <Redirect to='/'/> : this.getAddCoachForm() }
            </div>
        );
    }
}

export default AddCoach;