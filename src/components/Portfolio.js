import Projects from "./Projects";
import rIr from "../images/rIr.png";
import genu from "../images/genu.png";
import nerdherd from "../images/nerdherd.png";
import findABook from "../images/findABook.png";

export default function Portfolio() {
  // Project list
  const projects = [
    {
      id: 0,
      name: "Genu",
      description:
        "Website generator for restaurants featuring menu items with photos, contact information, and any additional details they wish to include. The user will be provided with a unique link to their restaurant's website!",
      photo: genu,
      deploy: "https://codetrip-33a81.web.app/",
      github: "https://github.com/Hephaestus01/codetrip-project-3",
      technologies:
        "React, React-bootstrap, React-router, Firebase, Firestore",
      role: "Read documentation for Firebase/Firestore to configure it with our project, collaborate with member who managed authentication, data structure, and assist front-end team with remaining tickets.",
    },
    {
      id: 1,
      name: "Find-a-book",
      description:
        "Use google search to find available books. User may create an account to save books to their dashboard.",
      photo: findABook,
      deploy: "https://mighty-oasis-75035.herokuapp.com/",
      github: "https://github.com/kfisch2/find-a-book",
      technologies: "React, Bootstrap",
      role: "Refactor RESTful API into functional GraphQL API",
    },
    {
      id: 2,
      name: "Rhythm In Region",
      description:
        "Want to go to a concert but you aren't sure who to see? Enter your city and favorite genre to generate a list of artists and a few samples of their music!",
      photo: rIr,
      deploy: "https://bin-ostrowski.github.io/rhythm-in-region/",
      github: "https://github.com/kfisch2/rhythm-in-region",
      technologies: "HTML, CSS, JS, Materialize, Ticketmaster & Shazam API",
      role: "Read documentation to learn how to use Materialize, write API calls for Ticketmaster and Shazam, set up the backend, and work with the front-end team to submit the project on time.",
    },
    {
      id: 3,
      name: "NerdHerd",
      description:
        "Tech blog where a user may create an account to login and contribute to threads. The user may publish articles, blog posts, thoughts, and opinions to engage with the tech community!",
      photo: nerdherd,
      deploy: "https://nerd-herd06.herokuapp.com/",
      github: "https://github.com/kfisch2/nerd-herd",
      technologies: "HTML, CSS, JS, Handlebars, Sequelize, Express",
      role: "Built from scratch by yours truly",
    },
  ];

  return (
    <div className="projects-container">
      {projects.map((project, i) => {
        return (
          <div>
            <Projects project={project} key={project.name} />
          </div>
        );
      })}
    </div>
  );
}
