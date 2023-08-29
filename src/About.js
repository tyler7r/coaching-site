import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Carousel1 from './images/carousel1.jpg'
import Carousel2 from './images/carousel2.jpg'
import './about.css'

export const About = (props) => {
    const [carouselImage, setCarouselImage] = useState(2);
    const [view, setView] = useState('COACHING');

    const carouselBtn = (btn) => {
        if (btn === carouselImage) {
            return <div className='carousel-btn selected' onClick={() => setCarouselImage(btn)}></div>
        } else {
            return <div className='carousel-btn' onClick={() => setCarouselImage(btn)}></div>
        }
    }

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
                    <h3 className='background-title'>College</h3>
                    <p>I started playing Ultimate my freshman year of college at UGA. I went from making the B-team my first year to being one of the leaders on Jojah, the A-team, by my senior year. We made Nationals every year I was on Jojah and we made the finals in 2021.</p>
                    <h3 className='background-title'>Professional</h3>
                    <p>I just finished my second season with the Atlanta Hustle. I went from a presumed reserve player after I made the team in 2022 to a full-time started by the time the 2022 season started. This year we were the #1 seed in the South Division and hosted a playoff game.</p>
                    <h3 className='background-title'>Elite Club</h3>
                    <p>I am currently in my second year with Atlanta Chain Lightning. We most recently went to the finals of ESC. Last year we won the Southeast Region for the first time in several years by taking down Raleigh Ring of Fire. We went on to make quarters at Nationals.</p>
                </div>
            }
            <div id='view-select-container'>
                {viewBtn('COACHING')}
                {viewBtn('PLAYING')}
            </div>
            <div id='about-image-carousel'>
                {carouselImage === 1 &&
                    <img src={Carousel1} alt='carousel' className='carousel-image' />
                }
                {carouselImage === 2 && 
                    <img src={Carousel2} alt='carousel' className='carousel-image' />
                }
                <div id='carousel-select-container'>
                    {carouselBtn(1)}
                    {carouselBtn(2)}
                </div>
            </div>
            {view === 'COACHING' &&
                <div className='about-background-container' id='coaching-background-container'>
                    <div className='about-background-info'>
                        <h3 className='background-title'>
                            Middle School
                        </h3>
                        <p>Over the last two years I've coached three semesters of middle school ultimate for Arbor Montessori. I helped build the program up again after COVID. My first semester we started with 10 kids and no way to play games due to restrictions and by last Fall we had over 25 kids on the roster and we won the championship!</p>
                        <h3 className='background-title'>
                            Atlanta Hustle Youth Academy
                        </h3>
                        <p>Last winter, I was the head coach for the Hustle's Youth Academy. I had the opportunity to coach over 30+ of Atlanta's best high-school ultimate players. Several of the U-17 girls who attended the program went on to win the 2023 Youth Championships in Colorado this year with rATLers YCC.</p>
                    </div>
                </div>
            }
        </div>
    )
}