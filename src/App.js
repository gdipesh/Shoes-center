import React from 'react';
import Nav from './components/pages/Nav';
import  About  from "./components/pages/About";
import Home from './components/pages/Home';
import { Routes, Route, Navigate} from "react-router-dom";
import Contact from './components/pages/Contact';
import Service from './components/pages/Service';
import "bootstrap/dist/js/bootstrap.bundle";
import Footer from './components/pages/Footer';
import Top from './components/pages/assets/Top';
import News from './components/pages/library/News';
import Map from './components/pages/assets/Map';
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
    <Route path="/Map" element={<Map/>}/>

    <Route path="*" element={<Home/>}/>
    <Route path='*' element={<Navigate replace to='/'/>} />
    </Routes>
    
<Top/>
    </main>
<Footer/>
    
    </>
  )
}
export default App