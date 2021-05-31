import React from 'react'
import './Styles/rugFree.css'
// import bgimg from '../Assets/Background 3 - Rug Free.png'
import rugfree from '../Assets/Image - Rug Free.png'
import useWebAnimations, { shakeY } from "@wellyshen/use-web-animations";


const RugFree = () => {
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
        <div className='rug_fre_container'>
            <div className="rug_free_intro_div">
               <div>
                   <h5>SIGNATURE FEATURE</h5>
                   <h1>RUG FREE</h1>
                   <p>With tokenomics designed to keep building the price floor and reflect 
                       transaction taxes back to holders, the development wallet will contribute
                        to marketing efforts at designed holder milestones ensuring Cosmica keeps 
                        tracking for the next moon.</p>
                        <p>Check the moon landings to see what's next!</p>
                        <div>
                            <button className='cosmica_read_btn'>OUR CHARTS</button>
                            <button className='audit_btn'>AUDIT</button>
                        </div>
               </div>
            </div>
            <div className="rug_free_img_div">
                {/* <img className='rugfree_bg' src={bgimg} alt="" /> */}
                <img className='rugfree_img'  src={rugfree} alt="" />
            </div>
            
        </div>
    )
}

export default RugFree
