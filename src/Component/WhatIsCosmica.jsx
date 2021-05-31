import React from 'react'
import useWebAnimations, { shakeY } from "@wellyshen/use-web-animations";
import './Styles/cosmica.css'
import plane from '../Assets/Image - What is Cosmica 1.png'
import plane2 from '../Assets/Image - What is Cosmica 2.png'

const WhatIsCosmica = () => {
    const { keyframes, animationOptions } = shakeY;
    const { ref } = useWebAnimations({
        keyframes,
        animationOptions: {
            ...animationOptions,
            delay: 1000, // Delay 1s
            duration: 30000, // Speed up the animation
            iterations: Infinity,

        },
    });

    return (
        <div className='cosmica_container'>
            <div className="cosmica_main_div">
                <div className="cosmiaca_plane_div"  >
                    <img className='sm_pln' src={plane2} alt="" />
                    <img className='lg_pln' src={plane} alt="" />
                </div>
                <div className="cosmica_intro_div">
                    <div>
                        <h5 className='cosmica_head1'>WHAT WE’RE ABOUT</h5>
                        <h1>WHAT IS COSMICA?</h1>
                        <p>Did you know that Saturn has 82 moons, giving it
                           the most moons of any planet in our solar system?</p>
                        <p>Buy and hold Cosmica to enjoy its frictionless yields in a
                               community-driven project. Join us as we launch from moon to moon!</p>
                        <div>
                            <button className='cosmica_read_btn'>READ OUR WHITEPAPER</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatIsCosmica
