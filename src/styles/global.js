import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  font-size: 62.5%;
}

@font-face {
  font-family: "Valorant";
  src: url("/fonts/Valorant.ttf");
}

@font-face {
  font-family: "Open Sans";
  src: url("/fonts/OpenSans-regular.ttf");
  font-weight: 400;
}

@font-face {
  font-family: "Open Sans";
  src: url("/fonts/OpenSans-SemiBold.ttf");
  font-weight: 500;
}

@font-face {
  font-family: "Open Sans";
  src: url("/fonts/OpenSans-Bold.ttf");
  font-weight: 700;
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
  font-family: ${({ theme }) => theme.fonts[1]};
}

h1 {
  color: ${({ theme }) => theme.colors.blackSecundary};
  font-size: ${({ theme }) => theme.fontSize.fs64};
  line-height: 6.4rem;
}

h2 {
  font-size: ${({ theme }) => theme.fontSize.fs36};
  line-height: 5.4rem;
}

p {
  font-size: ${({ theme }) => theme.fontSize.fs18};
  color: ${({ theme }) => theme.colors.blackSecundary};
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: #333;
}

a:hover {
  color:  #DC3D4B;
}

img {
  max-width: 100%;
  height: auto;
}

button {
  border: none;
}

#root, html, body {
    font-size: 1.6rem;
    min-height: 100vh;
    width: 100%;
    background-color: ${({ theme }) => theme.background};
    scroll-behavior: smooth;
  }

`;

export default GlobalStyle;
