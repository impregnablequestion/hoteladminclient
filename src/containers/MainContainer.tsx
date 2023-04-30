import Footer from "../components/Footer"
import Header from "../components/Header"
import HotelContainer from "./HotelContainer"
import RoomContainer from "./RoomContainer"
import styled from "@emotion/styled"


const MainContainer = () => {
  return (
    <div className="wrapper">
      <Header/>
      <InfoContainer>
        <HotelContainer/>
        <RoomContainer/>
      </InfoContainer>
      <Footer/>
    </div>
  )
}

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  
`



export default MainContainer