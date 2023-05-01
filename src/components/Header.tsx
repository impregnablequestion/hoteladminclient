import NavBar from "./NavBar"
import IconButton from "@mui/material/IconButton"
import Brightness4Icon from "@mui/icons-material/Brightness4"
import Brightness7Icon from "@mui/icons-material/Brightness7"
import { useThemeContext } from "../theme/ThemeContextProvider"
import Box from "@mui/material/Box"
import { Container } from "@mui/material"

const Header = () => {

  const { mode, toggleColorMode } = useThemeContext();

  return (
    <Container sx={{
      backgroundColor: 'primary.dark',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center'
    }}>
      <Box>
        <h1>Hotel Admin Panel</h1>
      </Box>
      <NavBar/>
      <IconButton sx = {{ ml: 1 }} onClick={toggleColorMode} color="inherit">
        {mode === "dark" ? <Brightness7Icon/> : <Brightness4Icon/>}
      </IconButton>
    </Container>
  )
}

export default Header