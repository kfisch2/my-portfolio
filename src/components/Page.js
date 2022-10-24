import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";
import PageContent from "./PageContent";

export default function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return <PageContent>{renderPage()}</PageContent>;
}
