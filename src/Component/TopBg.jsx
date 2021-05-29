import React from 'react'
import Navbar from '../Layout/Navba'
import './Styles/TopBg.css'
// assets 
import beer from '../Assets/pancakeswap-cake-logo.png'
import telegram from '../Assets/Telegram_logo.png'
import dotCircle from '../Assets/dot.png'
import hand from '../Assets/Image - Hero.png'

const TopBg = () => {
    return (
        <div className='top_bg_container'>
            <Navbar />
            <div className="top_bg_main_div">
                <div className="top_bg_text_div">
                   <div >
                       <h5 className='introducing'>INTRODUCING</h5>
                       <h1 className='cosmic_head'>COSMICA</h1>
                       <p className='top_img_para'>Missed the last moon? With Cosmica, there's always another moon coming.</p>
                       <div className="buttons_div_top_bg">
                           <button>BUY ON PANCAKESWAP <img src={beer} alt="" /></button>
                           <button>JOIN THE TELEGRAM <img src={telegram} alt="" /></button>
                       </div>
                   </div>
                </div>
                <div className="top_bg_hand_img_div">
                    {/* <img className='dot_circle_img' src={dotCircle} alt="" /> */}
                    <img className='hand_img' src={hand} alt="" />
                </div>
            </div>
            
        </div>
    )
}

export default TopBg
