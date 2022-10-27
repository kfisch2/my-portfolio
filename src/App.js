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
      name: "experience",
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
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </>
  );
}

export default App;
