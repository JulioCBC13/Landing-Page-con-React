import React from "react";
import "/workspace/Landing-Page-con-React/src/styles/Navbar.css"
 
const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark  fixed-top bg-dark fixed-top" id="navbar">
    <div className="container" >
      <a className="navbar-brand" href="#">Start Boostrap</a>
      
      
        <button type="button" class="btn btn-secondary dropdown-toggle navbar-toggler" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
        <a className="navbar-toggler-icon"></a>
        </button>
        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start bg-dark">
          <li><button class="dropdown-item text-light" type="button">Home</button></li>
          <li><button class="dropdown-item text-light" type="button">About</button></li>
          <li><button class="dropdown-item text-light" type="button">Service</button></li>
          <li><button class="dropdown-item text-light" type="button">Contact</button></li>
        </ul>
      

      <div className="collapse navbar-collapse" id="navbarcollapse">
        
        <ul className="navbar-nav" >

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