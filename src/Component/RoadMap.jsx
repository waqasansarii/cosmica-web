import React from 'react'
import useWebAnimations, { shakeY } from "@wellyshen/use-web-animations";
import './Styles/roadMap.css'
import p1 from '../Assets/Roadmap - Orion.png'
import p2 from '../Assets/Roadmap - Andromeda.png'
import p3 from '../Assets/Roadmap - Apollo.png'
import p4 from '../Assets/Roadmap - Cosmos.png'
import p5 from '../Assets/Roadmap - Zenith.png'
import p6 from '../Assets/Roadmap - Hyperion.png'
import d1 from '../Assets/Roadmap Line 1.png'
import d2 from '../Assets/Roadmap Line 2.png'
import d3 from '../Assets/Roadmap Line 3.png'
import d4 from '../Assets/Roadmap Line 4.png'
import d5 from '../Assets/Roadmap Line 5.png'


const RoadMap = () => {
    const { keyframes, animationOptions } = shakeY;
    const pa1 = useWebAnimations({
        keyframes,
        animationOptions: {
            ...animationOptions,
            delay: 1000, // Delay 1s
            duration: 30500, // Speed up the animation
            iterations: Infinity,

        },
    });
    // const  = shakeY;
    const pa2 = useWebAnimations({
        keyframes,
        animationOptions: {
            ...animationOptions,
            delay: 1200, // Delay 1s
            duration: 40000, // Speed up the animation
            iterations: Infinity,

        },
    });
    const pa3 = useWebAnimations({
        keyframes,
        animationOptions: {
            ...animationOptions,
            delay: 1400, // Delay 1s
            duration: 40000, // Speed up the animation
            iterations: Infinity,

        },
    });
    const pa4 = useWebAnimations({
        keyframes,
        animationOptions: {
            ...animationOptions,
            delay: 1600, // Delay 1s
            duration: 40000, // Speed up the animation
            iterations: Infinity,

        },
    });
    const pa5 = useWebAnimations({
        keyframes,
        animationOptions: {
            ...animationOptions,
            delay: 1000, // Delay 1s
            duration: 40000, // Speed up the animation
            iterations: Infinity,

        },
    });
    const pa6 = useWebAnimations({
        keyframes,
        animationOptions: {
            ...animationOptions,
            delay: 1200, // Delay 1s
            duration: 40000, // Speed up the animation
            iterations: Infinity,

        },
    });

    return (
        <div className='road_map_container'>
            <div className="road_map_main_div">
                <h5>THE ROADMAP</h5>
                <h1>COSMICA TAKES FLIGHT</h1>
                <div className="road_map_stack">
                    <div className="rms_box1">
                        <div className="rmb_box">
                            <h4>Orion</h4>
                            <h6>Launch</h6>
                            <ul className="planets_ul">
                                <li>✦  Cosmica Launch</li>
                                <li>✦  Influencer Marketing</li>
                                <li>✦  Community AMA</li>
                            </ul>
                        </div>
                        <img className="rms1" ref={pa1.ref} src={p1} alt="..." />
                        <img className="rms2" src={d1} alt="..." />
                    </div>
                    <div className="rms_box2">
                        <img className="rms3" ref={pa2.ref} src={p2} alt="..." />
                        <div className="rmb_box box2">
                            <h4>Andromeda</h4>
                            <h6>1,000 Holders</h6>
                            <ul className="planets_ul">
                                <li>✦  Submitted for audit</li>
                                <li>✦  Community Contest</li>
                                <li>✦  CG application</li>
                                <li>✦  BSCScan application</li>
                            </ul>
                        </div>
                    </div>
                    <div className="rms_box3">
                        <div className="rmb_box box3">
                            <h4>Apollo</h4>
                            <h6>5,000 Holders</h6>
                            <ul className="planets_ul">
                                <li>✦  Trust Wallet Submission</li>
                                <li>✦   Second Audit Submission</li>
                                <li>✦  TikTok Marketing</li>
                                <li>✦   Whitepaper</li>
                            </ul>
                        </div>
                        <img className="rms4" ref={pa3.ref} src={p3} alt="..." />
                        <img className='rmd_d2' src={d2} alt="..." />
                    </div>
                    <div className="rms_box4">
                        <img className='rmd_d3' src={d3} alt="..." />
                        <img className="rms5" ref={pa4.ref} src={p4} alt="..." />
                        <div className="rmb_box box4">
                            <h4>Cosmos</h4>
                            <h6>10,000 Holders</h6>
                            <ul className="planets_ul">
                                <li>✦  NFT Marketplace</li>
                                <li>✦  10k Giveaway!</li>
                                <li>✦  CEX LISTING (Already paid for!)</li>
                                <li>✦  HUGE partnerships (TBA very soon)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="rms_box5">
                        <div className="rmb_box box5">
                            <h4>Apollo</h4>
                            <h6>5,000 Holders</h6>
                            <ul className="planets_ul">
                                <li>✦  Trust Wallet Submission</li>
                                <li>✦   Second Audit Submission</li>
                                <li>✦  TikTok Marketing</li>
                                <li>✦   Whitepaper</li>
                            </ul>
                        </div>
                        <img className="rms6" ref={pa5.ref} src={p5} alt="..." />
                        <img className='rmd_d4' src={d4} alt="..." />
                    </div>
                    <div className="rms_box6">
                        <img className='rmd_d5' src={d5} alt="..." />
                        <img className="rms7" ref={pa6.ref} src={p6} alt="..." />
                        <div className="rmb_box box6">
                            <h4>Hyperion</h4>
                            <h6>50,000 Holders</h6>
                            <ul className="planets_ul">
                                <li>✦  Website V2</li>
                                <li>✦  3rd Audit</li>
                                <li>✦  Additional Partners & Team members</li>
                                <li>✦  NFT Drop Teaser</li>
                                <li>✦  NFT Marketplace Teaser</li>
                                <li>✦  Project "Luna"</li>
                                <li>✦  Meme/Art/Emoji contest</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoadMap
