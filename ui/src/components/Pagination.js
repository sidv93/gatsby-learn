import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const PageStyles = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--grey);
  margin: 2rem 0;
  border-radius: 5px;
  text-align: center;

  & > * {
    padding: 1rem;
    flex: 1;
    border-right: 1px solid var(--grey);
    text-decoration: none;

    &[aria-current],
    &.current {
      color: var(--red);
    }
    &[disabled] {
      pointer-events: none;
      color: var(--grey);
    }
  }
  @media(max-width: 800px) {
    .word {
      display: none;
    }
    font-size: 1.4rem;
  }
`;

const Pagination = ({ pageSize, skip, totalCount, currentPage, base }) => {
  const totalPages = Math.ceil(totalCount / pageSize);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const hasNextPage = nextPage <= totalPages;
  const hasPrevPage = prevPage >= 1;

  return (
    <PageStyles>
      <Link disabled={!hasPrevPage} to={`${base}/${prevPage}`} title="Previous page">
        ← <span className="word">Prev</span>
      </Link>
      {Array.from({ length: totalPages }).map((_, index) => (
        <Link key={`page-${index}`}
          className={currentPage === 1 && index === 0 ? 'current' : ''}
          to={`${base}/${index > 0 ? index + 1 : ''}`}
        >
          {index + 1}
        </Link>
      ))}
      <Link disabled={!hasNextPage} to={`${base}/${nextPage}`} title="Next page">
        <span className="word">Next</span> →
      </Link>
    </PageStyles>
  );
};

export default Pagination;
