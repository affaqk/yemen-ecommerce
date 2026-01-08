import React from "react";
import "./Style.css"
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import { Routes, Route } from "react-router-dom"
import About from "./About";
import Contact from "./Contact";

const App = () => {
  return (
    <>   
    <Navbar/>
    
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/about" element = {<About/>}/>
      <Route path = "/contact" element = {<Contact/>}/>
    </Routes>
    <Footer/>
    </>
  )
}
export default App

