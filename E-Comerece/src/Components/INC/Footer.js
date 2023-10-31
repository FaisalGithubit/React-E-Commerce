import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>

        <section className="Footer">
      

        <div className="footer section-p1">

            <div className="Shop">
                <h3>SHOP</h3>
                <h4>By Category</h4>
                <Link to='/'>Shop</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </div>

            <div className="Support">

                <h3>SUPPORT</h3>
                <a href="#">Store Locator</a>
                <a href="#">Order Status</a>

            </div>

            <div className="COMPANY">
                <h3>COMPANY</h3>
                <a href="#">Customer Services</a>
                <a href="#">Terms of Use</a>
                <a href="#">Privacy</a>
                <a href="#">Careers</a>
                <a href="#">CA Supply Chain Act</a>
                <a href="#">Sustainabillity</a>
                <a href="#">Affiliates</a>
                <a href="#">Recall Info</a>
            </div>

            <div className="Contact">
                <div className="Details">
                    <h4>Email</h4>
                    <Link to='/contact'>Contact Us</Link>
                </div>
                <div className="Details">
                    <h4>Phone No</h4>
                    <a href="">0311-4173186</a>
                </div>
                <div className="Details">
                    <h4>ADDRESS</h4>
                    <p>Pakistan</p>
                    <p>Lahore,TownShip</p>
                </div>
                <div className="Details">
                    <h4>Hours</h4>
                    <p>9:00AM To 11:00PM</p>
                </div>
            </div>

        </div>



        <div className="Location">

            <div className="S-Location">
                <h2>STORE LOCATOR</h2>
                <p>Find a Store Near You.</p>
                <button className="Find-Location">FIND A STORE</button>
            </div>

            <div classNameName="SocialMedia">
               <a href="#"><i className="fa-brands fa-facebook one"></i></a> 
                <a href="#"><i className="fa-brands fa-twitter two"></i></a>
                <a href="#"><i className="fa-brands fa-youtube three"></i></a>
                <a href="#"><i className="fa-brands fa-instagram four"></i></a>


            </div>

        </div>
       

    </section>     
    </div>
  )
}

export default Footer
