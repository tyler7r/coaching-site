import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '../../images/three.svg'
import EmailIcon from '../../images/email.svg';
import VenmoIcon from '../../images/venmo.svg';
import InstagramIcon from '../../images/instagram.svg'
import './header.css'

export const Header = (props) => {
    const { setMenuOpen, menuOpen, mobileView } = props
    const [hover, setHover] = useState('');

    return (
        <header id='topnav'>
            <Link to='/' id='logo-container'>TR</Link>
            <div id='menu-icon-container'><img src={MenuIcon} alt='menu-btn' id='menu-icon' onClick={() => setMenuOpen(!menuOpen)} /></div>
            {menuOpen &&
                <div id='overlay'>
                    {mobileView &&
                        <div id='header-useful-links-container'>
                            <a className='header-useful-link' href='mailto:tyler7r@gmail.com'><img src={EmailIcon} className='useful-link-image' alt='email-link' /></a>
                            <Link className='header-useful-link' to='https://account.venmo.com/u/Tyler-Randall-11'><img src={VenmoIcon} className='useful-link-image' alt='venmo-link' /></Link>
                            <Link className='header-useful-link' to='https://www.instagram.com/tyler7randall/'><img src={InstagramIcon} className='useful-link-image' alt='instagram-link' /></Link>
                        </div>
                    }
                    <div id='header-links-container'>
                        <div className="header-link-container" onMouseEnter={() => setHover('home')} onMouseLeave={() => setHover('')}>
                            <Link onClick={() => {setMenuOpen(false); setHover('')}} to='/' className='header-link'>Home</Link>
                        </div>
                        <div className="header-link-container" onMouseEnter={() => setHover('about')} onMouseLeave={() => setHover('')}>
                            <Link onClick={() => {setMenuOpen(false); setHover('')}} to='/about' className='header-link'>About Me</Link>
                        </div>
                        {hover === 'about' &&
                            <div className='link-description' id='about-description'>QUALIFICATIONS</div>
                        }
                        <div className="header-link-container" onMouseEnter={() => setHover('pricing')} onMouseLeave={() => setHover('')}>
                            <Link onClick={() => {setMenuOpen(false); setHover('')}} to='/pricing' className='header-link'>Pricing</Link>
                        </div>
                        {hover === 'pricing' &&
                            <div className='link-description' id='pricing-description'>LESSON OPTIONS + RATES</div>
                        }
                        <div className="header-link-container" onMouseEnter={() => setHover('contact')} onMouseLeave={() => setHover('')}>
                            <Link onClick={() => {setMenuOpen(false); setHover('')}} to='/contact' className='header-link'>Contact</Link>
                        </div>
                        {hover === 'contact' &&
                            <div className='link-description' id='contact-description'>BOOK A SESSION</div>
                        }
                    </div>
                </div>
            }
        </header>
    )
}