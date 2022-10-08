import React from 'react';
import { NavLink } from 'react-router-dom'
import headerlogo from '../../assets/img/headerlogo.svg';
import './header.css';

/**
 * Component of Header with diffrent link to diffrent modules
 * @returns {JSX.Element} A Header component
 */
function Header() {
    return ( <header className="header">
    <div className="header__logoctn">
        <img className="header__logo" src={headerlogo} alt="logo" />
    </div>
    <nav className="header__nav">
        <ul className="header__nav__listctn">
            <li><NavLink to="#">Acceuil</NavLink></li>
            <li><NavLink to="#">Profil</NavLink></li>
            <li><NavLink to="#">Réglage</NavLink></li>
            <li><NavLink to="#">Communauté</NavLink></li>
        </ul>
    </nav>
</header> );
}

export default Header;