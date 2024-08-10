import React from 'react'
import img from "./images.png"
function Contact() {
  return (
    <div >
      <div className='row mt-5'>
      <div className='col-12 d-flex  border-bottom' style={{backgroundColor:"#180161"}}>
      
      <div className='p'>
      <h1 style={{color:"#fff"}}>ContactUs</h1><br></br>
    <h4 style={{color:"#fff"}}>→ DR.A.P.J.Abdul Kalam Institute,</h4>
    <h4 style={{color:"#fff"}}>→ Chennai,</h4>
    <h4 style={{color:"#fff"}}>→ Sowcarpet,Shenoy Nagar,Periyar Nagar West,Erukkanchery,</h4>
    <h4 style={{color:"#fff"}}>→ ✆-91+ 9402786534,</h4>
    <h4 style={{color:"blue"}}>→ reena45@gmail.com</h4>
    </div>
    </div>
      </div>
      <div className='row'>
    <div className='col-3'style={{backgroundColor:"#180161"}}>
    <img style={{height:"300px",width:"300px"}}src={img} alt='images'></img></div>
    <div className='col-9'style={{backgroundColor:"#180161"}}>
      <p style={{color:"#fff"}} className='p1'>"Thank you for visiting our website"</p>
      <p style={{color:"#fff"}} className='p1'>"Please visit again, and continue to expand your knowledge."</p>
      <p style={{color:"#fff"}} className='p1'>"We encourage you to visit again and keep growing your knowledge."</p>
        </div>
      </div>
    </div>

  )
}

export default Contact
