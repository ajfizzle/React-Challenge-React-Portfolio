import React from "react";
import { MdFoundation } from "react-icons/md";
import {
  GrTechnology,
  GrDocumentPerformance,
  GrDownload,
} from "react-icons/gr";
import myResume from "../../assets/files/Azeta Joel Isikhuemwen - Resume.pdf";
function Resume() {
  return (
    <div>
<section id="Resume" className="download-intro">

<div className="resume-header">

<div className="stack-intro">
<h2 className="section-title">Tech Stack</h2>

<p>
Below is a collection of technologies, frameworks, and tools I gained experience with throughout my coding bootcamp journey and hands-on development projects.
</p>
</div>

<div className="resume-download">
<a href={myResume} 
download="Azeta Joel Isikhuemwen - Resume.pdf"
className="download-link"
> 
<GrDownload /><h4>Professional Resume</h4> 
</a>
</div>

</div>

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
