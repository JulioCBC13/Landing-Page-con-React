import React from "react";
import "/workspace/Landing-Page-con-React/src/styles/Navbar.css"
 
const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark" id="navbar">
    <div className="container-fluid" >
      <a className="navbar-brand" href="#">Start Boostrap</a>
      
        
      <div className="collapse navbar-collapse " id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" id="disable">Service</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" id="disable">Contact</a>
          </li>
        </ul>
       
      </div>
    </div>
  </nav>
	);
};

export default Navbar;