import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from './images/three.svg'
import './header.css'

export const Header = (props) => {
    const { setMenuOpen, menuOpen } = props
    return (
        <header id='topnav'>
            <Link to='/' id='logo-container'>TR</Link>
            <div id='menu-icon-container'><img src={MenuIcon} alt='menu-btn' id='menu-icon' onClick={() => setMenuOpen(!menuOpen)} /></div>
        </header>
    )
}