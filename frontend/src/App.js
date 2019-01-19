import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './Main/main';
import './App.css';

class App extends Component {
  	render() {
    	return (
      		<BrowserRouter>
				<Switch>
					<Route path='/' component={Main} />
					<Route path='*' component={Main} />
				</Switch>
			</BrowserRouter>
    	);
  	}
}

export default App;
