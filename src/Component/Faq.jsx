import React, { useState } from 'react'
import './Styles/faq.css'
import faqimg from '../Assets/Image - FAQ Satellite.png'
import more from '../Assets/FAQ - Button Default.png'
import less from '../Assets/FAQ - Button Activated.png'
import mData from '../Assets/Rectangle 134.png'
const Faq = () => {
    let [show, setShow] = useState({ f: false, f1: false, f2: false, f3: false, f4: false, f5: false, f6: false })

    const handleOpen = (e) => {
        setShow({ ...show, [e]: !show[e] })
    }
    return (
        <div className='faq_container'>
            <div className="faq_main_div">
                <div className="faq_head_div">
                    <div>
                        <div>
                            <h5>NEED TO KNOW MORE?</h5>
                            <h1 className='faq_head2' >FREQUENTLY ASKED <br /> QUESTIONS</h1>
                        </div>
                        <img src={faqimg} alt="" />
                    </div>
                </div>
                <div className="faq_div">
                    <ul className="faq_ul">
                        <li className={!show.f ? 'faq_li' : 'more_data_div'}>
                            <div onClick={() => handleOpen('f')}>
                                <p className={show.f ? 'active' : ''}>How do I buy Cosmica?</p>
                                <img src={show.f ? less : more} alt="" />
                            </div>
                            {show.f ?
                                <ol>
                                    <li>You're going need a wallet first and foremost! metamask.io/
                                    offers the most popular and functional
                                    option on the market, all available in a browser extension.</li>
                                    <li>Next up, gas. Head to trustwallet.com/ which should
                                    provide you the opportunity to buy some Smart Chain BNB.
                                    Send that to your Metamask wallet, and you're ready to trade on
                                         Binance Smart Chain.</li>
                                    <li>Head to exchange.pancakeswap.finance/ and click "Connect" at
                                    the top right or "Unlock Wallet" dead ahead and connect your
                                    Metamask wallet. Follow the prompts and allow PancakeSwap to
                                              view your accounts and addresses.</li>
                                    <li>Click on "Select a currency" above where it now says
                                                  "Enter an amount" and paste in the token contract address: </li>
                                    <li>Press the settings button that you see at the top right
                                    corner of the center panel. Adjust slippage to 11% to account
                                    for the reflection tokenomics and auto-liquidity burn of
                                    Cosmica (you can set this higher if volume is high and you
                                                        want to confirm your purchase!)</li>
                                    <li>Enter the amount of  BNB you'd like to trade and click
                                    swap! If you have any issues, be sure to round the
                                    number of Cosmica tokens to the nearest 0 as fractions
                                    can be difficult for PancakeSwap. Just don't forget
                                    to leave a little BNB so you don't get stuck without
                                                               gas!</li>
                                </ol>
                                : null}
                        </li>
                        <li className={!show.f1 ? 'faq_li' : 'more_data_div'}>
                            <div onClick={() => handleOpen('f1')}>
                                <p className={show.f1 ? 'active' : ''}>What is the contract ID?</p>
                                <img src={show.f1 ? less : more} alt="" />
                            </div>
                            {show.f1 ?
                                <p className='faq_para'>The Contract ID is: (To be inserted when available)</p>
                                : null}
                        </li>

                        <li className={!show.f2 ? 'faq_li' : 'more_data_div'}>
                            <div onClick={() => handleOpen('f2')}>
                                <p className={show.f2 ? 'active' : ''}>How do Cosmica's tokenomics work?</p>
                                <img src={show.f2 ? less : more} alt="" />
                            </div>
                            {show.f2 ?
                                <p className='faq_para'>5% of all transactions are converted into liquidity and then burned,
                                thus placing BNB in Cosmica’s coffers that are irretrievable.
                                This continually raises the price floor with every burn, backing every
                                token with more capital, contributing to price stability. Another 5% of
                                transactions is also reflected back to all current holders, contributing to
                                development and    rewarding tokens to holders to keep them and their liquidity
                                   invested and in place.</p>
                                : null}
                        </li>
                        <li className={!show.f3 ? 'faq_li' : 'more_data_div'}>
                            <div onClick={() => handleOpen('f3')}>
                                <p className={show.f3 ? 'active' : ''}>Is Liquidity Locked?</p>
                                <img src={show.f3 ? less : more} alt="" />
                            </div>
                            {show.f3 ?
                                <p className='faq_para'>Initial Liquidity Provision tokens were sent to the dead address
                                0x000000000000000000000000000000000000dead so they are locked
                                forever, 5% of each transaction is also locked to liquidity forever.
                                  This contributes to less volatility and a continuously increasing price floor.</p>
                                : null}
                        </li>
                        <li className={!show.f4 ? 'faq_li' : 'more_data_div'}>
                            <div onClick={() => handleOpen('f4')}>
                                <p className={show.f4 ? 'active' : ''}>What does it mean to have ownership renounced and LP burned?</p>
                                <img src={show.f4 ? less : more} alt="" />
                            </div>
                            {show.f4 ?
                                <p className='faq_para'>Controlling shares of the token have been burned meaning
                                that no one can retrieve the initial liquidity provided to PancakeSwap to enable
                                trading, and no one can make any alterations to the smart contract. That makes
                                Cosmica unruggable as there is no mint function to change the supply or alter
                             the current tokenomics. What you see is what you get with Cosmica.</p>
                                : null}
                        </li>
                        <li className={!show.f5 ? 'faq_li' : 'more_data_div'}>
                            <div onClick={() => handleOpen('f5')}>
                                <p className={show.f5 ? 'active' : ''}>What is the token distribution?</p>
                                <img src={show.f5 ? less : more} alt="" />
                            </div>
                            {show.f5 ?
                                <p className='faq_para'>Initial Token distribution was 30% of supply burned to
                                the blackhole, of the remaining circulation supply 15% was for Presale Investors
                                who provided BNB for initial liquidity, 2% was kept in the Dev wallet for marketing
                              and operations purposes and the rest 83% was added to liquidity.</p>
                                : null}
                        </li>
                        <li className={!show.f6 ? 'faq_li' : 'more_data_div'}>
                            <div onClick={() => handleOpen('f6')}>
                                <p className={show.f6 ? 'active' : ''}>Why is my balance displaying wrong on TrustWallet?</p>
                                <img src={show.f6 ? less : more} alt="" />
                            </div>
                            {show.f6 ?
                                <>
                                    <p className='faq_para'>If your balance appears incorrect on TrustWallet, add Cosmica
                                    as a custom token. Click the top right icon and scroll all the way down
                             and you will find the custom section.</p>
                                    <ul className='faq_sub_ul'>
                                        <li>✦  Name: Cosmica</li>
                                        <li>✦  Symbol: $GALX</li>
                                        <li>✦  Network: BSC (smart chain)</li>
                                        <li>✦  Decimal: 9</li>
                                        <li>✦  Contract: (To be inserted when available)</li>
                                    </ul>
                                    <p className='faq_para'>This is a bug on TrustWallet’s side, we have submitted a fix and are waiting
                                 for them to implement it.</p>
                                </>
                                : null}
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Faq
