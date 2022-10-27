import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import PageContent from "./PageContent";
import Experience from "./Experience";

export default function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      case "experience":
        return <Experience />;
      default:
        return <About />;
    }
  };

  return <PageContent>{renderPage()}</PageContent>;
}
