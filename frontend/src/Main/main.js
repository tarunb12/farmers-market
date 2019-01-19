import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

import './main.css';

class Main extends Component {
    handleFindFarmerClick = () => {

    }

    handleFarmerLoginClick = () => {

    }

    render() {
        return (
            <div className='main'>
                    <Button className='findFarmerButton mainButton' bsStyle='primary' onClick={this.handleFindFarmerClick}>Find a Farmer</Button>
                    <Button className='loginButton mainButton' bsStyle='primary' onClick={this.handleFarmerLoginClick}>Farmer Login</Button>
            </div>
        );
    }
}

export default Main;