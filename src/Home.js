import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate} from 'react-router-dom'
import API_URL from './Api/Api'
function Home() {
  const[datas,setDtatas]=useState()
  let getAll=async ()=>{
    try{
      let response=await axios.get(API_URL);
      setDtatas(response.data);
    }catch(error){
      console.log("error");
    }
}
let navigate=useNavigate()
async function deletestudent(id){
  try{
    let response=await axios.delete(API_URL+"/"+id)
    console.log(response);
    if(response.status==200){
    alert("Data deleted succefully!!!")
    navigate("/home")
     }
  }
  catch(error){
    console.log(error);
  }
}
useEffect(()=>{
  getAll()
})
  return (
    <div>
      <div className='row mt-5'>
      <div className='col-12'>
      <div className="card">
  <div className="card-header">
    Student List
  </div>
  <div className="card-body">
    <div className='row button'>
     <Link to={"/register"} className='btn btn-primary'>ADD</Link>
    </div>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">StudentName</th>
      <th scope="col">Gender</th>
      <th scope="col">Email</th>
      <th scope="col">Age</th>
      <th scope="col">Address</th>
      <th scope="col">Address2</th>
      <th scope="col">PhoneNo</th>
      <th scope="col">State</th>
      <th scope="col">Zip</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {datas && datas.map((data)=>{
      return(<tr>
        <td>{data.studentname}</td>
        <td>{data.gender}</td>
        <td>{data.email}</td>
        <td>{data.age}</td>
        <td>{data.address}</td>
        <td>{data.address2}</td>
        <td>{data.phoneno}</td>
        <td>{data.state}</td>
        <td>{data.zip}</td>
        <td><button type="button" class="btn btn-primary">View</button><button type="button" class="btn btn-warning">Edit</button><button onClick={()=>{deletestudent(data.id)}} type="button" class="btn btn-danger">Delete</button></td>
      </tr>)
    })}
    
    
  </tbody>
</table>
</div>
      </div>
      </div>
      <div className='col-4'>
      <Outlet></Outlet>
      </div>
    </div>
    
    </div>
  )
}

export default Home
