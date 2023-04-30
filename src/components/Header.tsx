import NavBar from "./NavBar"
import styled from "@emotion/styled"

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Hotel Admin Panel</h1>
      <NavBar/>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export default Header