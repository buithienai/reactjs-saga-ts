import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/table/table';

interface State {
  title: string;
  titleTable: string;
}

interface Props {

}

class App extends Component<{}, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      title: 'Bui Thien Ai',
      titleTable: 'Table user'
    };
  }

  handleChange = (data: object) => {
    this.setState({
      ...data
    });
  }

  render() {
    const { title, titleTable } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{title}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
          <Table
            titleTable={titleTable}
            handleChange={this.handleChange}
          />
        </header>
      </div>
    );
  }
}

export default App;
