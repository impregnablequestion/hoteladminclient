import { Container } from "@mui/material"
import HotelContainer from "./HotelContainer"
import RoomContainer from "./RoomContainer"
import { useEffect, useState } from "react"
import { Hotel, Room } from "../types/types"
import { DeleteHotel, GetHotelByIdWithRooms, GetHotels, PostHotel, PutHotel } from "../services/HotelService"
import styled from "@emotion/styled"

const MainContainer = () => {

  const [hotels, setHotels] = useState<Hotel[]>([])
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [selectedRooms, setSelectedRooms] = useState<Room[]>([])

  const handleAddHotel = (hotel: Partial<Hotel>) => {
    const newHotels = [...hotels];
    PostHotel(hotel)
      .then(res => newHotels.push(res))
      .then(() => {
        setHotels(newHotels);
      })
  }

  const handleEditHotel = (hotel: Hotel) => {
    PutHotel(hotel)
      .then(() => {
        GetHotels()
          .then(res => setHotels(res))
      })
  }

  const handleDeleteHotel = (id: number) => {
    DeleteHotel(id)
      .then(() => {
        GetHotels()
          .then(res => setHotels(res))
      })
  }

  useEffect(() => {
    selectedHotel && GetHotelByIdWithRooms(selectedHotel.id)
      .then(res => {
        setSelectedRooms(res.rooms);
      })
  }, [selectedHotel, setSelectedHotel])

  useEffect(() => {
    GetHotels()
      .then(res => setHotels(res));
  }, [])


  return (
    <div>
      <SelectedTitle>Selected Hotel: {selectedHotel?.name}</SelectedTitle>
      <Container sx={{
        display: 'flex',
        justifyContent: 'space-around'
      }}>
        <HotelContainer
          hotels={hotels}
          selectedHotel={selectedHotel}
          setSelectedHotel={setSelectedHotel}
          addHotel={handleAddHotel}
          editHotel={handleEditHotel}
          deleteHotel={handleDeleteHotel}
        />
        <RoomContainer rooms={selectedRooms} hotel = {selectedHotel}/>
      </Container>
    </div>
  )
}

const SelectedTitle = styled.h2`
text-align: center;
`

export default MainContainer