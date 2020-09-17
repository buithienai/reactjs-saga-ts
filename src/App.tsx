import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/user';

interface State {
	title: string;
}

interface Props {

}

class App extends Component<{}, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			title: 'Bui Thien Ai',
		};
	}

	render() {
		const { title } = this.state;

		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
					<User
						title={title}
					/>
				</header>
			</div>
		);
	}
}

export default App;
