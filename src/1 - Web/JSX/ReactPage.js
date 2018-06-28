import '../Content/index.css';
import React, { Component } from 'react';
import logo from '../Content/Images/icon.svg';

class ReactPage extends Component {

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>

				<p id="paragrafo" className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
        		</p>
			</div>
		);
	}

}

export default ReactPage;
