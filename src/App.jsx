import React from "react"
import {Routes, Route} from "../node_modules/react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import Contact from "./pages/Contact"
import Pricing from "./pages/Pricing"
import Signup from "./pages/Signup"
import Privacy from "./pages/Privacy"
import FAQ from "./pages/FAQ"
import LostPassword from "./pages/LostPassword"

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
        <Route path='/faq' element={<FAQ/>}/>
        <Route path='/lost-password' element={<LostPassword/>}/>
      </Routes>
    </>
  )
}