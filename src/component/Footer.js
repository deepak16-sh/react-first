import React from 'react'
import '../css/footer.css'
export default function Footer() {
    return (
        <React.Fragment>
            <footer>
                <div className="footer_cont">
                    <div className="footer_comp">
                        <div className="footer_list">
                            <h2>Company</h2>
                            <ul style={{textAlign:"center"}}>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                                <li>About</li>
                            </ul>
                        </div>
                        <div className="footer_list">
                            <h2>Company</h2>
                            <ul style={{textAlign:"center"}}>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                                <li>About</li>
                            </ul>
                        </div>
                        <div className="footer_list">
                            <h2>Company</h2>
                            <ul style={{textAlign:"center"}}>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                                <li>About</li>
                            </ul>
                        </div>
                        <div className="footer_list">
                            <h2>Company</h2>
                            <ul style={{textAlign:"center"}}>
                                <li><i class="fab fa-facebook-square"></i></li>
                                <li><i class="fab fa-instagram"></i></li>
                                <li><i class="fab fa-youtube"></i></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="copyright">
                    <h2 style={{textAlign:"center",paddingTop:"3rem",fontSize:"3rem",color:"gray"}}>Copyright @ 2021 DeePay All rights reserved</h2>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}
