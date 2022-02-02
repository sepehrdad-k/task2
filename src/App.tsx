import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Themes";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import Home from "./pages/Home";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <ThemeToggler onClick={() => setIsDarkMode(!isDarkMode)}>
        تغییر تم
      </ThemeToggler>
      <Home />
    </ThemeProvider>
  );
}

const ThemeToggler = styled.button`
  font-size: 1.3rem;
  border: none;
  width: 7rem;
  height: 2.5rem;
  border-radius: 0.3rem;
  position: fixed;
  top: 3.5rem;
  right: 2rem;
  background-color: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.mainColor};
  cursor: pointer;
`;
export default App;
