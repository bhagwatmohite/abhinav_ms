import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
        <a href="index.html" className="navbar-brand">
          <h1 className="m-0 text-primary"><i className="fa fa-book-reader me-5"></i>Abhinav</h1>
        </a>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto">
            <Link to="/" className="nav-item nav-link active">Home</Link>
            <Link to="/aboutus" className="nav-item nav-link">About Us</Link>
            <a href="classNamees.html" className="nav-item nav-link">classes</a>
            {/* <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                <div className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
                  <a href="facility.html" className="dropdown-item">School Facilities</a>
                  <a href="team.html" className="dropdown-item">Popular Teachers</a>
                  <a href="call-to-action.html" className="dropdown-item">Become A Teachers</a>
                  <a href="appointment.html" className="dropdown-item">Make Appointment</a>
                  <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                  <a href="404.html" className="dropdown-item">404 Error</a>
                </div>
              </div> */}
            <a href="contact.html" className="nav-item nav-link">Contact Us</a>
          </div>
          {/* <a href="" className="btn btn-primary rounded-pill px-3 d-none d-lg-block">Join Us<i className="fa fa-arrow-right ms-3"></i></a> */}
        </div>
      </nav>
    </>
  )
}

export default Navbar