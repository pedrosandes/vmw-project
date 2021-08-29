import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "Roboto";
  src: url("/fonts/Roboto-Bold.ttf");
  font-weight: 700;
}

@font-face {
  font-family: "Roboto";
  src: url("/fonts/Roboto-Regular.ttf");
  font-weight: 400;
}

@font-face {
  font-family: "Poppins";
  src: url("/fonts/Poppins-Regular.ttf");
  font-weight: 400;
}

@font-face {
  font-family: "Poppins";
  src: url("/fonts/Poppins-Medium.ttf");
  font-weight: 500;
}

@font-face {
  font-family: "Poppins";
  src: url("/fonts/Poppins-Bold.ttf");
  font-weight: 700;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto";
}

h1, h2, p { 
    margin: 0;
    line-height: 1;
  }

#root, html, body {
    min-height: 100%;
    width: 100%;
  }

`;

export default GlobalStyle;
