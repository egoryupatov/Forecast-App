import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
  
  * {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  
  h1 {
    color: white;
    padding:20px;
    text-shadow: 1px 1px 2px black;
    text-align: center;
  }
  h2 {
    color: white;
    padding:20px;
    text-shadow: 1px 1px 2px black;
  }
`

