import React, { useState } from 'react'
import PricingImage from './images/pricing-image.jpg'
import './pricing.css'

export const Pricing = (props) => {
    const [groupOption, setGroupOption] = useState('2-3')

    const optionSelect = (option) => {
        if (option === groupOption) {
            return <div className='option-select-btn selected' onClick={() => setGroupOption(option)}>{option}</div>
        } else {
            return <div className='option-select-btn' onClick={() => setGroupOption(option)}>{option}</div>
        }
    }

    return (
        <div id='pricing-container'>
            <div id='pricing-title'>Pricing</div>
            <img src={PricingImage} alt='main' id='pricing-image' />
            <div className='pricing-section-title' id='individual-pricing-title'>INDIVIDUAL</div>
            <div className='pricing-section' id='individual-section'>
                <div className='option-description'>1-Hour Session: <div className='option-price'>$80</div></div>
                <div className='option-description'>90-Minute Session: <div className='option-price'>$100</div></div>
                <div className='option-description'>30-Minute Film Review: <div className='option-price'>$50</div></div>
            </div>
            <div className='pricing-section-title' id='group-pricing-title'>GROUP</div>
            <div className='pricing-section' id='group-section'>
                <div id='option-select-container'>
                    {optionSelect('2-3')}
                    {optionSelect('4+')}
                </div>
                {groupOption === '2-3' &&
                    <div className='pricing-info'>
                        <div className='option-description'>1-Hour Session: <div className='option-price'>$60/person</div></div>
                        <div className='option-description'>90-Minute Session: <div className='option-price'>$80/person</div></div>
                    </div>
                }
                {groupOption === '4+' &&
                    <div className='pricing-info'>
                        <div className='option-description'>1-Hour Session: <div className='option-price'>$50/person</div></div>
                        <div className='option-description'>90-Minute Session: <div className='option-price'>$70/person</div></div>
                    </div>
                }
            </div>
        </div>
    )
}