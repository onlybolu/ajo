import React from 'react'

const Marquee = () => {
  return (
    <div>
        <marquee className=" border-l-green-50 rounded-pill" style={{margin:"0px 20px",height:"20px"}}>
            <div className='d-flex gap-5'>
            <p>daniel just withdrawed 10k</p>
            <p>daniel just withdrawed 10k</p>
            <p>daniel just withdrawed 10k</p>
            <p>daniel just withdrawed 10k</p>
            <p>daniel just withdrawed 10k</p>
            <p>daniel just withdrawed 10k</p>
            </div>
        </marquee>
    </div>
  )
}

export default Marquee