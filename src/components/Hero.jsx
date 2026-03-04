import React from "react";
import photo from "../assets/photo.jpeg";
import photo2 from "../assets/photo2.jpeg";
import photo3 from "../assets/photo3.jpeg";
import photo4 from "../assets/photo4.jpeg";
import './Hero.css'

export default function Hero() {
  return (
    // <section className="hero py-5">
    //   <div className="container d-flex align-items-center gap-4">
    //     <div className="row w-100">
    //       <div className="col-md-7 d-flex flex-column justify-content-center">
    //         <h1 className="display-5 fw-bold">
    //           Hi, I'm Mohamed Ismail<span className="text-primary">Fullstack Developer</span>
    //         </h1>
    //         <p className="lead text-muted">
    //           Java Full Stack Developer & Trainer — Building modern web apps with
    //           React, Java & MySQL.
    //         </p>
    //         <div className="mt-4">
    //           <a href="tel:+918124009928" className="btn btn-primary me-2">
    //             Contact Me
    //           </a>
    //           <a href="/resume.pdf" className="btn btn-outline-primary">
    //             Download Resume
    //           </a>
    //         </div>
    //       </div>
    //       <div className="col-md-5 d-flex justify-content-center">
    //         <div className="hero-card p-4 text-center">
    //           <img
    //             src={photo4}
    //             style={{ objectFit: "cover", position: "top" }}
    //             alt="Profile"
    //             className="rounded-circle mb-3 profile-img"
    //           />
    //           <h5 className="mb-0">Full Stack Trainer</h5>
    //           {/* <small className="text-muted">Edureka</small> */}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>


    // v.2
    <section className="hero-section d-flex align-items-center">
  <div className="container">
    <div className="row align-items-center">

      {/* LEFT CONTENT */}
      <div className="col-lg-7 hero-text">
        <h1 className="fw-bold hero-title">
          Hi, I'm <span className="text-gradient">Mohamed Ismail</span>
        </h1>

        <h3 className="mb-3 fw-semibold text-dark">
          Full Stack Developer & Trainer
        </h3>

        <p className="lead text-muted">
          Building modern, scalable web applications using 
          <strong> React</strong>, <strong> Spring Boot</strong> & <strong>MySQL</strong>.
        </p>

        <div className="mt-4 d-flex gap-3">
          <a href="tel:+918124009928" className="btn btn-primary btn-custom">
            Contact Me
          </a>

          <a href="/resume.pdf" className="btn btn-outline-primary btn-custom-outline">
            Download Resume
          </a>
        </div>
      </div>

      {/* RIGHT CARD */}
      {/* <div className="col-lg-5 text-center mt-5 mt-lg-0">
        <div className="profile-card">
          <img
            src={photo4}
            alt="Profile"
            className="profile-img"
          />
          <h5 className="mt-3 mb-1">Full Stack Trainer</h5>
          <small className="text-muted">Java | React | Spring Boot</small>
        </div>
      </div> */}
       <div className="col-lg-5 text-center mt-5 mt-lg-0">
        <div className="image-card-wrapper">
          <div className="image-card">
            <img
              src={photo4}
              alt="Profile"
              className="card-profile-img"
            />
            <div className="card-overlay">
              <h5 className="mb-1">Full Stack Trainer</h5>
              <small>Java | React | Spring Boot</small>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</section>
  );
}
