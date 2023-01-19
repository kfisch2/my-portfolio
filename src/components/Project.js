import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Project = ({ project }) => {
  const { name, description, photo, deploy, github, technologies, role } =
    project;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* React Modal when user clicks on my role button */}
      <Modal className="modal" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">{role} </Modal.Body>
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

      <div className="project">
        <img src={photo} alt={name} />
        <div className="description-container">
          <h2 className="project-name">{name}</h2>
          <div className="description">
            <div>{description}</div>
          </div>
          <div className="technologies"> Technologies: {technologies}</div>
          <Button
            className="button"
            href={github}
            target="_blank"
            variant="dark"
          >
            Github
          </Button>
          <Button
            className={`button ${name}`}
            href={deploy}
            target="_blank"
            variant="dark"
          >
            Deployed
          </Button>
          <Button
            className={`button ${name}`}
            variant="dark"
            onClick={handleShow}
          >
            My Role
          </Button>
        </div>
      </div>
    </>
  );
}

export default Project;