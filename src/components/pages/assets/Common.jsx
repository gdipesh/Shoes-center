import React from 'react'
import {NavLink} from "react-router-dom"
// import Owner from './Owner'
import Shoes from "../../image/hero.png"
const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="continer-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">


              
              <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-2 d-flex justify-content-center flex-column">
                <h1>{props.name}<strong className="brand_name">Our Fashion</strong></h1>
                <h2 className="my-3">
                 {props.dis}
                </h2>
                <div className="mt-3">
                  <NavLink to={props.visit} className="btn-get-started py-auto px-2">{props.btn}</NavLink>
                </div>
              </div>
              <div className="col-lg-6 col-10 mx-auto animated mt-5 pt-5 order-1 order-lg-2 header-img">
                <img src={props.imgsrc} alt={props.imgsrc}  className="img-fluid    animated" style={props.height} />

                {/* For Woner Info */}
               <div className='d-flex justify-content-center align-items-center'>
               <div className="card   round-card p-auto w-auto h-auto" style={props.show}>
               <div className="continer-fluid ">
          
                    <img className="card-img-top imgauto img-fluid  img-thumbnail "  src={Shoes} alt={Shoes}/>
               </div>
                    <div className="card-body">
                        <h4 className="card-title">Owner Of Shop : Raju Nepal</h4>
                        <div className="card-text">
                          <address>Contact No. <a href="tel:+9779842106247">9842106247</a></address>
                          <address>Address : Birtamod-5 , near Of Muktichoke |<br /> <NavLink to="/Map">View On Map</NavLink></address><br />
                          <address>Gmail : <a href="mailto:rajugita@gmail.com">rajugita@gmail.com</a></address>
                          <address><NavLink className="btn-get-started" to="/Contact"> More...</NavLink> </address>
                        </div>

                      
                    </div>
                </div>
               </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Common