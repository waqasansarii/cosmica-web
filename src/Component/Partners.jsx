import React from 'react'
import './Styles/partner.css'
import sqr from '../Assets/sqr.png'
import p1 from '../Assets/Partners Image 1.png'
import p2 from '../Assets/Partners Image 2.png'
import p3 from '../Assets/Partners Image 3.png'
import p4 from '../Assets/Partners Image 4.png'
import p5 from '../Assets/Partners Image 5.png'

const Partners = () => {
    return (
        <div className='partnetrs_container'>
            <img className='sqr_IMG' src={sqr} alt="" />
            <div className='partner_head_div'>
                <h5>MEET THE TEAM</h5>
                <h1>PARTNERS</h1>
            </div>
            <div className="partner_card_div">
                <div className="p_card">
                    <img src={p1} alt="" />
                    <p>Marketing & Social Outreach</p>
                </div>
                <div className="p_card">
                    <img src={p2} alt="" />
                    <p>Technology & Development</p>
                </div>
                <div className="p_card">
                    <img src={p3} alt="" />
                    <p>Research & Analysis</p>
                </div>
                <div className="p_card">
                    <img src={p4} alt="" />
                    <p>Art & Design</p>
                </div>
                <div className="p_card">
                    <img src={p5} alt="" />
                    <p className='width'>Product Management</p>
                </div>
            </div>
        </div>
    )
}

export default Partners
