import React, { useEffect } from 'react';
import { capitalize } from '../utils/helpers';
import { Container } from 'react-bootstrap'

function Header(props) {
  const {
    page = [],
    setCurrentPage,
    currentPage,
  } = props;

  useEffect(() => {
    document.title = capitalize(currentPage.name);
  }, [currentPage]);

  return (    
      <Container className="col flex-row header">
        <nav className="row header-row">
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
                {capitalize(Page.name)}
              </span>
            </li>
          ))}
        </nav>
      </Container>
  );
}

export default Header;
