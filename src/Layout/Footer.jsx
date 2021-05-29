import React from 'react'
import rocket from '../Assets/Footer CTA Graphics - 1.png'
import img2 from '../Assets/Footer CTA Graphics - 2.png'
import beer from '../Assets/pancakeswap-cake-logo.png'
import telegram from '../Assets/Telegram_logo.png'
import logo from '../Assets/Logo - White.png'
import tele from '../Assets/Icon - Telegram.png'
import twi from '../Assets/Icon - Twitter.png'
import dis from '../Assets/Icon - Discord.png'
import rt from '../Assets/Icon - Reddit.png'

const Footer = () => {
    return (
        <div className='footer_container'>
            <div className="footer_main_div">
                <div className="footer_content">
                    <img src={rocket} alt="" />
                    <div className="footer_mid_div">
                        <h1>Join us and start enjoying our yields!</h1>
                        <div className="buttons_div_top_bg">
                            <button>BUY ON PANCAKESWAP <img src={beer} alt="" /></button>
                            <button>JOIN THE TELEGRAM <img src={telegram} alt="" /></button>
                        </div>
                    </div>
                    <img src={img2} alt="" />
                </div>
            </div>
            <div className="copy_right_div">
                <div className='ft_logo_div'> 
                    <img src={logo} alt="" />
                    <p>Copyright © 2021 Cosmica <br /> contact@cosmica.finance</p>
                </div>
                <div className='follow_div'>
                    <p>Follow us today</p>
                    <ul className='icons_ul'>
                        <li>
                            <img src={tele} alt="" />
                            <img src={twi} alt="" />
                            <img src={dis} alt="" />
                            <img src={rt} alt="" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
