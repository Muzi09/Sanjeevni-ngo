import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Waves from "../Components/Wave/Wave";

const Layout = (props) => {
  return (
    <>
    <Waves/>
      <Navbar />
        {props.children}
      <Footer />
    </>
  );
};

export default Layout;
