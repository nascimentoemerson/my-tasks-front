import { createGlobalStyle } from "styled-components";
import { colors } from "./components/tasklist/variables";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.background};
    color: ${colors.light};
    font-family: sans-serif;
    margin: 0;
    padding: 0;
  }

  a {
    color: ${colors.primary};
    text-decoration: none;

    &:hover {
      color: ${colors.light};
    }
  }
`;