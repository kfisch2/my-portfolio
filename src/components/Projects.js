import React from "react";

export default function Projects({ project }) {
  const { name, photo, deploy, github } = project;

  return (
    <>
      <img src={photo} className="d-block w-100" alt={name} />
      <div className="carousel-caption d-md-block ">
        <a
          href={deploy}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "white" }}
          className="links project-link"
        >
          Deployed
        </a>
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "white" }}
          className="links project-link"
        >
          Github
        </a>
      </div>
    </>
  );
}
