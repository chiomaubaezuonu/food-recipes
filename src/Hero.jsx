import React from 'react'
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
            <a href="#menu" //target='_blank' 
            > <button className='btn'>Explore!!</button></a>
            <div className="about-section" id='about'>
                <p className='about-title'>ABOUT Oma's Foodbank</p>
                <h3 className='about-subtitle'>Our mission is to be the smartest
                    and most helpful food platform
                    in existence</h3>
                <p>We're fulfilling this mission by improving life in the kitchen
                    for millions of home cooks around the world.</p>
                <div className='rating-container'>
                    <div>
                        <h3 className='rating'>4.5+</h3>
                        <p className='rating-text'>App Rating</p>
                    </div>
                    <div>
                        <h3 className='rating'>2M+</h3>
                        <p className='rating-text'>Recipes</p>
                    </div>
                    <div>
                        <h3 className='rating'>4.5+</h3>
                        <p className='rating-text'>User</p>
                    </div>
                </div>
                <h3 className='about-subtitle'>
                    We help people discover what to eat based on personal preferences and data
                </h3>
                <p className='about-text'>Oma's Recipes is here to help you cook delicious meals with less stress and more joy. We offer recipes and cooking advice for home cooks, by home cooks. Helping create “kitchen wins” is what we’re all about.We Connect you to recipes that match your personal taste.
                Our system of personalized discovery learns you better to serve you better, so the question "what's for dinner?" is answered before it's even asked.</p>

            </div>
        </div>
    )
}

export default Hero