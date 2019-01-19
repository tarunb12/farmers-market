import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import LoginModal from '../LoginModal/loginmodal';
import './main.css';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            showLoginModal: false
        }
    }

    handleFindFarmerClick = () => {

    }

    handleFarmerLoginClick = () => {
        this.setState({ showLoginModal: true });
    }

    handleLoginModalClose = () => {
        this.setState({ showLoginModal: false });
        this.props.handleClose();
    }

    render() {
        return (
            <div className='main'>
                    <Button className='findFarmerButton mainButton' bsStyle='primary' onClick={this.handleFindFarmerClick}>Find a Farmer</Button>
                    <Button className='loginButton mainButton' bsStyle='primary' onClick={this.handleFarmerLoginClick}>Farmer Login</Button>
                    <LoginModal show={this.state.showLoginModal} handleClose={this.handleLoginModalClose} />
            </div>
        );
    }
}

export default Main;