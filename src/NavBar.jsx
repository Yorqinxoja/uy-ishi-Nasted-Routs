import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/login">LOGIN</Link>
                </li>
                <li>
                    <Link to="/register">REGISTER</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
