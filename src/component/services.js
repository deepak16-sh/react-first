import React from 'react'
import '../css/services.css'
import services_api from '../api/services_api';
function Services() {
    return (
        <React.Fragment>
            <section className="main_services">
                <div className="services_cont">
                    <h1 style={{ textAlign: "center", fontSize: "3rem", paddingTop: "5rem" }}>How to send the money</h1>
                    <div className="services_comp">
                          {services_api.map((ele)=>{
                              return(
                                <div className="services_list">
                                <i className={ele.logo}></i>
                                <h2>{ele.title}</h2>
                                <p style={{fontSize:"1.5rem",paddingTop:"1rem"}}>{ele.info}</p>
                                </div>
                              )
                          })}
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export { Services };
