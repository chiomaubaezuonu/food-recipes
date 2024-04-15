import React, { useState } from 'react'

const Hero = () => {
    return (
        // <div style={{background:"red", height:"90%"}}>
        <div className='hero'>
            <h2 style={{ color: "green" }}>Oma's F<span style={{ color: "orange" }}>ood</span>bank</h2>
            <p>
                Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Et tenetur sunt velit veniam id vel culpa quidem aut! Accusantium, vel?
            </p>
            <a href="#Menu" target='_blank'> <button className='btn'>Explore!!</button></a>
        </div>
        // </div>
    )
}

export default Hero