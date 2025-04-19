// import React from 'react'
// import Marquee from '../marquees/Marquee'
import Header from '../features/Header'
import Footer from '../features/Footer'
import Body from './Body'
const Home = () => {
  return (
    <div className='d-flex flex-column ' style={{overflowX:"scroll", height:"110vh",width:"100%",position:"fixed"}}>      
      <div className="nimp">
      <div className="kilp" style={{position:"fixed",width:"100%"}}>
      <Header/>
      </div>
     <div className="o" style={{overflowX:"scroll",height:"92vh",width:"100%"}}>
     <Body/>
     </div>
      </div>
      <br/>
     <div className="flex">
     <Footer/>
     </div>
    </div>
  )
}

export default Home