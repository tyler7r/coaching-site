import React, { useState } from 'react'
import AboutDesktop from './images/carousel1.jpg'
import AboutMobile from './images/about-mobile.jpg'
import './about.css'

export const About = (props) => {
    const { mobileView } = props;
    const [view, setView] = useState('COACHING');

    const viewBtn = (btn) => {
        if (btn === view) {
            return <div className='view-select-btn selected' onClick={() => setView(`${btn}`)}>{btn}</div>
        } else {
            return <div className='view-select-btn' onClick={() => setView(`${btn}`)}>{btn}</div>
        }
    }

    return (
        <div id='about-container'>
            <div id='about-title'>About Me</div>
            {view === 'PLAYING' &&
                <div className='about-background-container' id='playing-background-container'>
                    <div className='background-title'>College</div>
                    <div>I started playing Ultimate my freshman year of college at UGA. I went from making the B-team my first year to being one of the leaders on Jojah, the A-team, by my senior year. We made Nationals every year I was on Jojah and we made the finals in 2021.</div>
                    <div className='background-title'>Professional</div>
                    <div>I just finished my second season with the Atlanta Hustle. I went from a presumed reserve player after I made the team in 2022 to a full-time started by the time the 2022 season started. This year we were the #1 seed in the South Division and hosted a playoff game.</div>
                    <div className='background-title'>Elite Club</div>
                    <div>I am currently in my second year with Atlanta Chain Lightning. We most recently went to the finals of ESC. Last year we won the Southeast Region for the first time in several years by taking down Raleigh Ring of Fire. We went on to make quarters at Nationals.</div>
                </div>
            }
            <div id='view-select-container'>
                {viewBtn('COACHING')}
                {viewBtn('PLAYING')}
            </div>
            {mobileView === false
                ? <img src={AboutDesktop} alt='carousel' className='about-image' />
                : <img src={AboutMobile} alt='carousel' className='about-image' />
            }    
            {view === 'COACHING' &&
                <div className='about-background-container' id='coaching-background-container'>
                    <div className='about-background-info'>
                        <div className='background-title'>
                            Middle School
                        </div>
                        <div>Over the last two years I've coached three semesters of middle school ultimate for Arbor Montessori. I helped build the program up again after COVID. My first semester we started with 10 kids and no way to play games due to restrictions and by last Fall we had over 25 kids on the roster and we won the championship!</div>
                        <div className='background-title'>
                            Atlanta Hustle Youth Academy
                        </div>
                        <div>Last winter, I was the head coach for the Hustle's Youth Academy. I had the opportunity to coach over 30+ of Atlanta's best high-school ultimate players. Several of the U-17 girls who attended the program went on to win the 2023 Youth Championships in Colorado this year with rATLers YCC.</div>
                    </div>
                </div>
            }
        </div>
    )
}