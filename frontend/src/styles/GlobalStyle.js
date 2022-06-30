import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    // font
    --font-size-base: 1.125rem;
    --font-size-small: 1.5rem;
    --font-size-medium: 2rem;
    --font-size-large : 5rem;

    --font-weight-base : 400;
    --font-weight-small : 500;
    --font-weight-medium : 600;
    --font-weight-large : 800;

    // padding
    --padding-size-base : 1.125rem;
    --padding-size-small: 1.5rem;
    --padding-size-medium : 2rem;
    --padding-size-large : 5rem;

    // margin
    --margin-size-base : 1.125rem;
    --margin-size-small: 1.5rem;
    --margin-size-medium : 2rem;
    --margin-size-large : 5rem;

    // line-height
    --line-height-medium : 2rem;

    // banner
    --banner-size-width : 100%;
    --banner-size-height : 30rem; 

    // color
    --color-logo-bg : #eee;
    --color-white: white;
    --color-blue: blue;
  }
`;

export default GlobalStyle;