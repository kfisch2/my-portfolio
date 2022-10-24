import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Projects from "./Projects";
import dose from "../images/dose.png";
import rIr from "../images/rIr.png";
import genu from "../images/genu.png";
import nerdherd from "../images/nerdherd.png";

export default function Portfolio() {
  const projects = [
    {
      id: 0,
      name: "Genu",
      description: "FIRST PROJECT",
      photo: genu,
      deploy: "https://codetrip-33a81.web.app/",
      github: "https://github.com/Hephaestus01/codetrip-project-3",
    },
    {
      id: 1,
      name: "Rhythm In Region",
      description: "SECOND PROJECT",
      photo: rIr,
      deploy: "https://bin-ostrowski.github.io/rhythm-in-region/",
      github: "https://github.com/kfisch2/rhythm-in-region",
    },
    {
      id: 2,
      name: "dose",
      description: "THIRD PROJECT",
      photo: dose,
      deploy: "https://cryptic-inlet-45736.herokuapp.com/",
      github: "https://github.com/kfisch2/dose",
    },
    {
      id: 3,
      name: "nerdherd",
      description: "FOURTH",
      photo: nerdherd,
      deploy: "https://nerd-herd06@herokuapp.com",
      github: "https://github.com/kfisch2/nerd-herd",
    },
  ];

  return (
    // <div className="container">
    //   <div className="row">
    //     {projects.map((project, i) => {
    //       return (
    //         <>
    //           <div className="col-md">
    //             <Projects project={project} key={i} />
    //           </div>
    //           <div className="w-50"></div>
    //         </>
    //       );
    //     })}
    //   </div>
    // </div>

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
