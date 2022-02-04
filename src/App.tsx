import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Themes";
import GlobalStyles from "./GlobalStyles";
import Home from "./pages/Home";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Home themeToggler={setIsDarkMode} />
    </ThemeProvider>
  );
}
export default App;
