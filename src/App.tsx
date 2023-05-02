import './App.css'
import { ThemeProvider } from "@mui/material/styles"
import MainContainer from './containers/MainContainer';
import CssBaseline from "@mui/material/CssBaseline"
import { useThemeContext } from './theme/ThemeContextProvider';
import Header from './components/Header';

function App() {

  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header/>
      <MainContainer/>
    </ThemeProvider>
  )
}

export default App
