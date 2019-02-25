import React, { Component } from 'react';
import {Home} from './pages/homePage';

class App extends Component {
	render() {
		return (
			<h1>
				test React
				<Home />
			</h1>
		);
	}
}

export default App;