import React from 'react'
import Logo from '../logo/Logo'
import {useState} from 'react'
import Checkbox from './Menu'
import {Link} from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='d-flex justify-between align-items-center  border-b border-gray-300' style={{background:"linear-gradient(#ece6cb,#e3e5e6)"}}>
        <Logo/>
        
        <div className="d-flex gap-8" style={{padding:"0px 20px"}}>
        <div className="d-none d-md-flex text-center align-items-center md:flex gap-8" style={{paddingTop:"23px"}}>
          <a href="#" className="text-black" style={{textDecoration:"none"}}>Home</a>
          <a href="#" className="text-black" style={{textDecoration:"none"}}>Testimonials</a>
          <a href="#" className="text-black" style={{textDecoration:"none"}}>Contact</a>
        </div>
            <div className="login d-flex gap-4 d-none d-md-flex">
            <Link className='d-flex align-items-center justify-center btn w-100 text-center mt-4 ' style={{cursor:"pointer",textAlign:"center",background:"#b484ff",padding:"5px 40px"}} to="/login">Login</Link>
            {/* <button className='d-flex align-items-center justify-center btn w-100 text-center mt-4 rounded-pill' style={{cursor:"pointer",textAlign:"center",background:"#b484ff",padding:"5px 20px"}}  onClick={(e)=> window.location.href="/signup"}>Signup </button> */}
            </div>
            <div className="d-block d-md-none" style={{width:"30px",paddingTop:"20px"}}>
            <Checkbox/>
            </div>
        </div>
        
    </div>
  )
}


export default Header