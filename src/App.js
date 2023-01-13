import React, { useState } from "react";
import { Header, Page, Footer } from "./components";

function App() {
  const [page] = useState([
    {
      name: "about",
    },
    { name: "portfolio" },
    { name: "contact" },
    {
      name: "resume",
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
      <div className="page">
        <Page currentPage={currentPage}></Page>
      </div>
      <Footer />
    </>
  );
}

export default App;
