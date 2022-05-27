import styled from 'styled-components';

export const ClipboardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  gap: 10px;
`;

export const ClipboardArea = styled.textarea`
  background: #eee;
  border: 1px solid #ccc;
  color: #777;
  border-radius: 5px;
  resize: none;
  padding: 10px;
  height: 20px;

  &:focus {
    outline: none;
  }
`;
