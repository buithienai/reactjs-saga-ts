import React from 'react';
import logo from '../../logo.svg';
import Root from '../commons/Root';
import { ACTIVE_MENU } from '../../constants';

const Home = () => {
    return (
        <Root active={ACTIVE_MENU.HOME}>
            <img src={logo} className="App-logo" alt="logo" />
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </Root>
    );
};

export default Home;
