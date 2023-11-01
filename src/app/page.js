"use client"
// 1. Import Area
import { useState } from "react";
import Swal from "sweetalert2";




// 2. Define Area
function Home() {
  // 2.1
  let [title,setTitle] = useState('Registration Page');
  let [payload,setPayload] = useState({
                                          "name": "",
                                          "email": "",
                                          "password": "",
                                          "UserRole": "ADMIN"
                                      });

  // 2.2
  let handleChange = (e)=>{
    console.log(e.target.value);
    setPayload({
      ...payload,
      [e.target.name]:e.target.value
    });
  };
  let SubmitData = async ()=>{
    console.log("hi",payload);
    try {
      const res = await fetch(`/api/register`,{
        method:"POST",
        headers:{
          "Contant-Type" : "application/json"
        },
        body: JSON.stringify(payload)
        });
        const data = await res.json()
        
        if(res === null){
          
        } else{
          Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )
        }
        
      } catch (error) {
        
      }
  }

  // 2.3 Return Statment
  return (
    <>
    <div className='container'>
      <div className="card">
        <div className='card-header text-center'>
          <h3>{title}</h3>
        </div>
        <div className="card-body">
        <form>
          <div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label"> Inter Your Name</label>
              <input name="name" type="name" className="form-control" id="name" aria-describedby="name" onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label"> Inter Your Email</label>
              <input  name="email" type="email" className="form-control" id="email" onChange={handleChange}/>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label"> Inter Your Password</label>
              <input  name="password" type="password" className="form-control" id="password" onChange={handleChange}/>
            </div>
          </div>
        </form>
        </div>
        <div className='card-footer text-center'>
          <button className="btn btn-primary" onClick={SubmitData}> Submit Now</button>
        </div>
     </div>

    </div>
    </>
  )
}
//3. Export Area
export default Home;
