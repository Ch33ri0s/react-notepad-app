import React from 'react';
import { Link } from "react-router-dom";
import '../style/navigation.scss';

const Navbar = props => (
    <header className="nav-wrapper">
        <nav className='navbar'>
            <div className="navbar-items">
                <ul>
                    <li><Link to="/main"><i class="fas fa-bars"></i></Link></li>
                    <li><Link to="/">LOGO</Link></li>
                    <li><Link to="/profile">tenysonp123<i class="fas fa-user-circle"></i></Link></li>
                    {/* <li><a href="https://www.google.com">google</a></li> */}
                </ul>
            </div>
        </nav>
    </header>
);

export default Navbar;