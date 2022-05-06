import React from "react";
import mypic from '../imag/mypic.jpg'
import toph from '../style/toph.css'
import twitter from '../imag/twitter.jpg';
import linkedin from '../imag/linkedin.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {coffee} from '@fortawesome/react-fontawesome'
// import { FaBeer } from 'react-icons/fa';
import { AiOutlineInstagram } from "react-icons/ai";




function Topheader() {
   return(
   <div className="topcon2">
      <div className="tophleft">
      <h2><span className="nn">HI THERE <br/>I AM SOLOMON A ADOBOR</span> <br/>
      A Top-notch Developer,<br/>
          Writer and Tech Instructor.
          <br/>
          <span className='spimg2'><img src={twitter} className="lind" alt="logo" /></span>
          <span><img src={linkedin} className="twint" alt="logo" /></span>
          <span className="icoos"><FontAwesomeIcon icon="coffee" /></span>
          <span className="icoos"><AiOutlineInstagram/></span>
          {/* <span className="icoos"><FaBeer /></span> */}
      </h2>
            </div>
      <div className="selfmag"> 
      <img src={mypic} className="selft" alt="logo" />
                        </div>
      
   </div>  

   );

}
export default Topheader

