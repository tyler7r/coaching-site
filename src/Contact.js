import React from 'react'
import ContactImage from './images/contact-image.jpg'
import EmailIcon from './images/email.svg'
import PhoneIcon from './images/phone.svg'
import './contact.css'

export const Contact = (props) => {
    return (
        <div id='contact-container'>
            <div id='contact-title'>Contact</div>
            <img src={ContactImage} alt='main' id='contact-image' />
            <div id='contact-details'>
            <div id='contact-message'>You're so close to upping your Ultimate game, book today!</div>
                <div className='contact-detail-container'>
                    <img src={EmailIcon} alt='email-icon' className='contact-detail-image' />
                    <a href='mailto:tyler7r@gmail.com' className='contact-detail-info'>tyler7r@gmail.com</a>
                </div>
                <div className='contact-detail-container'>
                    <img src={PhoneIcon} alt='phone-icon' className='contact-detail-image' />
                    <a href='phone:4049847244' className='contact-detail-info'>404-984-7244</a>
                </div>
            </div>
        </div>
    )
}