import React from 'react'
import work_api from '../api/work_api'
export const HowItWorks = () => {
    console.log(work_api);
    return (
        <React.Fragment>
            <section className="main_work_cont">
                <div className="work_cont">
                    <u><h1 style={{ textAlign: "center",fontSize:"3rem"}}>How Does IT Work</h1></u>
                    <div className="work_data">
                        {work_api.map((curElem) => {
                            return (
                                <div className="work_data1">
                                <i class={`${curElem.logo}`}></i>
                                    <h2>{`${curElem.title}`}</h2>
                                    <p style={{padding:"1rem 0 0 0"}}>
                                    {`${curElem.info}`}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
