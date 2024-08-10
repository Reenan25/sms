import React from 'react'
import img from"./download (1).png"
function About() {
  return (
    <div>
      <div className='row about mt-5'>
        <div className='col-9'>
      <h2 style={{color:"#AF47D2"}}>AboutUs</h2>
      
      <p>

Welcome to Student Management System, your comprehensive platform for managing and exploring courses. At ,we are dedicated to providing students with the tools and information they need to succeed in their academic journey.<br></br><br></br>

<h3 style={{color:"#AF47D2"}}>Our Mission</h3>

Our mission is to empower students by offering a user-friendly interface where they can access detailed information about courses, enrollments, schedules, and academic resources. We aim to simplify the process of course selection and registration, making it efficient and hassle-free.<br></br><br></br>

<h3 style={{color:"#AF47D2"}}>What We Offer</h3>

<b>Course Catalog:</b> Explore our extensive catalog of courses offered across various disciplines. From foundational courses to specialized electives, we provide detailed descriptions, prerequisites, and credit information to help you make informed decisions.<br></br>

<b>Enrollment Management:</b> Manage your course enrollments seamlessly. Our system allows you to view available seats, register for courses, and track your academic progress in real-time.<br></br>

<b>Personalized Dashboard:</b> Each student has a personalized dashboard that displays relevant information such as upcoming classes, academic deadlines, and announcements from faculty.<br></br>

<b>Support and Resources:</b> We are committed to supporting your academic journey. Our system provides access to educational resources, faculty contact information, and academic advising services to ensure you receive the assistance you need.<br></br><br></br>

<h3 style={{color:"#AF47D2"}}>Why Choose Us?</h3>

Choosing Student Management System means choosing reliability, efficiency, and support throughout your academic career. Whether you are a new student exploring your options or a returning student navigating advanced courses, our system is designed to cater to your needs.</p>
      </div>
      <div className='col-3'>
    <img style={{height:"300px",width:"300px"}} src={img} alt='download (1)'></img><br></br>
    <h2 style={{color:"#AF47D2"}}>Benefits:</h2>
    <p>Easy Course Exploration and Selection</p>
    <p>Real-Time Course Updates</p>
    <p>Easy to understand</p>
    <p>Low cost</p>
    <p>Improved Student Experience</p>
      </div>
      </div>
    </div>
  )
}

export default About
