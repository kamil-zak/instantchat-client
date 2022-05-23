import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  font-size: 62.5%;
}
body {
  font-size: 1.6rem;
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
`;

export default GlobalStyles;
