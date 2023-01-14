import React from "react";
import resume from "../KaylaFischerResume.pdf";

export default function Resume() {
  return (
    <div className="resume-container">
      <h3 className="resume">
        <a href={resume} target="_blank" download rel="noreferrer noopener">
          Download my resume
        </a>
      </h3>
      <div className="skills-container">
        <div className="skills">
          <h3>Front-end</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>jQuery</li>
            <li>Responsive-design</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Materialize</li>
            <li>Regex</li>
          </ul>
        </div>
        <div className="ul-separator"></div>
        <div className="skills">
          <h3>Back-end</h3>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL</li>
            <li className="item-5">MongoDB</li>
            <li className="item-6">REST</li>
            <li className="item-7">GraphQL</li>
            <li className="item-8">Firebase</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
