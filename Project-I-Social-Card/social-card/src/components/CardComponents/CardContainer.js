import React from "react";
import "./Card.css";
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";
import Footer from '../FooterComponents/Footer'

const CardContainer = () => {
  return (
    <a href="https://www.reactjs.org">
      <div className="CardContainer">
        <CardBanner />
        <CardContent />
       <Footer/>

      </div>
    </a>
  );
};

export default CardContainer;
