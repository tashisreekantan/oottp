import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const OTPForm = ({ email }) => {
 
const apiUrl ="/api/verify-otp"

const [otp,setOtp]=useState({})

const navigate =useNavigate()

const changeTheData =(event)=>{
    setOtp({
      ...otp,[event.target.name]:event.target.value
    })
  }

    const clickLogin =(event) =>{
        event.preventDefault()
        try {
    
         axios.post(apiUrl,otp)
         .then(response =>{
         console.log(response)  
     
           if (response.data.message === "OTP verified successfully") {
           
             navigate("/Welcome")
           } else {
             alert("error")
           }
         })
        } catch (error) {
         console.log(error.message);
        }
         
       }


  return (
    <div>
        <h1>ENTER YOUR EMAIL AND OTP</h1>
        <div class="mb-3">
        <label for="exampleInputEmail1" className="form-label">Email address</label>
     <input name='email' type="email" className="form-control"  onChange={changeTheData} id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
            <label htmlFor="" className="form-label">OTP</label>
            <input name='otp' type="text" className="form-control" onChange={changeTheData}/>
    
  </div>
  <button onClick={clickLogin} class="btn btn-primary" type="submit">Submit</button>
</div>
  )
}

export default OTPForm

  