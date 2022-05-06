import React from "react";
import twitter from "../imag/twitter.jpg";
import linkedin from "../imag/linkedin.jpg";
import fot from '../style/fot.css'
import { AiOutlineInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="mainfooter">
      <div className="fotname"><s>Solomon Adobor</s></div>
      <div>
        <span className="spimg3">
          <img src={twitter} className="lind" alt="logo" />
        </span>
        <span>
          <img src={linkedin} className="twint" alt="logo" />
        </span>
        <span className="icoos"><AiOutlineInstagram/></span>
        <span></span>
      </div>
      <div className="right"> Copyright &copy; 2022 | All right Reserved</div>
    </div>
  );
}
