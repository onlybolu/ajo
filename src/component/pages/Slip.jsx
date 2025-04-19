// import React from 'react'

// import { TypewriterEffect } from "../ui/typewriter-ui"

const Slip = () => {
  return (
    <div className='bg-white'>
        <div className="container " style={{padding:"80px 0px 0px"}}>
            <div className="container">
            <h1 className='text-center text-md-start'  style={{fontSize:"40px",fontFamily:"Urbanist, serif"}}>Safe, secure and fast.</h1>
            <p className="text-wrap w-full md:w-1/2 text-md-wrap">Receive money into your wallets on Realsavers, get to make transactions with the money and also withdraw it to your bank account or send to third-parties.</p>
            </div><br/>
            <div className="container flex px-4 px-md-0 flex-col md:flex-row  gap-10">
                <div className="" style={{background:"#f5f5f5",padding:"40px 20px",borderRadius:"30px"}}>
                    <div className="card-body">
                        <img src="/naira-search.svg" alt="" /><br/>
                        <h3 className="card-title">No hidden fee</h3><br/>
                        <p className="card-text">We do not have any hidden fee in our wallets. Easily send money in and out of the app at low to zero top and transfer fees.</p>
                    </div>
                </div>
                <div className="" style={{background:"#f5f5f5",padding:"40px 20px",borderRadius:"30px"}}>
                    <div className="card-body">
                        <img src="/voucher.svg" alt="" /><br/>
                        <h3 className="card-title">Virtual account #</h3><br/>
                        <p className="card-text">With your dedicated virtual account number, you will easily receive money from any bank.</p>
                    </div>
                </div>
                <div className="" style={{background:"#f5f5f5",padding:"40px 20px",borderRadius:"30px"}}>
                    <div className="card-body">
                        <img src="/nairaum.svg" alt="" /><br/>
                        <h3 className="card-title">BDIC insured</h3><br/>
                        <p className="card-text">Your deposits are securely managed by our bank partners who are BDIC insured.</p>
                    </div>
                </div>
            </div><br/><br/>
            <div className="d-block d-md-flex gap-10 px-3 md:px-0 mb-20">
                <div className="w-full md:w-1/2">
                    <img src="/testimonial-1.png" className="img-fluid " alt="" />
                </div>
                <div className="d-flex flex-col justify-center w-full md:w-1/2">
                    <h2 className="text-center text-md-start" style={{fontSize:"40px",fontFamily:"Urbanist, serif", fontStyle:"italic",color:"#f0ff95"}}>Here’s Kunle</h2>
                    <h3 className="text-center text-md-start" style={{fontSize:"30px",fontFamily:"Urbanist, serif"}}>He now secures his savings on Realsavers</h3>
                    <p className="text-center text-md-start">Any time Kunle packed a rotating savings or access credit on Realsavers, Kunle spend his money from his Realsavers wallets without the hassle of always having to move it out before spending. Kunle credibility grows more on Realsavers because of this.</p>
                </div>
            </div><br/>

            {/* {acternity ui} */}
            {/* <TypewriterEffect className="text-black" words={words}/> */}
        </div>
    </div>
  )
}

export default Slip