import React from 'react';
import Nav from './components/pages/Nav';
import  About  from "./components/pages/About";
import Home from './components/pages/Home';
import { Routes, Route} from "react-router-dom";
import Contact from './components/pages/Contact';
import Service from './components/pages/Service';
import "bootstrap/dist/js/bootstrap.bundle";
import Footer from './components/pages/Footer';
import Top from './components/pages/assets/Top';
import News from './components/pages/library/News';
const App = () => {
  return (
    <>
    <main>
    <Nav/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Service" element={<Service/>}/>
    <Route path="/News" element={<News/>}/>
    <Route path="*" element={<Home/>}/>
    </Routes>
    
<Top/>
    </main>
<Footer/>
    
    </>
  )
}
export default App