import React from 'react'
import logo from"./image.png"
function Courses() {
  return (
    <div><div className='row mt-3 about'>
      <h2 style={{color:"#AF47D2"}}>Available Courses</h2>
      </div>
      <div className='row'>
    <div col-10 >
    <center><img className='height' src={logo} alt='image'></img></center> 
    </div>
      </div>
    </div>
  )
}

export default Courses
