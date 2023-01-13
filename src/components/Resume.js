import React from "react";
import resume from "../KaylaFischerResume.pdf"

export default function Resume() {
  return (

    <>  
    <h2 className="resume"><a href={resume} target="_blank" download rel="noreferrer noopener">Download my resume</a></h2>
    <div className="experience">
      <div></div>
      <div>
        <h3>Front-end</h3>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript/jQuery</li>
        <li>Responsive-design</li>
        <li>React</li>
        <li>Bootstrap</li>
        <li>Materialize</li>
      </div>

      <div>
        <h3>Back-end</h3>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </div>  
      <div></div> 
    </div></>
  
  );
}
