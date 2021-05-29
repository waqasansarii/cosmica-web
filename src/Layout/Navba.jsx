import React from 'react'
import './style.css'
// assets 
import logo from '../Assets/Faux Logo.png'


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-xl navbar-light custom_nav">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <a className="nav-link" href="#">WHAT IS COSMICA</a>
                            <a className="nav-link" href="#">MOON LANDINGS</a>
                            <a className="nav-link" href="#">TOKENOMICS</a>
                            <a className="nav-link" href="#">PARTNETS</a>
                            <a className="nav-link" href="#">FAQ</a>
                            <button className='nav_btn_cus'>BUY ON PANCAKESWAP</button>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
