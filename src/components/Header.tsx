import NavBar from "./NavBar"
import styled from "@emotion/styled"
import IconButton from "@mui/material/IconButton"
import Brightness4Icon from "@mui/icons-material/Brightness4"
import Brightness7Icon from "@mui/icons-material/Brightness7"
import { useThemeContext } from "../theme/ThemeContextProvider"
import Box from "@mui/material/Box"

const Header = () => {

  const { mode, toggleColorMode } = useThemeContext();

  return (
    <HeaderContainer>
      <Box>
        <h1>Hotel Admin Panel</h1>
      </Box>
      <NavBar/>
      <IconButton sx = {{ ml: 1 }} onClick={toggleColorMode} color="inherit">
        {mode === "dark" ? <Brightness7Icon/> : <Brightness4Icon/>}
      </IconButton>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export default Header