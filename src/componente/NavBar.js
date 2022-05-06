
import React from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import twitter from '../imag/twitter.jpg';
import linkedin from '../imag/linkedin.jpg';
import nav from '../style/nav.css';




function NavBar(){
  return (   
      <div className='header'>
         <Router>
              <div className='navlinks'> 
              <span className='names'>SOLOMON A.</span>                   
                    <Link to='/' className="navbar-item nav-link active">AboutMe</Link>
                    <Link to='/' className="navbar-item nav-link active">Services</Link>
                    <Link to='/' className="navbar-item nav-link active">Projects</Link>
                    <Link to='/' className="navbar-item nav-link active">ContactsMe</Link>
                    <span className='spimg'><img src={twitter} className="lind" alt="logo" /></span>
                    <span><img src={linkedin} className="twint" alt="logo" /></span>
      
              </div>   
         </Router>
         
        {/* <h1>{mypic}</h1>  */}
       </div>
  );
}
export default NavBar
