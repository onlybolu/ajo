// import React from 'react'

const Logo = () => {
  return (
    <div>
         <div className='text-center items-center justify-center flex w-30 rounded-pill'  onClick={() => window.location.href="/"}>
        <img className='img-fluid w-10 h-10' src="./logo.png" alt="" />
         <p className='pt-2 '>Realsavers</p>
        </div>
    </div>
  )
}

export default Logo