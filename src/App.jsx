import React from "react"
import {Routes, Route} from "../node_modules/react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import Contact from "./pages/Contact"
import Pricing from "./pages/Pricing"
import Dashboard from "./pages/Dashboard"

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </>
  )
}