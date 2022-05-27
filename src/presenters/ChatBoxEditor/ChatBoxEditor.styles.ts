import styled from 'styled-components';

export const ChatBoxEditorWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  padding: 20px;
  max-width: 1000px;
  margin: 50px auto;
`;

export const ChatBoxEditorForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-self: center;
`;

export const ChatBoxPreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
