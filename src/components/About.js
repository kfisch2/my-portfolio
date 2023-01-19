import React from "react";
import portrait from "../images/portrait2.jpg";

export default function About() {
  return (
    <section className="about">
      <div className="portrait">
        {" "}
        <img src={portrait} alt="Portrait of Kayla"></img>
      </div>
      <div className="about-div">
        I'm Kayla, a web developer who recently graduated from a coding bootcamp
        with a degree in mathematics and 10 years of experience in teaching. The
        bootcamp was an incredible experience and I miss working with my cohort.
        I look forward to jumping back into the collaborative environment! I am
        currently a teaching assistant at the bootcamp which has been helpful in
        solidifying my knolwedge and understanding of full-stack web development
        as it requries me to break down technical concepts into simpler ideas.
        <br></br>
        <br></br>
        Learning math and studying Japanese for several years helped prepare me
        for what is required and useful in coding. Being passionate about the
        approaches to problem-solving learning a new language made learning to
        code an exciting experience for me. I'm eager to begin utilizing these
        skills in my career!
        <br></br>
        <br></br>
        Before joining the bootcamp, I spent four years teaching older preschool
        students, preparing them for kindergarten. Working in the preschool
        setting taught me many valuable lessons that I hold dearly and will
        carry as a software engineer. Leaving the education field was difficult
        as I am passionate about pedagogy and the future for students' success.
        It is ultimately my dream to work for a company that values education
        and contributes to the success of their students and teachers.
      </div>
    </section>
  );
}
