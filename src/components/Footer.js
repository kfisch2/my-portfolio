import React from "react";
import linkedIn from "../images/In-White-26.png";
import github from "../images/github-mark-white.png";
import email from "../images/mail.png";

export default function Footer(props) {
  const urls = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/kayla-fischer-679200109/",
      logo: linkedIn,
    },
    {
      name: "Github",
      link: "https://www.github.com/kfisch2",
      logo: github,
    },
    {
      name: "email",
      link: "mailto:kmlindsey24@gmail.com",
      logo: email,
    },
  ];
  return (
    <footer>
      {" "}
      <div className="footer-name">
        <h1>Kayla Fischer</h1>
      </div>
      <div className="icons">
        {urls.map((url) => (
          <a
            key={url.name}
            href={url.link}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
            className="social"
          >
            <img className="logo" src={url.logo}></img>
          </a>
        ))}
      </div>
    </footer>
  );
}
