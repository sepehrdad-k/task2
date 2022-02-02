import { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import GlobalStyles from "./GlobalStyles";
import Home from "./pages/Home";
function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
