import styled from "@emotion/styled"
import { Link } from "@mui/material"


const NavBar = () => {
  return (
    <NavWrapper>
      <Link href="/">log in</Link>
      <Link href="/">sign up</Link>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 3rem;
`

export default NavBar