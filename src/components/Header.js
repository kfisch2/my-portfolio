import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';
import { nav, Nav, Container } from 'react-bootstrap'

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
      <Container className="col flex-row header">
        <nav className="row">
          <h1 className='my-name'>Kayla Fischer</h1>
          {page.map((Page) => (
            <li
              className={`mx-5 links col ${
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
        </nav>
      </Container>
  );
}

export default Header;
