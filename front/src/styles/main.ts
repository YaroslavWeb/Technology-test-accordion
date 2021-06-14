import { css } from "styled-components";

import theme from "./theme";

export default css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: Arial, sans-serif;
    font-size: 16px;

    @media ${theme.media.large} {
      font-size: 14px;
    }

    @media ${theme.media.small} {
      font-size: 12px;
    }
  }

  button {
    font-family: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`;
