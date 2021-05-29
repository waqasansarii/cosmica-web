import React from 'react'
import './Styles/tokonomics.css'
import card1 from '../Assets/Group.png'
import original from '../Assets/Original Supply_.png'
import tax from '../Assets/10% Tax on.png'
import trans from '../Assets/Transactions.png'
import profit from '../Assets/Profit from Holding.png'
import card2 from '../Assets/card2.png'
import card3 from '../Assets/Tokenomics Icon - Profit.png'

const Tokonomics = () => {
    return (
        <div>
            <div className="tokonomics_card_main_div">
              <div className="card_div">
                  <img className='card_img' src={card1} alt="" /> 
                  <img className='text_img' src={original} alt="" /> 
                  <p>1,000,000,000,000,000 30% Burned</p>
                  {/* <h1>Original supply</h1> */}
              </div>
              <div className="card_div">
                  <img className='card_img' src={card2} alt="" />
                  <img className='text_img' src={tax} alt="" />
                  <img className='text_img' src={trans} alt="" />
                  <p>5% Distributed to holders 5% Added to liquidity</p>
                  {/* <h1>Original supply</h1> */}
              </div>
              <div className="card_div">
                  <img className='card_img' src={card3} alt="" />
                  <img className='text_img' src={profit} alt="" />
                  <p>We reward holders with a 5% transaction tax which puts 
                      $GALX directly into your wallet 
                      every time someone buys or sells.</p>
                  {/* <h1>Original supply</h1> */}
              </div>
            </div>
        </div>
    )
}

export default Tokonomics
