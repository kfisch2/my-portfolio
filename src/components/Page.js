import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import PageContent from "./PageContent";
import Resume from "./Resume";

export default function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "About":
        return (
          <>
            {/* <h2 className="page-title">{currentPage.name}</h2> */}
            <About />
          </>
        );
      case "Portfolio":
        return (
          <>
            {/* <h2 className="page-title">{currentPage.name}</h2> */}
            <Portfolio />
          </>
        );
      case "Contact":
        return (
          <>
            {/* <h2 className="page-title">{currentPage.name}</h2> */}
            <Contact />
          </>
        );
      case "Resume":
        return (
          <>
            {/* <h2 className="page-title">{currentPage.name}</h2> */}
            <Resume />
          </>
        );
      default:
        return <About />;
    }
  };

  return <PageContent>{renderPage()}</PageContent>;
}
