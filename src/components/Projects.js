import React from "react";

export default function Projects({ project }) {
  const { name, description, photo, deploy, github } = project;

  return (
    <>
      <img src={photo} className="d-block w-100" alt={name} />
      <div className="carousel-caption d-none d-md-block">
        <h5>{name}</h5>
        <h6>{description}</h6>
      </div>
    </>
  );
}
