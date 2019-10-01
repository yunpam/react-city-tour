import React from 'react';

import Logo from '../../assets/Logo/logo.svg';
import './navbar.style.scss';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <img src={Logo} />
            <ul className='nav-links'>
                <li><a href='/' className='nav-link'>Home</a></li>
                <li><a href='/' className='nav-link'>About</a></li>
                <li><a href='/' className='nav-link-active'>Tours</a></li>
            </ul>
        </nav>
    )
}
