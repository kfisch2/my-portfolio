import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { validateEmail } from "../utils/helpers";

// controlled component: when the form data is maintained by the state of the component
// uncontrolled: When the data is retrieved, then submitted directly from the DOM
const Contact = () => {
  const sendEmail = (e) => {
    const email = document.getElementById("email").value;
    const userName = document.getElementById("from_name").value;
    const message = document.getElementById("message").value;
    e.preventDefault();

    if (validateEmail(email) && userName && message) {
      emailjs.send(
        "service_ihr3ehe",
        "template_mfvttv9",
        {
          userName,
          message,
          email,
        },
        "iA7DYUW1FQPnTZgkM"
      );
    } else {
      alert("Please check that are fields are filled in and email is valid")
    }
  };

  return (
    <section className="contact-section form-wrapper">
      {/* contact form */}{" "}
      <form className="form">
        <h3 className="contact-me">Contact me</h3>
        <p type="Name:">
          <input id="from_name" placeholder="Your name"></input>
        </p>
        <p type="Email:">
          <input id="email" placeholder="Your email"></input>
        </p>
        <p type="Message:">
          <textarea id="message" placeholder="Message" cols={50}></textarea>
        </p>
        <button onClick={sendEmail}>Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
