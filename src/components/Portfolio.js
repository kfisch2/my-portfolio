import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Projects from "./Projects";
import dose from "../images/dose.png";
import rIr from "../images/rhythminregion.png";
import genu from "../images/genu.png";

export default function Portfolio() {
  const projects = [
    {
      id: 0,
      name: "Genu",
      description: "FIRST PROJECT",
      photo: genu,
      // deploy: "https://codetrip-33a81.web.app/",
      // github: "",
    },
    {
      id: 1,
      name: "Rhythm In Region",
      description: "SECOND PROJECT",
      photo: rIr,
      // deploy: "",
      // github: "",
    },
    {
      id: 2,
      name: "dose",
      description: "THIRD PROJECT",
      photo: dose,
      // deploy: "",
      // github: "",
    },
  ];

  return (
    <Carousel>
      {projects.map((project, i) => {
        return (
          <Carousel.Item key={project.name} className={"carosel-item"}>
            <Projects project={project} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
