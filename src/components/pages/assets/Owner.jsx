import React from 'react'
import Shoes from "../../image/logo.png"
import { NavLink } from 'react-router-dom';
const Owner = () => {
  return (
    <>
    <div className="card round-card" >
                    <img className="card-img-top img-thumbnail rounded-circle" src={Shoes} alt={Shoes}/>
                    <div className="card-body">
                        <h4 className="card-title">Owner Of Shop : Raju Nepal</h4>
                        <p className="card-text">
                          <address>Contact No. <a href="tel:+9779877777">Click to Call</a></address>
                          <address>Address : Birtamod, near Of Muktichoke |<br /> <a href="http://">View On Map</a></address><br />
                          <address>Gmail : <a href="mailto:rajugita@gmail.com">rajugita@gmail.com</a></address>
                          <address><NavLink className="btn-get-started" to="/Contact"> More...</NavLink> </address>
                        </p>

                      
                    </div>
                </div>
    </>
  )
}

export default Owner