import React from "react";


const SkillBadge = ({text}) => (
<span className="badge bg-light text-dark border me-2 mb-2" style={{fontSize: '0.9rem'}}>{text}</span>
);


export default function Skills() {
return (
<section id="skills" className="section bg-light">
<div className="container">
<h2 className="mb-4">Skills</h2>
<div className="mb-3">
<h5>Frontend</h5>
<div className="d-flex flex-wrap">
<SkillBadge text="HTML5" />
<SkillBadge text="CSS3" />
<SkillBadge text="Bootstrap" />
<SkillBadge text="JavaScript" />
<SkillBadge text="React JS" />
</div>
</div>


<div className="mb-3">
<h5>Backend</h5>
<div className="d-flex flex-wrap">
<SkillBadge text="Node.js" />
<SkillBadge text="Express.js" />
<SkillBadge text="Java" />
<SkillBadge text="MySQL" />
<SkillBadge text="PHP" />
<SkillBadge text="MongoDB" />
</div>
</div>


<div>
<h5>Tools</h5>
<div className="d-flex flex-wrap">
<SkillBadge text="Git" />
<SkillBadge text="GitHub" />
<SkillBadge text="Postman" />
<SkillBadge text="VS Code" />
</div>
</div>
</div>
</section>
);
}