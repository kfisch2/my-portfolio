import React, { useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { validateEmail } from "../utils/helpers";

// controlled component: when the form data is maintained by the state of the component
// uncontrolled: When the data is retrieved, then submitted directly from the DOM
const Contact = () => {
  const handleClose = () => {
    setShow(false);
    window.location.reload();
  };
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);

  const sendEmail = (e) => {
    const email = document.getElementById("email").value;
    const userName = document.getElementById("from_name").value;
    const message = document.getElementById("message").value;

    if (validateEmail(email) && userName && message) {
      handleShow();
      e.preventDefault();
        emailjs.send(
        "service_ihr3ehe",
        "template_mfvttv9",
         {
           from_name: userName,
           message: message,
           reply_to: email,
         },
         "iA7DYUW1FQPnTZgkM"
       );
    } else {
      e.preventDefault();
      alert("Please check that are fields are filled in and email is valid");
    }
  };

  return (
    <>
      <Modal className="modal" show={show} onHide={handleClose} centered>
        <Modal.Body className="modal-body">
          Your message has been sent! I'll respond as soon as I can.{" "}
        </Modal.Body>
        <Button variant="light" onClick={handleClose}>
          Close
        </Button>
      </Modal>{" "}
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
          <p>All fields are required</p>
          <button onClick={sendEmail}>Send Message</button>
        </form>
      </section>
    </>
  );
};

export default Contact;
