import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

interface LayoutProps {
    children: React.ReactNode;
    active: number;
}

const Root = (props: LayoutProps) => {
    return (
        <div className="App">
            <header className="App-header">
                <ul>
                    <li>
                        <Link
                            to="/"
                            className={props.active === 1 ? 'active' : ''}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/users"
                            className={props.active === 2 ? 'active' : ''}
                        >
                            User
                        </Link>
                    </li>
                </ul>
                {props.children}
            </header>
        </div>
    );
};

export default Root;
