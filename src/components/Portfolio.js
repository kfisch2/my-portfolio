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
      description:
        "Website generator for restaurants featuring menu items with photos, contact information, and any additional details they wish to include. The user will be provided with a unique link to their restaurant's website!",
      photo: genu,
      deploy: "https://codetrip-33a81.web.app/",
      github: "https://github.com/Hephaestus01/codetrip-project-3",
      technologies: "React, react-bootstrap, react-router, rc-time-picker, Firebase, Firestore"
    },
    {
      id: 1,
      name: "Rhythm In Region",
      description:
        "Want to go to a concert but you aren't sure who to see? Enter your city and favorite genre to generate a list of artists and a few samples of their music!",
      photo: rIr,
      deploy: "https://bin-ostrowski.github.io/rhythm-in-region/",
      github: "https://github.com/kfisch2/rhythm-in-region",
      technologies: "HTML, CSS, JS, Materialize, Ticketmaster & Shazam API"
    },
    // HEROKU CANCELED FREE DYNOS - Move to another hosting site, activate student account on herokue, or replace with new project
    {
      id: 2,
      name: "Dose",
      description:
        "Prescription tracker that allows a user to create a username to login to their personalized dashboard. The user may enter the cost, prescribed date, and refill date for each prescription. The user may also choose to receive text message notifications when they need to refill their prescription! ",
      photo: dose,
      deploy: "https://cryptic-inlet-45736.herokuapp.com/",
      github: "https://github.com/kfisch2/dose",
      technologies: "HTML, CSS, JS, Bootstrap, Twilio, "
    },
    
    {
      id: 3,
      name: "NerdHerd",
      description:
        "Tech blog where a user may create an account to login and contribute to threads. The user may publish articles, blog posts, thoughts, and opinions to engage with the tech community!",
      photo: nerdherd,
      deploy: "https://nerd-herd06.herokuapp.com/",
      github: "https://github.com/kfisch2/nerd-herd",
      technologies: "HTML, CSS, JS"
    },
  ];

  return (
    <div className="projects-container">
      {projects.map((project, i) => {
        return (
          <div>
            <Projects
              project={project}
              key={project.name}
            />
          </div>
          
        );
      })} 
    
      <div className="heroku-message">**The last two projects without a deploy button are in progress of deployment. Heroku discontinued free dynos, therefore I am working to get the application running again on another site. You may still checkout out the github repository for it until they are up again.</div>
    </div>
  );
}
