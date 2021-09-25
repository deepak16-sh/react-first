import React from 'react'
import { Nav } from "../component/nav";
import Footer from "../component/Footer";
import Error404 from '../component/Error404';
export default function Error() {
    return (
        <React.Fragment>
        <Nav></Nav>
        <Error404/>
        <Footer></Footer>
        </React.Fragment>
    )
}
