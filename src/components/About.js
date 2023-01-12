import React from "react";
import portrait from "../images/portrait2.jpg";

export default function About() {
  return (
    <div className="about">
      <img src={portrait} alt="Portrait of Kayla"></img>
      <div>
        I'm a recent graduate from the University of Oregon Web
        Development Bootcamp. I have a degree in mathematics, and experience in teaching. I spent nearly 10 years in education, teaching MS/HS math and Japanese, developing strong intepersonal skills that I believe can be beneficial to the tech field. Working in the preschool setting taught me many valuable lessons that I hold dearly. I am particularly passionate about people and making positive changes in education, therefore I would love to work for a company that strives towards improving and supporting education in the community. 
        
        {/* One of the things I valued most about my time as a preschool teacher was preparing the students not only for kindergarten, but for the world. That included teaching them about to show compassion and demonstrate empathy for situations and people we do not understand completely. It shaped my perspectives of humanity overall. Working during the pandemic and protests in downtown Portland was difficult, but it led to conversations that make me proud of how we handled such delicate topics.  */}
        
        Check out my previous projects in my portfolio, reach out to me on LinkedIn, or visit my github.
      </div>
    </div>
  );
}
