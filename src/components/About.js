import React from "react";
import portrait from "../images/portrait2.jpg";

export default function About() {
  return (
    <div className="about">
      <div>
        {" "}
        <img className="portrait" src={portrait} alt="Portrait of Kayla"></img>
      </div>
      <div>
        I'm a recent graduate from the University of Oregon Web Development
        Bootcamp. I have a degree in mathematics and 10 years of experience in
        teaching. Teaching MS/HS math and Japanese, I developed strong
        intepersonal skills that I believe can be beneficial to the tech field.
        Working in the preschool setting taught me many valuable lessons that I
        hold dearly. I am particularly passionate about people and making
        positive changes in education, therefore I would love to work for a
        company that strives towards improving and supporting education in the
        community. Check out my previous projects in my portfolio, reach out to me on
        LinkedIn, or visit my github.
      </div>
    </div>
  );
}
