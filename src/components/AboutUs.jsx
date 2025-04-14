import React from 'react'

const AboutUs = () => {
  return (
    <>

      <div className="container-xxl bg-white p-0">

        <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
          <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
          <a href="index.html" className="navbar-brand">
            <h1 className="m-0 text-primary"><i className="fa fa-book-reader me-3"></i>Kider</h1>
          </a>
          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto">
              <a href="index.html" className="nav-item nav-link">Home</a>
              <a href="about.html" className="nav-item nav-link active">About Us</a>
              <a href="classNamees.html" className="nav-item nav-link">classNamees</a>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                <div className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
                  <a href="facility.html" className="dropdown-item">School Facilities</a>
                  <a href="team.html" className="dropdown-item">Popular Teachers</a>
                  <a href="call-to-action.html" className="dropdown-item">Become A Teachers</a>
                  <a href="appointment.html" className="dropdown-item">Make Appointment</a>
                  <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                  <a href="404.html" className="dropdown-item">404 Error</a>
                </div>
              </div>
              <a href="contact.html" className="nav-item nav-link">Contact Us</a>
            </div>
            <a href="" className="btn btn-primary rounded-pill px-3 d-none d-lg-block">Join Us<i className="fa fa-arrow-right ms-3"></i></a>
          </div>
        </nav>

        <div className="container-xxl py-5 page-header position-relative mb-5">
          <div className="container py-5">
            <h1 className="display-2 text-white animated slideInDown mb-4">About Us</h1>
            <nav aria-label="breadcrumb animated slideInDown">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">About Us</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <h1 className="mb-4">Learn More About Our Work And Our Cultural Activities</h1>
                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos, ipsum labore duo duo sit no sea diam. Et dolor et kasd ea. Eirmod diam at dolor est vero nonumy magna.</p>
                <div className="row g-4 align-items-center">
                  <div className="col-sm-6">
                    <a className="btn btn-primary rounded-pill py-3 px-5" href="">Read More</a>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <img className="rounded-circle flex-shrink-0" src="ui/img/user.jpg" alt="" style={{ width: "45px", height: "45px" }} />
                      <div className="ms-3">
                        <h6 className="text-primary mb-1">Jhon Doe</h6>
                        <small>CEO & Founder</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
                <div className="row">
                  <div className="col-12 text-center">
                    <img className="img-fluid w-75 rounded-circle bg-light p-3" src="ui/img/about-1.jpg" alt="" />
                  </div>
                  <div className="col-6 text-start" style={{ marginTop: "-150px" }}>
                    <img className="img-fluid w-100 rounded-circle bg-light p-3" src="ui/img/about-2.jpg" alt="" />
                  </div>
                  <div className="col-6 text-end" style={{ marginTop: "-150px" }}>
                    <img className="img-fluid w-100 rounded-circle bg-light p-3" src="ui/img/about-3.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-xxl py-5">
          <div className="container">
            <div className="bg-light rounded">
              <div className="row g-0">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s" style={{ minHeight: "400px" }} >
                  <div className="position-relative h-100">
                    <img className="position-absolute w-100 h-100 rounded" src="ui/img/call-to-action.jpg" style={{ objectFit: "cover" }} />
                  </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                  <div className="h-100 d-flex flex-column justify-content-center p-5">
                    <h1 className="mb-4">Become A Teacher</h1>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
                      Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                    </p>
                    <a className="btn btn-primary py-3 px-5" href="">Get Started Now<i className="fa fa-arrow-right ms-2"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
              <h1 className="mb-3">Popular Teachers</h1>
              <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit
                eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            </div>
            <div className="row g-4">
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="team-item position-relative">
                  <img className="img-fluid rounded-circle w-75" src="ui/img/team-1.jpg" alt="" />
                  <div className="team-text">
                    <h3>Full Name</h3>
                    <p>Designation</p>
                    <div className="d-flex align-items-center">
                      <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                      <a className="btn btn-square btn-primary  mx-1" href=""><i className="fab fa-twitter"></i></a>
                      <a className="btn btn-square btn-primary  mx-1" href=""><i className="fab fa-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="team-item position-relative">
                  <img className="img-fluid rounded-circle w-75" src="ui/img/team-2.jpg" alt="" />
                  <div className="team-text">
                    <h3>Full Name</h3>
                    <p>Designation</p>
                    <div className="d-flex align-items-center">
                      <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                      <a className="btn btn-square btn-primary  mx-1" href=""><i className="fab fa-twitter"></i></a>
                      <a className="btn btn-square btn-primary  mx-1" href=""><i className="fab fa-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="team-item position-relative">
                  <img className="img-fluid rounded-circle w-75" src="ui/img/team-3.jpg" alt="" />
                  <div className="team-text">
                    <h3>Full Name</h3>
                    <p>Designation</p>
                    <div className="d-flex align-items-center">
                      <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                      <a className="btn btn-square btn-primary  mx-1" href=""><i className="fab fa-twitter"></i></a>
                      <a className="btn btn-square btn-primary  mx-1" href=""><i className="fab fa-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-3 col-md-6">
                <h3 className="text-white mb-4">Get In Touch</h3>
                <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                <div className="d-flex pt-2">
                  <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                  <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <h3 className="text-white mb-4">Quick Links</h3>
                <a className="btn btn-link text-white-50" href="">About Us</a>
                <a className="btn btn-link text-white-50" href="">Contact Us</a>
                <a className="btn btn-link text-white-50" href="">Our Services</a>
                <a className="btn btn-link text-white-50" href="">Privacy Policy</a>
                <a className="btn btn-link text-white-50" href="">Terms & Condition</a>
              </div>
              <div className="col-lg-3 col-md-6">
                <h3 className="text-white mb-4">Photo Gallery</h3>
                <div className="row g-2 pt-2">
                  <div className="col-4">
                    <img className="img-fluid rounded bg-light p-1" src="ui/img/classNamees-1.jpg" alt="" />
                  </div>
                  <div className="col-4">
                    <img className="img-fluid rounded bg-light p-1" src="ui/img/classNamees-2.jpg" alt="" />
                  </div>
                  <div className="col-4">
                    <img className="img-fluid rounded bg-light p-1" src="ui/img/classNamees-3.jpg" alt="" />
                  </div>
                  <div className="col-4">
                    <img className="img-fluid rounded bg-light p-1" src="ui/img/classNamees-4.jpg" alt="" />
                  </div>
                  <div className="col-4">
                    <img className="img-fluid rounded bg-light p-1" src="ui/img/classNamees-5.jpg" alt="" />
                  </div>
                  <div className="col-4">
                    <img className="img-fluid rounded bg-light p-1" src="ui/img/classNamees-6.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <h3 className="text-white mb-4">Newsletter</h3>
                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
                  <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                  <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                  &copy; <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.

                  Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                </div>
                <div className="col-md-6 text-center text-md-end">
                  <div className="footer-menu">
                    <a href="">Home</a>
                    <a href="">Cookies</a>
                    <a href="">Help</a>
                    <a href="">FQAs</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
      </div>
    </>
  )
}

export default AboutUs