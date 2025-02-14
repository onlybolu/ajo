import React from 'react'
import Logo from '../logo/Logo'
import {Link} from 'react-router-dom'
const Signup = () => {
  return (
    <div style={{background:"linear-gradient(#e3e5e6,#ece6cb,#e4e4e2,#eee8cd)", height:"100vh",position:"fixed",width:"100%"}}>
        <Logo/>
        <div className='d-flex justify-content-center align-items-center h-100 w-100'>
            <div>
            <form action="submit">
            <div>
               <div>
               <h2 className='d-flex align-items-center justify-content-center'>Create an account</h2>
               <p className='text-secondary '>signup for secured monthly payout</p>
               </div>
                <div className='d-flex flex-column mb-3 gap-2'>
                    <label htmlFor="firstname">Full name</label>
                    <input className="form-control bg-white text-dark border rounded-pill" type="text" name="text" id="text" placeholder='Amiele pounders' required/>
                </div>
                <div className='d-flex flex-column mb-3 gap-2'>
                    <label htmlFor="Email">Email</label>
                    <input className="form-control bg-white text-dark border rounded-pill" type="email" name="email" id="email" placeholder='Amielepounders72@gmail.com' required />
                </div>
                <div className='d-flex flex-column mb-3 gap-2'>
                    <label htmlFor="Password">Password</label>
                    <input className="form-control bg-white text-dark border rounded-pill" type="Password" name="Password" id="Password" placeholder='************' required />
                </div>
            </div>
            <button className='btn w-100 text-center p-1 rounded-pill' style={{background:"#b484ff",cursor:"pointer"}} type="submit">Sign up</button>
            
            </form>
            <button className='d-flex align-items-center justify-center btn w-100 text-center mt-4  border border-dark p-1 rounded-pill' style={{cursor:"pointer",textAlign:"center"}}><img className='w-7' src="./Googlelogo.webp" alt="" /> Google </button>
            <div>
            <p className='text-center text-secondary mt-4'>Already have an account? <Link to="/login">Login</Link></p>
        </div>
            </div>
            
            
            <div className='w-50 d-none d-md-block'>
                <img className='img-fluid' src="./signup.png" alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default Signup