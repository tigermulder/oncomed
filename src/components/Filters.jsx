import React from 'react';
import styled from 'styled-components';

const Filters = ({ language, setLanguage, sortOrder, setSortOrder }) => {
  return (
    <FilterContainer>
      <Label>
        <b>언어</b>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en-US">English</option>
          <option value="ko-KR">Korean</option>
        </select>
      </Label>
      <Label>
        <b>정렬순서</b>
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="desc">별점높은순서</option>
          <option value="asc">별점낮은순서</option>
        </select>
      </Label>
    </FilterContainer>
  );
};

export default Filters;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  color: #333;
`;