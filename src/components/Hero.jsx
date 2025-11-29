import React from "react";
import photo from "../assets/photo.jpeg";
import photo2 from "../assets/photo2.jpeg";
import photo3 from "../assets/photo3.jpeg";
import photo4 from "../assets/photo4.jpeg";

export default function Hero() {
  return (
    <section className="hero py-5">
      <div className="container d-flex align-items-center gap-4">
        <div className="row w-100">
          <div className="col-md-7 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">
              Hi, I'm Mohamed <span className="text-primary">Fullstack Developer</span>
            </h1>
            <p className="lead text-muted">
              Java Full Stack Developer & Trainer — Building modern web apps with
              React, Java & MySQL.
            </p>
            <div className="mt-4">
              <a href="tel:+918124009928" className="btn btn-primary me-2">
                Contact Me
              </a>
              <a href="/resume.pdf" className="btn btn-outline-primary">
                Download Resume
              </a>
            </div>
          </div>
          <div className="col-md-5 d-flex justify-content-center">
            <div className="hero-card p-4 text-center">
              <img
                src={photo4}
                style={{ objectFit: "cover", position: "top" }}
                alt="Profile"
                className="rounded-circle mb-3 profile-img"
              />
              <h5 className="mb-0">Full Stack Trainer</h5>
              {/* <small className="text-muted">Edureka</small> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
