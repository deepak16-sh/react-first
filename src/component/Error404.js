import React from 'react'
import '../css/error.css'
import { NavLink } from 'react-router-dom'
export default function Error404() {
    return (
        <React.Fragment>
            <div className="notfound">
                <div className="error">
                    <div className="error404">
                        <h1>404</h1>
                    </div>
                    <div className="pagenotfound">
                        <h1>WE ARE SORRY, PAGE NOT FOUND</h1>
                        <NavLink to="/">BACK TO HOME PAGE</NavLink>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
