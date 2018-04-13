import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: "proxima-nova",Lato,sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: #637280;
    font-weight: 400;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  a {
    text-decoration: none;
    color: #637280;
  }

  ul, ol, dl {
    font-family: inherit;
    font-size: 1rem;
    line-height: 1.6;
    list-style-position: outside;
    margin-bottom: 1.25rem;
  }

  div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, p, blockquote, th, td {
    margin: 0;
    padding: 0;
  }

  *, *::before, *::after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
  }

`;