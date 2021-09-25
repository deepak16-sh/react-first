import React from 'react'
import '../css/header.css'
export const Header = () => {
    return (
        <React.Fragment>
            <header className="main">
                <section className="container">
                    <div>
                        <div className="text">
                            <h1>The Right Opportunity<br /> For Your Carrier</h1>
                            <p>we providing the best opportunity<br /> for your carrier and your future plane. </p>
                            <h3>Don't miss the chance </h3>
                        </div>
                        <div className="input_field">
                            <input type="text" className="get_email" placeholder="Enter Your Email..." />
                            <input type="button" value="Get it now" className="get_btn" />
                        </div>
                    </div>
                </section>
                <section className="container_img">
                    <img src="./images/office3.jpg" alt="" className="img_child1" />
                    <img src="./images/office2.jpg" alt="" className="img_child2" />
                </section>
            </header>
        </React.Fragment>
    )
}

