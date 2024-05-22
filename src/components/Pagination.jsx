import React from 'react';
import styled from 'styled-components';

const Pagination = ({ page, setPage, totalPages }) => {
  return (
    <PaginationContainer>
      <Button onClick={() => setPage((old) => Math.max(old - 1, 1))} disabled={page === 1}>
        Prev
      </Button>
      <Button onClick={() => setPage((old) => (page < totalPages ? old + 1 : old))} disabled={page === totalPages}>
        Next
      </Button>
    </PaginationContainer>
  );
};

export default Pagination;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 30px;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #555;
  }
`;