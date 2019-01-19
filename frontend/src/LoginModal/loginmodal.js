import React, { Component } from 'react';
import { ControlLabel, FormControl, FormGroup, Modal } from 'react-bootstrap';

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

    handleEmailChange = event => {
        let { fieldValues } = this.state;
        fieldValues.set('email', event.target.value);
        this.setState({ fieldValues });
    } 

    handlePasswordChange = event => {
        let { fieldValues } = this.state;
        fieldValues.set('password', event.target.value);
        this.setState({ fieldValues });
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
                            <FormControl type='text' value={this.state.fieldValues.get('email') || ''} placeholder='Enter E-mail Address' onChange={this.handleEmailChange} />
                        </FormGroup>
                        <FormGroup controlId='password'>
                            <ControlLabel>Password</ControlLabel>
                            <FormControl type='password' value={this.state.fieldValues.get('password') || ''} placeholder='Enter Password' onChange={this.handlePasswordChange} />
                        </FormGroup>
                    </form>
                </Modal.Body>
            </Modal>
        );
    }
}

export default LoginModal;