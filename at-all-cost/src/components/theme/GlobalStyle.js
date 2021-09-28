import styled, { ThemeProvider, createGlobalStyle  } from "styled-components";
import theme from "styled-theming";

export const backgroundColor = theme("theme", {
  light: "#fff",
  dark: "#2d2d2d",
});

export const textColor = theme("theme", {
  light: "#000",
  dark: "#fff",
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  background-color: ${backgroundColor};
  color: ${textColor};
`;

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${backgroundColor};
    color: ${textColor};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
  }`;