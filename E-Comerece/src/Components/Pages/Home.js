import React from 'react'
import Crousles from '../INC/Crousles'
import Grids from '../INC/Card'
import Footer from '../INC/Footer'




const Home = () => {
  return (
    <>    
      <Crousles/>
      <Grids/>

      <div class="sig-Slu section-p1">
<div class="signup-info">
    <h2>Signup for new Slutter</h2>
    <p>get E-mail Updates about our latest shop and <span>special offers </span>.</p>
</div>
<div class="email">
    <input type="text" placeholder="Your Email Address"/>
    <button>Sign up</button>
</div>
</div> 

      <Footer/>

        </>
  )
}

export default Home
