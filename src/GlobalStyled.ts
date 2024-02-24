import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  --font-heading: "Mohave", sans-serif;
  --font-body: "Roboto Flex", sans-serif;
  --body-line-height: 1.5;
  --heading-line-height: 1.4;

  --white-default: #fff;

  --gray-light-05: #f2f2ff;
  --gray-light-04: #e6e6f2;
  --gray-light-03: #dadae5;
  --gray-light-02: #ceced9;
  --gray-light-01: #c0c0cc;

  --gray-dark-05: #2f2f3b;
  --gray-dark-04: #25252e;
  --gray-dark-03: #1b1b21;
  --gray-dark-02: #101014;
  --gray-dark-01: #060608;

  --orange-05: #ff835c;
  --orange-04: #ff7042;
  --orange-03: #f55827;
  --orange-02: #e54917;
  --orange-01: #cf3302;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Fluid Response Start*/
/* html { 
  font-size: calc(0.625rem + 0.41666666666666663vw); 
}
  @media screen and (max-width:1920px) { html { font-size: calc(0.625rem + 0.41666666666666674vw); } }
  @media screen and (max-width:1440px) { html { font-size: calc(0.39866369710467703rem + 0.6681514476614699vw); } }
  @media screen and (max-width:991px) { html { font-size: calc(0.7497474747474747rem + 0.40404040404040403vw); } }
  @media screen and (max-width:496px) { html { font-size: calc(0.7489878542510121rem + 0.8097165991902835vw); } }
  @media screen and (max-width:249px) { html { font-size: calc(0.8744959677419355rem + 0.8064516129032256vw); } } */

/* Fluid Response End */

::-moz-selection {
  color: var(--white-default);
  background: var(--orange-03);
}

::selection {
  color: var(--white-default);
  background: var(--orange-03);
}

body {
  font-family: var(--font-body);
  font-weight: 400;
  line-height: var(--body-line-height);
  background-color: var(--gray-dark-01);
  color: var(--white-default);
}

img {
  max-width: 100%;
}

a{
  text-decoration: none;
  color: inherit;
}
button{
  font-family: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  font-family: var(--font-heading);
  font-weight: 600;
  line-height: var(--heading-line-height);
  text-transform: uppercase;
}

h1, .h1 {
  font-size: 3.5rem;
  font-weight: bold;
}
h2, .h2 {
  font-size: 3rem;
}
h3, .h3 {
  font-size: 2.5rem;
}
h4, .h4 {
  font-size: 2rem;
}
h5, .h5 {
  font-size: 1.5rem;
}
h6, .h6 {
  font-size: 1.25rem;
}

.subhead {
  font-family: Mohave;
  font-weight: 600;
  text-transform: uppercase;
}

.subhead.large {
  font-size: 1.125rem;
}

.subhead.medium {
  font-size: 1rem;
}
.subhead.small {
  font-size: 0.875rem;
}
.subhead.tiny {
  font-size: 0.75rem;
}

.container-medium{
  max-width: 79rem;
  padding: 0rem 1.5rem;
  margin: 0 auto;
  width: 100%;
}

/* ScrollBar Custom */
/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #2F2F3B #1B1B21;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  height: 0.25rem;
  width: 0.25rem;
}

*::-webkit-scrollbar-track {
  background-color: #1B1B21;
  border-radius: 1.25rem;
}

*::-webkit-scrollbar-track:hover,
*::-webkit-scrollbar-track:active {
  background-color: #25252E;
}

*::-webkit-scrollbar-thumb {
  background-color: #2F2F3B;
  border-radius: 1.25rem;
}

*::-webkit-scrollbar-thumb:hover,
*::-webkit-scrollbar-thumb:active {
  background-color: #525266;
}
`;
