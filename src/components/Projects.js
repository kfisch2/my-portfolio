import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function Projects({ project }) {
  const { name, description, photo, deploy, github } = project;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* React Modal when user clicks on project */}
      <Modal
        className="modal"
        show={show}
        onHide={handleClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">{description} </Modal.Body>
        <Modal.Footer>
          <Button href={github} target="_blank" variant="dark">
            Github
          </Button>
          <Button href={deploy} target="_blank" variant="dark">
            Deployed
          </Button>
          <Button variant="light" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* carousel items */}
      <div className="project-content">
        <img
          src={photo}
          className="d-block w-100"
          alt={name}
          onClick={handleShow}
        />
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
      </div>
    </>
  );
}
