import React from 'react';
import { Link } from 'react-router-dom';
import HomeImage from './images/home-image.jpg'
import MobileImage from './images/carousel2.jpg'
import EmailIcon from './images/email.svg';
import VenmoIcon from './images/venmo.svg';
import InstagramIcon from './images/instagram.svg';
import './home.css';

export const Home = (props) => {
    const { mobileView } = props;
    return (
        <div id='homepage-container'>
            <div id='intro-title'>INTRO</div>
            <div id='intro-container'>
                <div id='intro-name'>
                    Tyler Randall
                </div>
                <div id='intro-numbers-container'>
                    <div className='intro-number'>Hustle #16</div>
                    <div className='intro-number'>Chain #11</div>
                </div>
                <div id='intro-description'>
                    Hi! I'm an Ultimate fanatic, who plays for the Atlanta Hustle and Atlanta Chain Lightning. I also love coaching anyone who will listen, so let't get started!
                </div>
            </div>
            <div id='useful-links-title'>USEFUL LINKS</div>
            <div id='useful-links-container'>
                <a className='useful-link' href='mailto:tyler7r@gmail.com'><img src={EmailIcon} className='useful-link-image' alt='email-link' /></a>
                <Link className='useful-link' to='https://account.venmo.com/u/Tyler-Randall-11'><img src={VenmoIcon} className='useful-link-image' alt='venmo-link' /></Link>
                <Link className='useful-link' to='https://www.instagram.com/tyler7randall/'><img src={InstagramIcon} className='useful-link-image' alt='instagram-link' /></Link>
            </div>
            {mobileView === false
                ? <img src={HomeImage} alt='home-page-background' id='homepage-image' />
                : <img src={MobileImage} alt='home-page-background' id='homepage-image' />
            }
        </div>
    )
}