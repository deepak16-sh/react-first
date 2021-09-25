import React from "react";
import { Nav } from "./component/nav";
import { Header } from "./component/header";
import {HowItWorks} from "./component/howitworks";
import {Aboutus} from "./component/Aboutus";
import {Services} from './component/services'
import Contactus from "./component/Contactus";
import Footer from "./component/Footer";
function Home() {
  return (
    <React.Fragment>
      <Nav></Nav>
      <Header></Header>
      <HowItWorks></HowItWorks>
      <Aboutus></Aboutus>
      <Services></Services>
      <Contactus></Contactus>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default Home;
