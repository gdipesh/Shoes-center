import React from 'react'
// import { NavLink } from 'react-router-dom';
// import "./css/card.css";

import img from "../../image/1.jpg";
const Newscard = (props) => {
    return (
        <>

        <div className="col-3">
        <div className="card">
  <img className="card-img-top" src={img} alt="vcgh"/>
  <div className="card-body">
    <h4 className="card-title">Title</h4>
    <p className="card-text">Text</p>
  </div>
</div>
        </div>
          
        
    
        </>
    )
}
export default Newscard