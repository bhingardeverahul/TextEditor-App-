import React from 'react';
import PropTypes from 'prop-types';
import './switch.css'
import { Link } from 'react-router-dom'

const Navbar = ({title,mode,toggleMode}) => {
  
    
    return (
        <div>
        <nav className={`navbar navbar-expand-sm navbar-${mode} bg-${mode}`}>
        <Link className="navbar-brand " to={"/"}>  <i class="fa-sharp fa-solid fa-text-height"></i>  {title}</Link>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item ">
                    <Link className="nav-link active " to={"/"}> Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active " to={"/about"}>About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active " to={"/"}>Contact</Link>
                </li>
            </ul>
      </div>
      
      <div className='d-flex justify-content-end'>
          {/* <div className="bg-primary rounded mx-2" onClick={()=>toggleMode('primary')} style={{height:"30px", width:"30px" ,cursor:"pointer"}}></div>
          <div className="bg-warning rounded mx-2" onClick={()=>toggleMode('warning')} style={{height:"30px", width:"30px" ,cursor:"pointer"}}></div>
          <div className="bg-success rounded mx-2" onClick={()=>toggleMode('success')} style={{height:"30px", width:"30px" ,cursor:"pointer"}}></div>
          <div className="bg-info rounded mx-2" onClick={()=>toggleMode('info')} style={{height:"30px", width:"30px" ,cursor:"pointer"}}></div> */}
            <div/>

             <div className={`form-check form-switch text-${mode==='light'?"dark":"light"}`}>
             <input className="form-check-input" type="checkbox" onClick={toggleMode} role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Enable Mode</label>
</div>
        </div>
    </nav>
        </div>
    );
}

Navbar.prototype={
    title:PropTypes.string.isRequired
}

Navbar.defaultProps={
    title:"Text editor",
}
export default Navbar;

