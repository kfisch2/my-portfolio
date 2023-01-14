import React, { useState } from "react";
import { Header, Page, Footer } from "./components";

function App() {
  const [page] = useState([
    {
      name: "About",
    },
    { name: "Portfolio" },
    { name: "Contact" },
    {
      name: "Resume",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(page[0]);

  return (
    <>
      <Header
        page={page}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Header>
      <main className="page-content">
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </>
  );
}

export default App;
