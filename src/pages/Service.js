import React from 'react'
import { Nav } from "../component/nav";
import Footer from "../component/Footer";
import {Services} from '../component/services'
export default function Service() {
    return (
        <React.Fragment>
            <Nav></Nav>
            <Services></Services>
            <Footer></Footer>
        </React.Fragment>
    )
}
