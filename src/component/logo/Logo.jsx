// import React from 'react'

const Logo = () => {
  return (
    <div>
         <div className='text-center  d-flex w-30 rounded-pill' style={{paddingLeft:"20px",cursor:"pointer",paddingTop:"10px", paddingBottom:"10px",background: "linear-gradient(#e3e5e6,#ece6cb,#e4e4e2,#eee8cd)",width:"100%"}} onClick={() => window.location.href="/"}>
        <img className='img-fluid w-10 h-10' src="./logo.png" alt="" /> <p className='pt-2 '>Realsavers</p>
        </div>
    </div>
  )
}

export default Logo