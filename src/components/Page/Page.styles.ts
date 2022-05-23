import styled from 'styled-components';

export const PageWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 90px calc(100vh - 90px);
`;

export const PageHeader = styled.div`
  height: 50px;
  border-bottom: 1px solid #ddd;
  padding: 20px;
  display: flex;
  align-items: center;
`;
