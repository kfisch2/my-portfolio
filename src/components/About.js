import React from "react";
import portrait from "../images/portrait.jpg";

export default function About() {
  return (
    <div className="about">
      <img src={portrait} alt="Portrait of Kayla"></img>
      <div>
        I'm Kayla, a recent graduate from the University of Oregon Web
        Development Bootcamp. I have a background in mathematics, Japanese, and
        teaching. Check out my previous projects in my portfolio, reach out to
        me on LinkedIn, or check out my code on github!
      </div>
    </div>
  );
}
