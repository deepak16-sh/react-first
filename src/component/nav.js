import React, { useState } from 'react'
import '../css/nav.css'
// import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi';

import { NavLink } from 'react-router-dom';
export const Nav = () => {
    const [icon, seticon] = useState(false);
    return (
        <React.Fragment>
            <nav className={!icon ? "main_nav" : "main_nav2 main_nav3"}>
                <div className="logo logo2">
                    <h3>
                        <span>D</span>eepak
                        <span>P</span>ay
                    </h3>
                </div>
                <div className={!icon ? "menu" : "menu_links menu_links2"}>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/service">Services</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
                <div className={!icon?"form_btn":"form_btn2 form_btn3"}>
                    <form action="">
                        <button type="submit">Login</button>
                        <button type="submit">Signup</button>
                    </form>
                </div>
                <div className="burger" onClick={() => { seticon(!icon) }}>
                    <GiHamburgerMenu></GiHamburgerMenu>
                </div>
            </nav>
        </React.Fragment>
    )
}
