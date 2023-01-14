import React, { useState } from "react";

// controlled component: when the form data is maintained by the state of the component
// uncontrolled: When the data is retrieved, then submitted directly from the DOM
const Contact = () => {
  return (
    <section className="contact-section">
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
    </section>
  );
};

export default Contact;
