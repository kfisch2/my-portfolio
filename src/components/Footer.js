import React from "react";
import linkedIn from "../images/linkedin.png";
import github from "../images/github.png";

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
  ];
  return (
    <footer>
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
    </footer>
  );
}
