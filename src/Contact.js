import React from 'react'
import ContactImage from './images/contact-image.jpg'
import ContactImage2 from './images/contact-image2.jpg'
import EmailIcon from './images/email.svg'
import PhoneIcon from './images/phone.svg'
import './contact.css'

export const Contact = (props) => {
    const { mobileView } = props;

    return (
        <div id='contact-container'>
            <div id='contact-title'>Contact</div>
            {mobileView === false 
                ?   <div id='contact-image-container'>
                        <img src={ContactImage} alt='main' id='contact-image' />
                        <img src={ContactImage2} alt='secondary' id='contact-image2' />
                    </div>
                :   <img src={ContactImage} alt='secondary' id='contact-image' />
            }
            <div id='contact-details'>
                <div id='contact-details-title'>Book Today!</div>
                <div id='contact-message'>You're so close to upping your Ultimate game. I'm based in Grant Park but I'm happy to meet at a park near you! Let's get started!</div>
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