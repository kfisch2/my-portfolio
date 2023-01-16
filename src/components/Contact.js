import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

// controlled component: when the form data is maintained by the state of the component
// uncontrolled: When the data is retrieved, then submitted directly from the DOM
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    const email = document.getElementById("email").value;
    const userName = document.getElementById("from_name").value;
    const message = document.getElementById("message").value;
    e.preventDefault();

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
  };

  return (
    <section className="contact-section">
      {" "}
      <div className="contact-info">
        {" "}
        <h3>
          Email me:{" "}
          <a href="mailto:kmlindsey24@gmail.com">kmlindsey24@gmail.com</a>
        </h3>
        <h3>
          Connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/kayla-fischer-679200109/"
            target={"_blank"}
          >
            LinkedIn
          </a>
        </h3>
        <h3>
          Fill out this form and I will get back to you as soon as possible!
        </h3>
      </div>
      {/* contact form */}{" "}
      <div className="form-wrapper">
        <form class="form">
          <h3 className="contact-me">Contact me</h3>
          <p type="Name:">
            <input id="from_name" placeholder="Your name"></input>
          </p>
          <p type="Email:">
            <input id="email" placeholder="Your email"></input>
          </p>
          <p type="Message:">
            <input id="message" placeholder="Message"></input>
          </p>
          <button>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
