// import React from 'react'
import BodyFooter from '../features/bodyfooter'
// import Subscribe from '../features/subcribe'
import Slip from './Slip'
import {Link} from 'react-router-dom'

const Body = () => {

  return (
    <div>
       <div className="lop" style={{background:"linear-gradient(#e3e5e6,#ece6cb,#e4e4e2,#eee8cd)"}}>
       <div className="container d-flex flex-column-reverse d-md-flex flex-md-row align-items-center gap-10" style={{padding:"200px 0px 0px"}}>
            <div className="" style={{width:"50%"}}>
    <img className="img-fluid d-md-block" src="/home-left.png" alt="" style={{width:"500px"}}/>
            </div>
            <div className="container text-center w-md-50 w-100" >
            <h1 className='' style={{fontSize:"40px",fontFamily:"Urbanist, serif"}}>Alternative finance for <span style={{color:"#37c0c0",fontSize:"40px"}}>underserved</span> Africans.</h1>
            <p>We make access to micro-credit easy for SMEs and corporate worker at zero-interest. Become a part of our community financing digital rotating savings and credit platform (ROSCA) to get started</p><br/>
           <Link to="/signup" className='btn text-center py-8 rounded-pill' style={{background:"#b484ff",cursor:"pointer"}}>Get started</Link>
         
            </div>
        </div>
       </div>
        <Slip/>
        <BodyFooter/>
    </div>
  )
}

export default Body