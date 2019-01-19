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

    render() {
        return (
            <Modal show={this.state.show}>
                <Modal.Header closeButton>
                    <Modal.Title>Farmer Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <FormGroup controlId='emailAddress'>
                            <ControlLabel>Email Address</ControlLabel>
                            <FormControl type='text' />
                        </FormGroup>
                    </form>
                </Modal.Body>
            </Modal>
        );
    }
}

export default LoginModal;