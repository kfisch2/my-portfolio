import React from "react";
import portrait from "../images/portrait2.jpg";

export default function About() {
  return (
    <section className="about">
      <div>
        {" "}
        <img className="portrait" src={portrait} alt="Portrait of Kayla"></img>
      </div>
      <div>
        Software developer who recently graduated from a coding bootcamp with a
        degree in mathematics and 10 years of experience in teaching. Working in
        the preschool setting taught me many valuable lessons that I hold dearly
        and can carry into my next career as a software engineer. I am
        passionate people, making web applications to enhance the user
        experience, and continuing to learn new technologies. Check out my
        previous projects in my portfolio, reach out to me on LinkedIn, or visit
        my github!
      </div>
    </section>
  );
}
