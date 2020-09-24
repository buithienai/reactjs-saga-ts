import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import User from './components/user';

interface State {
    title: string;
}

interface Props {}

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
            <Router>
                <Switch>
                    <Route path="/users">
                        <User title={title} />
                    </Route>
                    <Route path="">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
