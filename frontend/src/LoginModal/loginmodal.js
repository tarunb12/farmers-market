import React, { Component } from 'react';
import { Button, ControlLabel, FormControl, FormGroup, Modal } from 'react-bootstrap';
import axios from 'axios';

class LoginModal extends Component {
    constructor() {
        super();

        this.state = {
            show: false,
            fieldValues: new Map()
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.show !== this.state.show) {
            this.setState({ show: nextProps.show });
        }
    }

    handleClose = () => {
        this.setState({
            show: false,
            fieldValues: new Map()
        });
    }

    handleSubmit = () => {
        console.log('send email/pass info');
        const loginInfo = {
            email: this.state.fieldValues.get('email') || '',
            password: this.state.fieldValues.get('password') || ''
        }
        console.log(loginInfo);
        axios.get('http://127.0.0.1:5000/hello')
        .then(res => console.log(res));
    }

    handleEmailChange = event => {
        let { fieldValues } = this.state;
        fieldValues.set('email', event.target.value);
        this.setState({ fieldValues });
    } 

    handlePasswordChange = event => {
        let { fieldValues } = this.state;
        fieldValues.set('password', event.target.value);
        this.setState({ fieldValues });
        console.log(event.target.value);
    }

    getFormValidationState = () => {
        console.log(this.state.fieldValues.get('email') || '');
    }

    render() {
        return (
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Farmer Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <FormGroup controlId='emailAddress'>
                            <ControlLabel>Email Address</ControlLabel>
                            <FormControl type='text' value={this.state.fieldValues.get('email') || ''} placeholder='Enter E-mail Address' onChange={this.handleEmailChange} pattern={/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/} />
                        </FormGroup>
                        <FormGroup controlId='password'>
                            <ControlLabel>Password</ControlLabel>
                            <FormControl type='password' value={this.state.fieldValues.get('password') || ''} placeholder='Enter Password' onChange={this.handlePasswordChange} />
                        </FormGroup>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle='primary' onClick={this.handleClose} className='closeButton pull-left'>Close</Button>
                    <Button bsStyle='primary' onClick={this.handleSubmit} className='submitButton pull-right'>Enter</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default LoginModal;