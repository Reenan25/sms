import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import API_URL from './Api/Api'
import { useNavigate } from 'react-router-dom'

function Register() {
  let {
    register,handleSubmit,formState: { errors },} = useForm()
    let navigate=useNavigate()
    async function form(data){
      console.log("Forms",data)
      try{
        let response=await axios.post(API_URL,data);
        console.log(response.data);
        alert("data added successfully!!!");
        navigate("/home")
      }catch(error){
        console.log("Error")
      }
    }
  return (
    <div className='row mt-5 justify-content-center'>
    <div className='col-4'>
      <form class="row g-3" onSubmit={handleSubmit(form)}>
      <div class="col-md-6">
    <label for="inputEmail4" class="form-label">StudentName</label>
    <input type="text" class="form-control" id="inputEmail4" {...register("studentname",{required:true})} placeholder='Enter your name'/>
    {errors.studentname && <p style={{color:"red"}}>StudentName is Required</p>}
  </div>
  <div class="col-md-6">
    <label for="" class="">Gender</label> <br></br>
    <div className='gender'>
    <input  type="radio" name="gender"  value="Male" id="" {...register("gender",{required:true})} style={{marginRight:"6px"}}/>Male 
    <input type="radio" name="gender" value="Female" id="" {...register("gender")} style={{marginRight:"6px"}}/>Female 
    <input type="radio" name="gender" value="Others" id="" {...register("gender")} style={{marginRight:"6px"}}/>Others </div>
    {errors.gender && <p style={{color:"red"}}>Gender is Required</p>}
    </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4" {...register("email",{required:true})} placeholder='Enter your email'/>
    {errors.email && <p style={{color:"red"}}>Email is Required</p>}
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Age</label>
    <input type="text" class="form-control" id="inputPassword4" {...register("age",{required:true})} placeholder='Enter your Age'/>
    {errors.age && <p style={{color:"red"}}>Age is Required</p>}
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Enter your address" {...register("address",{required:true})}/>
    {errors.address && <p style={{color:"red"}}>Address is Required</p>}
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" {...register("address2",{required:true})}/>
    {errors.address2 && <p style={{color:"red"}}>Address2 is Required</p>}
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">PhoneNo</label>
    <input type="text" class="form-control" id="inputCity" {...register("phoneno",{required:true})} placeholder='Enter your phoneno'/>
    {errors.phoneno && <p style={{color:"red"}}>PhoneNo is Required</p>}
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select" {...register("state",{required:true})}>
      <option selected></option>
      <option>Tamil Nadu</option>
      <option>Kerala</option>
      <option>Karnataka</option>
      <option>Bihar</option>
    </select>
    {errors.state && <p style={{color:"red"}}>State is Required</p>}
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"{...register("zip",{required:true})} placeholder='zip'/>
    {errors.zip && <p style={{color:"red"}}>Zip is Required</p>}
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">submit</button>
  </div>
</form>
  </div>
  </div>
  )
}

export default Register
