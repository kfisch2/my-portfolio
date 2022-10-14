import React from "react";

export default function Projects({ project }) {
  const { name, photo, deploy, github } = project;

  return (
    <>
      <img src={photo} className="d-block w-100" alt={name} />
      <div className="carousel-caption d-none d-md-block">
        <a
          href={deploy}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "white" }}
          className="links"
        >
          Deployed
        </a>
        <br></br>
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "white" }}
          className="links"
        >
          Github
        </a>
      </div>
    </>
  );
}
