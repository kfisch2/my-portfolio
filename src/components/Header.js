import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';
import { Navbar, Nav, Container } from 'react-bootstrap'

function Header(props) {
  const {
    page = [],
    setCurrentPage,
    currentPage,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

  return (    
      <Container className="col">
        <Navbar className="flex-row row">
          {page.map((Page) => (
            <li
              className={`col ${
                currentPage.name === Page.name && 'navActive'
                }`}
              key={Page.name}
            >
              <span
                onClick={() => setCurrentPage(Page)}
              >
                {capitalizeFirstLetter(Page.name)}
              </span>
            </li>
          ))}
        </Navbar>
      </Container>
  );
}

export default Header;
