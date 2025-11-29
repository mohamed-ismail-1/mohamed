import React from "react";


export default function About() {
return (
<section id="about" className="section">
<div className="container">
<h2 className="mb-4">About Me</h2>
<div className="row">
<div className="col-lg-6">
<p>I am a Full Stack Developer with 1.5 years of web development experience and currently working as a Full Stack Trainer. I teach Java, Web Development, React and Full Stack topics with real-time projects.</p>
<ul>
<li>Experience: 1.5 years</li>
<li>Role: Full Stack Trainer at Edureka</li>
<li>Focus: Practical projects, interviews, and live examples</li>
</ul>
</div>
<div className="col-lg-6">
<div className="card p-3">
<h5 className="mb-2">Quick Info</h5>
<p className="mb-1"><strong>Email:</strong> your.email@example.com</p>
<p className="mb-1"><strong>Location:</strong> India</p>
<p className="mb-0"><strong>Open to:</strong> Freelance & Training</p>
</div>
</div>
</div>
</div>
</section>
);
}