import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

// controlled component: when the form data is maintained by the state of the component
// uncontrolled: When the data is retrieved, then submitted directly from the DOM

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    // email validator
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid");
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required`);
        } else {
          setErrorMessage("");
        }
      }
    }

    if (
      e.target.name === "message" ||
      e.target.name === "email" ||
      e.target.name === "name"
    ) {
      if (e.target.value.length === 0) {
        setErrorMessage("All fields are required");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    console.log("errorMessage", errorMessage);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  const { name, email, message } = formState;
  return (
    // <section className="contact-form">
    //   <h1>Contact me</h1>
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <input
    //         type="text"
    //         name="name"
    //         defaultValue={name}
    //         onBlur={handleChange}
    //         placeholder="Name"
    //       />
    //     </div>
    //     <div>
    //       <input
    //         type="email"
    //         name="email"
    //         placeholder="Email"
    //         defaultValue={email}
    //         onBlur={handleChange}
    //       />
    //     </div>
    //     <div>
    //       <textarea
    //         cols="5"
    //         rows="2"
    //         type="message"
    //         name="message"
    //         placeholder="Message"
    //         defaultValue={message}
    //         onBlur={handleChange}
    //       />
    //     </div>
    //     {errorMessage && (
    //       <div>
    //         <p className="error-text">{errorMessage}</p>
    //       </div>
    //     )}
    //     <button type="submit" id="submitBtn">
    //       Submit
    //     </button>
    //   </form>
    // </section>
    <h2 className="contact">
      <br></br>
      Email me <a href="mailto:kmlindsey24@gmail.com">here!</a>
      <br></br>Contact form coming soon.
    </h2>
  );
}
