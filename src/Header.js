import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Courses from './Courses'
import Register from './Register'

function Header() {
  return (
    <div>
      <div className='row py-2 shadow-sm border-bottom'>
    <div className='col-3 about'>
        <h6 style={{fontSize:"25px"}}>Student Management System</h6>
    </div>
    <div className='col-9 d-flex justify-content-end'>
    <Link to={'home'} className='menu'>Home</Link>
    <Link to={'aboutus'} className='menu'>AboutUs</Link>
    <Link to={'cources'} className='menu'>Courses</Link>
    <Link to={'contact'} className='menu'>Contact</Link>
    </div>
      </div>
      <Routes>
        <Route path='' element={<Home/>}>
        </Route>
        <Route path='home' element={<Home/>}>
        </Route>
        <Route path='aboutus' element={<About/>}/>
        <Route path='cources' element={<Courses/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='register' element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default Header
