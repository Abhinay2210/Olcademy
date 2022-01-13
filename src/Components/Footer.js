import React from 'react'
import './footer.css';

export const Footer = () => {
    return (
        <>
        <footer className="footer">
      <div className="footer-left col-md-4 col-sm-6">
        <div className="icons">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-linkedin"></i></a>
          <a href="#"><i className="fa fa-google-plus"></i></a>
          <a href="#"><i className="fa fa-instagram"></i></a>
        </div>
      </div>
      <div className="footer-center col-md-4 col-sm-6">
        <div>
          <i className="fa fa-map-marker"></i>
          <p><span> Shivajinagar</span> Pune, India</p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p>(+91) 9518337104</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p><a href="#"> olcademy@gmail.com</a></p>
        </div>
      </div>
      <div className="footer-right col-md-4 col-sm-6">
        <h2><span>Olcademy</span></h2>
        <p className="menu">
          <a href="#"> Home</a>|<a href="#"> About Us</a> |
          <a href="#"> Contact Us</a>
        </p>
        <p className="name">Olcademy &copy; 2021</p>
      </div>
    </footer>
       

            
        </>
    )
}
