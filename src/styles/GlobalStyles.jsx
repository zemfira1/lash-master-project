import { css } from '@emotion/react';
import { theme } from 'styles/theme';

export const GlobalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    min-height: 100vh;
    font-style: normal;
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.black};
    background-color: ${theme.colors.mainbackground};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul,
  ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    font-size: ${theme.fontSizes.large};
    font-weight: ${theme.fontWeight.semiBold};
    color: ${theme.colors.grey2};
    background-color: ${theme.colors.white};
    cursor: pointer;
    border-radius: ${theme.spacing(6)};
    box-shadow: 0px 2px 4px -1px ${theme.colors.mainbackground},
      0px 4px 5px 0px ${theme.colors.mainbackground},
      0px 1px 10px 0px ${theme.colors.mainbackground};

    transition: box-shadow 200ms linear;

    &:hover,
    :focus {
      box-shadow: 0px 2px 4px -1px ${theme.colors.mainbackground},
        0px 4px 5px 0px ${theme.colors.mainbackground},
        0px 1px 18px 0px ${theme.colors.mainbackground};
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
