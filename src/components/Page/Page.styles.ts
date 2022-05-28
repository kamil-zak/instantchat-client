import styled from 'styled-components';

export const PageWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 80px calc(100vh - 80px);
`;

export const PageHeader = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 20px;
  display: flex;
  align-items: center;
`;

export const PageContent = styled.div`
  overflow-y: scroll;
`;
