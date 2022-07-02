import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../index.css"
const Nav = () => {
  return (
    <>
      <div className="continer-fluid d-sm-none">
        <nav className="navbar navbar-light bg-light fixed-top">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Prinsha Fancy Shoes Center</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link " aria-current="page" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link" to="/Service">Store</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink

                      className="nav-link" to="/About">About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link" to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

      </div>

      <div className="cotiner-fluid mb-3 d-lg-block">
        <nav className="navbar navbar-expand-sm navbar-light top-0  position-fixed w-100">
          <div className="container">
            <NavLink className="navbar-brand" to="/">Prinsha Fancy Shoes Center</NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                <li className="nav-item ">
                  <NavLink   className="nav-link " to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink  className="nav-link" to="/Service">Store</NavLink>
                </li>
                
                <li className="nav-item">
                  <NavLink
                    className="nav-link" to="/About">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink  className="nav-link" to="/Contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

    </>
  )
}

export default Nav