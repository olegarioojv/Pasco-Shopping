import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  
  html, body, #root {
    height: 100%;
    overflow: hidden;
  }

  body{
    font-family: "Volkhov", serif;
    background: #F5F5F5;
    color: black;
  }
`;
