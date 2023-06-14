import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"



function Navbar() {
  return (
<div>
  <nav className="navbar navbar-expand-lg navbar-light bg-white text-white nav-shadow fixed-top" >
           <Link to='/' className="navbar-brand #top text-danger">POP-CEE</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
       <div className="collapse navbar-collapse justify-content-end text-center" id="navbarNav" >
         <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to='/' className="nav-link #top">HOME  <span class="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
             <Link to='/About' className="nav-link #top">ABOUT</Link>
              
            </li>
            <li className="nav-item">
              <Link to='/Project' className="nav-link #top">PROJECT</Link>
            </li>
            <li className="nav-item ">
              <Link to='/Contact' className="nav-link #top">CONTACT</Link>
            </li>
          
         </ul>
       </div>
      </nav> 
      <div id="#top"></div>
</div>
  )
}

export default Navbar
