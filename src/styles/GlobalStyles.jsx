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
  h2 {
    color: ${theme.colors.grey1};
    font-size: ${theme.fontSizes.xxl};
    font-weight: ${theme.fontWeight.medium};
    line-height: ${theme.spacing(11)};
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
    padding: ${theme.spacing(3)} ${theme.spacing(8)};
    border: none;
    font: inherit;
    font-size: ${theme.fontSizes.large};
    font-weight: ${theme.fontWeight.semiBold};
    line-height: ${theme.spacing(9)};
    color: ${theme.colors.grey2};
    background-color: ${theme.colors.white};
    cursor: pointer;
    border-radius: ${theme.spacing(6)};
    box-shadow: 0px 0px 18px 0px ${theme.colors.white};

    transition: box-shadow 200ms linear;

    &:hover,
    :focus {
      box-shadow: 0px 0px 22px 0px ${theme.colors.white};
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
