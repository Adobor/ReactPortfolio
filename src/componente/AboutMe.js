import React from "react";
import mypic from '../imag/mypic.jpg'
import about from '../style/about.css'
import twitter from '../imag/twitter.jpg';
import linkedin from '../imag/linkedin.jpg';
import { AiOutlineInstagram } from "react-icons/ai";

function AboutMe() {
   return(
  
      <div className="aboutph">
      <h6><span className="ncn"><b>About Me </b><br/>I AM SOLOMON A ADOBOR</span> <br/>
      Adobor Solomon is a passionate and goal driven<br/>
         Techpreneur whose interest is in using technology to
          <br/>build solution to solve real world problems.
          </h6>
          <span className='spimg2'><img src={twitter} className="lind" alt="logo" /></span>
          <span><img src={linkedin} className="twint" alt="logo" /></span>
          <span className="icoos"><AiOutlineInstagram/></span>
          
            </div>
      
   

   );

}
export default AboutMe
