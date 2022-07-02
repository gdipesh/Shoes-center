import React from 'react'
// import { NavLink } from "react-router-dom"
// import Shoes from "../image/me.jpg"
import img from "../image/logo.png"
import Common from "./assets/Common"
const Home = () => {
  return (
    <>
      <Common dis="Change your Style with Us  " name="Your Looks Will Be Smart With "   imgsrc={img} visit="/service"height={{borderRadius:"50%", border:".3rem solid black",zIndex:"-3"}} btn="Get Started " show={{display:"none"}} />
    
    </>
  )
}

export default Home