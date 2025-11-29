import React from "react";
import './About.css'

export default function About() {
  return (
    // <section id="about" className="section">
    //   <div className="container">
    //     <h2 className="mb-4">About Me</h2>
    //     <div className="row">
    //       <div className="col-lg-6">
    //         <p>
    //           I am a Full Stack Developer with 1.5 years of web development
    //           experience and currently working as a Full Stack Trainer. I teach
    //           Java, Web Development, React and Full Stack topics with real-time
    //           projects.
    //         </p>
    //         <ul>
    //           <li>Experience: 1.5 years</li>
    //           <li>Role: Full Stack Trainer at Edureka</li>
    //           <li>Focus: Practical projects, interviews, and live examples</li>
    //         </ul>
    //       </div>
    //       <div className="col-lg-6">
    //         <div className="card p-3">
    //           <h5 className="mb-2">Quick Info</h5>
    //           <p className="mb-1">
    //             <strong>Email:</strong> your.email@example.com
    //           </p>
    //           <p className="mb-1">
    //             <strong>Location:</strong> India
    //           </p>
    //           <p className="mb-0">
    //             <strong>Open to:</strong> Freelance & Training
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    
    <section id="about" className="py-5 about-section">
      <div className="container">
        <h2 className="section-title text-center mb-5">About Me</h2>
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <div className="about-text p-4 shadow-sm rounded-4">
              <p className="lead">
                I am a <strong>Full Stack Developer</strong> with{" "}
                <strong>2+ years</strong> of web development experience and
                currently working as a <strong>Java Full Stack Trainer</strong>. I
                teach Java, Web Development, React, and Full Stack topics with
                real-time projects.
              </p>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">
                  <strong>Experience:</strong> 1.5 years
                </li>
                <li className="mb-2">
                  <strong>Role:</strong>Java Full Stack Trainer at Login360
                </li>
                <li>
                  <strong>Focus:</strong> Practical projects, interviews, and
                  live examples
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="info-card p-4 shadow rounded-4">
              <h4 className="mb-3 fw-bold">Quick Info</h4>
              <p className="mb-2">
                <strong>Email:</strong> your.email@example.com
              </p>
              <p className="mb-2">
                <strong>Location:</strong> India
              </p>
              <p className="mb-0">
                <strong>Open to:</strong> Freelance & Training
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

   
    
  );
}
