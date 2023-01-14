import React, { useEffect } from "react";
import { capitalize } from "../utils/helpers";

function Header(props) {
  const { page = [], setCurrentPage, currentPage } = props;

  useEffect(() => {
    document.title = capitalize(currentPage.name);
  }, [currentPage]);

  return (
    <div className="header">
      <div className="my-name">
        <h1>Kayla Fischer</h1>
      </div>
      <nav className="links">
        {page.map((Page) => (
          <li
            className={`link ${currentPage.name === Page.name && "navActive"}`}
            key={Page.name}
          >
            <span onClick={() => setCurrentPage(Page)}>
              {capitalize(Page.name)}
            </span>
          </li>
        ))}
      </nav>
    </div>
  );
}

export default Header;
