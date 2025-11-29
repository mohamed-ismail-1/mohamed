import React from "react";
import './Skills.css'

// const SkillBadge = ({ text }) => (
//   <span
//     className="badge bg-light text-dark border me-2 mb-2"
//     style={{ fontSize: "0.9rem" }}
//   >
//     {text}
//   </span>
// );

// export default function Skills() {
//   return (
//     <section id="skills" className="section bg-light">
//       <div className="container">
//         <h2 className="mb-4">Skills</h2>
//         <div className="mb-3">
//           <h5>Frontend</h5>
//           <div className="d-flex flex-wrap">
//             <SkillBadge text="HTML5" />
//             <SkillBadge text="CSS3" />
//             <SkillBadge text="Bootstrap" />
//             <SkillBadge text="JavaScript" />
//             <SkillBadge text="React JS" />
//           </div>
//         </div>

//         <div className="mb-3">
//           <h5>Backend</h5>
//           <div className="d-flex flex-wrap">
//             <SkillBadge text="Node.js" />
//             <SkillBadge text="Express.js" />
//             <SkillBadge text="Java" />
//             <SkillBadge text="MySQL" />
//             <SkillBadge text="PHP" />
//             <SkillBadge text="MongoDB" />
//           </div>
//         </div>

//         <div>
//           <h5>Tools</h5>
//           <div className="d-flex flex-wrap">
//             <SkillBadge text="Git" />
//             <SkillBadge text="GitHub" />
//             <SkillBadge text="Postman" />
//             <SkillBadge text="VS Code" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

const SkillBadge = ({ text }) => (
  <span className="skill-badge">{text}</span>
);

export default function Skills() {
  return (
    <section id="skills" className="skills-section py-5">
      <div className="container">

        <h2 className="text-center mb-5 section-title">Skills</h2>

        <div className="row g-4">

          <div className="col-lg-4">
            <div className="skill-card shadow-lg p-4 rounded-4">
              <h5 className="fw-bold mb-3">Frontend</h5>
              <div className="d-flex flex-wrap">
                <SkillBadge text="HTML5" />
                <SkillBadge text="CSS3" />
                <SkillBadge text="Bootstrap" />
                <SkillBadge text="JavaScript" />
                <SkillBadge text="React JS" />
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="skill-card shadow-lg p-4 rounded-4">
              <h5 className="fw-bold mb-3">Backend</h5>
              <div className="d-flex flex-wrap">
                
                
                <SkillBadge text="Java" />
                <SkillBadge text="Springboot" />
                <SkillBadge text="MySQL" />
                
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="skill-card shadow-lg p-4 rounded-4">
              <h5 className="fw-bold mb-3">Tools</h5>
              <div className="d-flex flex-wrap">
                <SkillBadge text="Git" />
                <SkillBadge text="GitHub" />
                <SkillBadge text="Postman" />
                <SkillBadge text="VS Code" />
                <SkillBadge text="STS" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

