import React from "react";
import portrait from "../images/portrait.jpg";

export default function About() {
  return (
    <div className="about">
      <img src={portrait} alt="Portrait of Kayla"></img>
      <div>
        I have a background in mathematics, Japanese, and teaching. Strong
        desire to work in team-driven environment, learn new technologies, and
        advance to a leadership position as I gain experience. I am actively
        buildilng/polishing this portfolio while perusing the job market to see
        what's out there. Thank you for stopping by!
      </div>
    </div>
  );
}
