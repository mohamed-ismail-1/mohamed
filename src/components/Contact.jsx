import React from "react";


export default function Contact() {
return (
<section id="contact" className="section bg-light">
<div className="container">
<h2 className="mb-4">Contact</h2>
<div className="row">
<div className="col-md-6">
<form className="needs-validation" noValidate>
<div className="mb-2">
<label className="form-label">Name</label>
<input className="form-control" type="text" required />
</div>
<div className="mb-2">
<label className="form-label">Email</label>
<input className="form-control" type="email" required />
</div>
<div className="mb-3">
<label className="form-label">Message</label>
<textarea className="form-control" rows="5" required></textarea>
</div>
<button className="btn btn-primary">Send Message</button>
</form>
</div>
<div className="col-md-6">
<div className="card p-3">
<h5>Get in touch</h5>
<p className="mb-1"><strong>Email:</strong> your.email@example.com</p>
<p className="mb-1"><strong>Phone:</strong> +91 98765 43210</p>
<p className="mb-0"><strong>LinkedIn:</strong> <a href="#">linkedin.com/in/your</a></p>
</div>
</div>
</div>
</div>
</section>
);
}