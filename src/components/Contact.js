import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

// controlled component: when the form data is maintained by the state of the component
// uncontrolled: When the data is retrieved, then submitted directly from the DOM
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    const email = document.getElementById("email").value;
    const userName = document.getElementById("from_name_input").value;
    const message = document.getElementById("message").value;
    e.preventDefault();

    emailjs.send("service_ihr3ehe", "template_mfvttv9", {
      userName,
      message,
      email,
    }, "iA7DYUW1FQPnTZgkM");
  };

  return (
    <section className="contact-section">
      {" "}
      {/* contact form */}
      <div className="contact-form">
        <form id="form" ref={form} onSubmit={sendEmail}>
          <label form="from_name">Your name: </label>
          <input
            type="text"
            id="from_name_input"
            name="from_name"
            placeholder="Your name..."
          ></input>

          <label form="email">Your email: </label>
          <input type="text" id="email" placeholder="Your email..."></input>

          <label form="message">Message: </label>
          <textarea
            type="text"
            id="message"
            name="message"
            placeholder="Your message..."
          ></textarea>

          <button type="submit" value="Send" onClick={sendEmail}>
            Send
          </button>
        </form>
      </div>
      <div>
        {" "}
        <h3 className="contact">
          Email me at{" "}
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
      </div>
    </section>
  );
};

export default Contact;
