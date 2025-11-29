import React from "react";


const ProjectCard = ({title, desc, stack, demo='#', code='#'}) => (
<div className="col-md-6">
<div className="card p-3 mb-4">
<h5>{title}</h5>
<p className="text-muted">{desc}</p>
<div className="mb-2">
{stack.map(s => <span key={s} className="badge bg-secondary me-1">{s}</span>)}
</div>
<div>
<a href={code} className="btn btn-sm btn-outline-primary me-2">Code</a>
<a href={demo} className="btn btn-sm btn-primary">Live Demo</a>
</div>
</div>
</div>
);


export default function Projects() {
const projects = [
{title: 'CRM Web App', desc: 'React + Node.js (or Spring Boot) - Student & Trainer management', stack: ['React','Node','MySQL']},
{title: 'Student Management System', desc: 'React + Express + MongoDB', stack: ['React','Express','MongoDB']},
{title: 'PHP Backend App', desc: 'Simple API using PHP + MongoDB', stack: ['PHP','MongoDB']},
{title: 'Portfolio Website', desc: 'This portfolio built with React + Bootstrap', stack: ['React','Bootstrap']}
];


return (
<section id="projects" className="section">
<div className="container">
<h2 className="mb-4">Projects</h2>
<div className="row">
{projects.map(p => <ProjectCard key={p.title} {...p} />)}
</div>
</div>
</section>
);
}