import React from 'react'
import UseApp from '../api/how_to_work'
import '../css/about.css'
export const Aboutus = () => {
    return (
        <React.Fragment>
            <section className="Aboutus">
                <div className="about_cont">
                    <div>
                        <h3 style={{ textAlign: 'center' }}>AVAILABLE @ GOOGLE AND IOS STORE ONLY</h3>
                    </div>
                    <div className="about_comp">
                        <div className="about_data">
                            <div className="about_img">
                                <img src="./images/office1.jpg" alt="" />
                            </div>
                            <div className="about_list">
                                <h1 >How to use the App?</h1>
                                {UseApp.map((ele) => {
                                    return (
                                        <div className="about_info">
                                            <div className="our_about_no">{ele.id}</div>
                                            <div className="our_about_data">
                                                <h2>{ele.title}</h2>
                                                <p>{ele.info}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                                <button className="about_btn">Learn more</button>
                            </div>
                        </div>
                    </div>

                    <div className="about_comp">
                        <div className="about_data">
                            <div className="about_img">
                                <img src="./images/office1.jpg" alt="" />
                            </div>
                            <div className="about_list">
                                <h1 >How to use the App?</h1>
                                {UseApp.map((ele) => {
                                    return (
                                        <div className="about_info">
                                            <div className="our_about_no">{ele.id}</div>
                                            <div className="our_about_data">
                                                <h2>{ele.title}</h2>
                                                <p>{ele.info}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                                <button className="about_btn">Learn more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
