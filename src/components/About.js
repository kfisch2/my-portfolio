import React from "react";
import portrait from "../images/portrait.jpg";

export default function About() {
  return (
    <div className="about">
      <img src={portrait} alt="Portrait of Kayla"></img>
      <div>
        I'm Kayla, a recent graduate from the University of Oregon Web
        Development Bootcamp. I have a background in mathematics, Japanese, and
        teaching. I spent nearly 10 years in education, developing strong intepersonal 
        skills that I believe can be beneficial to the tech field. I am excited about 
        working with a variety of people with different backgrounds and skill sets.
        Check out my previous projects in my portfolio, reach out to
        me on LinkedIn, or visit my github. Currently exploring software engineer 
        and web development jobs!
      </div>
    </div>
  );
}
