import React from 'react'
import './CForm.css'

const CForm = () => {
  return (
    <>
    <div className='container'>
        <div className='Main-Hadding text-center'>
            <h2>Contact Us & Share your Thoughts</h2>
            <p className='underline '></p>
        </div>
    <div className=' Main-container-2'>
      <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">@</span>
  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <span className="input-group-text" id="basic-addon2">@example.com</span>
</div>


<div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Username" aria-label="Username"/>
  <span className="input-group-text">@</span>
  <input type="text" className="form-control" placeholder="Server" aria-label="Server"/>
</div>

<div className="input-group">
  <span className="input-group-text">With textarea</span>
  <textarea className="form-control" aria-label="With textarea"></textarea>
</div>
<button type="button" class="btn-2 btn-success">Submit</button>


    </div>
    </div>

    
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
</>



  )
}

export default CForm
