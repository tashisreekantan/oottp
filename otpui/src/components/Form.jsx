// import React, { useState } from 'react';

// const Form = ({ onSubmit }) => {
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(email);
//   };

//   return (
//     <div>
//       <h1>Application for OTP Authentication</h1>
// <form onSubmit={handleSubmit}>
     
//       <div class="mb-3">
//     <label for="exampleInputEmail1" className="form-label">Email address</label>
//     <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
//   </div>

//       <button class="btn btn-primary" type="submit">Submit</button>
//     </form>
//     </div>
    
//   );
// };

// export default Form;


import axios from 'axios';
import React from 'react'
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {

  const [email, setEmail] = useState('')

  const navigate = useNavigate()

  const apiUrl = "/api/send-otp"

  const changeTheData =(event)=>{
    setEmail({
      ...email,[event.target.name]:event.target.value
    })
  }
  
  
  const clickLogin =(event) =>{
    event.preventDefault()
    try {
     axios.post(apiUrl,email)
     .then(response =>{
     console.log(response)  
     // alert(response.data.msg)
 
       if (response.data.message === "OTP sent successfully") {
       
         navigate("/otp")
       } else {
         alert("Not send")
       }
     })
    } catch (error) {
     console.log(error.message);
    }
     
   }

  return (
<div>
    <h1>Application for OTP Authentication</h1>
 <form >
     
       <div class="mb-3">
     <label for="exampleInputEmail1" className="form-label">Email address</label>
     <input name='email' type="email" className="form-control"  onChange={changeTheData} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
   </div>

       <button onClick={clickLogin} class="btn btn-primary" type="submit">Submit</button>
     </form>
     </div>
    
//   );
  )

  }
export default Form