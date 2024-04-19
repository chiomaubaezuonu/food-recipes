import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
    return (
        // <div style={{background:"red", height:"90%"}}>
        <div className='hero'>
            <h2 className='title' style={{ color: "purple" }}>Oma's F<span style={{ color: "orange" }}>ood</span>bank</h2>
            <img src="/images/hero-img.jpg" alt='food' />
            <p className='quote'>
                <FontAwesomeIcon icon={faQuoteLeft} /> One cannot think well, love well, sleep well, if one has not dined well.
            </p>
            <a href="#Menu" //target='_blank' 
            > <button className='btn'>Explore!!</button></a>
        </div>
    )
}

export default Hero