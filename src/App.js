import { ThemeProvider } from "styled-components";
import LoginContextProvider from "./context/LoginProvider";
import AppRouter from "./router/AppRouter";
import theme from "./components/globalStyles/theme";

function App() {
  return (
    <>
      <LoginContextProvider>
        <ThemeProvider theme={theme}>
          <AppRouter />
        </ThemeProvider>
      </LoginContextProvider>
    </>
  );
}

export default App;
