import React from 'react'

import { NavLink } from 'react-router-dom'
// import web from "../../image/15.jpg"
const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card" >
                    <img className="card-img-top img-thumbnail" src={props.image} alt={props.image} />
                    <div className="card-body">
                        <h4 className="card-title">{props.name}</h4>
                        <p className="card-text">{props.description}</p>

                        <NavLink to="" className=" btn-get-started" >Order Now</NavLink>
                    </div>
                </div>
            </div>

       
        </>
    )
}

export default Card