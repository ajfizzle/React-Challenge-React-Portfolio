import React from "react";
import { MdFoundation } from "react-icons/md";
import {
  GrTechnology,
  GrDocumentPerformance,
  GrDownload,
} from "react-icons/gr";
import myResume from "../../assets/files/Isikhuemwen Azeta - Resume.pdf";
function Resume() {
  return (
    <div>
<section id="Resume" className="download-intro">

<div className="resume-header">

<div className="stack-intro">
    <h2 className="section-title">Tech Stack</h2>
</div>

<div className="resume-download">
  <a href={myResume} download="Isikhuemwen Azeta - Resume.pdf"
className="download-link"> 
<GrDownload /> Professional Resume 
</a>
</div>

</div>
<p className="stack-description">
Below is a collection of technologies, frameworks and tools I explored and applied throughout my coding bootcamp journey.
Hands-on projects gave me the opportunity to strengthen my development skills, solve practical challenges and gain experience designing, building, testing and troubleshooting front-end and back-end applications.
</p>
</section>

      <section id="home-page-body" className="resume-body">
        <div className="article column1">
          <h3 className="column-title">Front-End</h3>
          <ul className="column-text">
            <li>
              <MdFoundation /> HTML5
            </li>
            <li>
              <MdFoundation /> CSS
            </li>
            <li>
              <MdFoundation /> JavaScript
            </li>
            <li>
              <MdFoundation /> APIs
            </li>
            <li>
              <MdFoundation /> Bootstrap
            </li>
            <li>
              <MdFoundation /> GIT
            </li>
          </ul>
        </div>

        <div className="article column2">
          <h3 className="column-title">Back-End</h3>
          <ul className="column-text">
            <li>
              <GrTechnology /> Node.js
            </li>
            <li>
              <GrTechnology /> Jest
            </li>
            <li>
              <GrTechnology /> Express.js
            </li>
            <li>
              <GrTechnology /> MySQL
            </li>
            <li>
              <GrTechnology /> Sequelize
            </li>
            <li>
              <GrTechnology /> ORM
            </li>
            <li>
              <GrTechnology /> MVC
            </li>
          </ul>
        </div>

        <div className="article column3">
          <h3 className="column-title">Performance</h3>
          <ul className="column-text">
            <li>
              <GrDocumentPerformance /> NoSQL
            </li>
            <li>
              <GrDocumentPerformance /> PWA
            </li>
            <li>
              <GrDocumentPerformance /> MongoDB
            </li>
            <li>
              <GrDocumentPerformance /> Mongoose
            </li>
            <li>
              <GrDocumentPerformance /> React
            </li>
            <li>
              <GrDocumentPerformance /> MERN
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Resume;
