import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body{
    font-family: 'Open Sans';
    padding: 20px 60px;

    @media screen and (max-width: 800px) {
      padding: 10px;
      
    }
  }
  a{
    text-decoration: none;
    color: black;
  }
  *{
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
