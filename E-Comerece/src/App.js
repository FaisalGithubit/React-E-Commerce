import React from 'react'
import Home from './Components/Pages/Home'
import Contact from './Components/Pages/Contact'
import About from './Components/Pages/About'
import Error from './Components/Pages/Error'
import { BrowserRouter as Router ,Routes,Route,Link } from 'react-router-dom'
import './App.css'

const App = () => {

 
  
  return (
    <>

<Router>

    <div>

    <div className='Navbar'>
            <div className="Container">
                <div className="Logo">
                   <Link className='Link' to={'/'}> <img src="./Images/LOGO.jpg" alt="LOGO" /></Link>
                   <Link className='LOGOName' to={'/'}> 
                    <h3 >FOLIO</h3>
                    </Link>
                </div>

                <div className="Navigations">

                        <Link to='/' className='Link'>HOME</Link>
                        <Link to='/About' className='Link'>ABOUT</Link>
                        <Link to='/Contact' className='Link'>CONTACT</Link>

                        
                    </div>

                <div className="Search-box">
                    <div className="S-input">
                    <input type="text" placeholder='Search Your Product...' />
                    </div>
                    <div className="btn">
                    <button className='Search'>Search</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='container'>
        <marquee className='container-2'>
        <h3>Free Shipping on all orders worth Rs. 3000 &amp; above.</h3>
      </marquee>
      </div>
    </div>
      <Routes>
   
        <Route path='/' element={<Home/>} />

        <Route path='/Contact' element={<Contact/>} />
        <Route path='/About' element={<About/>} />
        <Route path='*' element={<Error/>} />
        </Routes>



    </Router>




    </>
  )
}

export default App
