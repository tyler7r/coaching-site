import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from './images/three.svg'
import './header.css'

export const Header = (props) => {
    const { setMenuOpen, menuOpen } = props
    const [hover, setHover] = useState('');

    return (
        <header id='topnav'>
            <Link to='/' id='logo-container'>TR</Link>
            <div id='menu-icon-container'><img src={MenuIcon} alt='menu-btn' id='menu-icon' onClick={() => setMenuOpen(!menuOpen)} /></div>
            {menuOpen && 
                <div id='homepage-links-container'>
                    <div className="homepage-link-container" onMouseEnter={() => setHover('home')} onMouseLeave={() => setHover('')}>
                        <Link onClick={() => {setMenuOpen(false); setHover('')}} to='/' className='homepage-link'>Home</Link>
                    </div>
                    <div className="homepage-link-container" onMouseEnter={() => setHover('about')} onMouseLeave={() => setHover('')}>
                        <Link onClick={() => {setMenuOpen(false); setHover('')}} to='/about' className='homepage-link'>About Me</Link>
                    </div>
                    {hover === 'about' &&
                        <div className='link-description' id='about-description'>QUALIFICATIONS</div>
                    }
                    <div className="homepage-link-container" onMouseEnter={() => setHover('pricing')} onMouseLeave={() => setHover('')}>
                        <Link onClick={() => {setMenuOpen(false); setHover('')}} to='/pricing' className='homepage-link'>Pricing</Link>
                    </div>
                    {hover === 'pricing' &&
                        <div className='link-description' id='pricing-description'>LESSON OPTIONS + RATES</div>
                    }
                    <div className="homepage-link-container" onMouseEnter={() => setHover('contact')} onMouseLeave={() => setHover('')}>
                        <Link onClick={() => {setMenuOpen(false); setHover('')}} to='/contact' className='homepage-link'>Contact</Link>
                    </div>
                    {hover === 'contact' &&
                        <div className='link-description' id='contact-description'>BOOK A SESSION</div>
                    }
                </div>
            }
        </header>
    )
}