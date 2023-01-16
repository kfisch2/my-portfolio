import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import PageContent from "./PageContent";
import Resume from "./Resume";

export default function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return <PageContent>{renderPage()}</PageContent>;
}
