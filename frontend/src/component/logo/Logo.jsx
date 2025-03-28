import React from 'react'

const Logo = () => {
  return (
    <div>
         <div className='text-center mt-4 d-flex  p-1 w-30 rounded-pill' style={{marginLeft:"20px",cursor:"pointer",}} onClick={(e)=> window.location.href="/"}>
        <img className='img-fluid w-10 h-10' src="./logo.png" alt="" /> <p className='pt-2 '>Realsavers</p>
        </div>
    </div>
  )
}

export default Logo