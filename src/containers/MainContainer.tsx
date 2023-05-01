import { Container } from "@mui/material"
import HotelContainer from "./HotelContainer"
import RoomContainer from "./RoomContainer"
import { useEffect, useState } from "react"
import { Hotel, Room } from "../types/types"
import { GetHotelById, GetHotelByIdWithRooms, GetHotels } from "../services/HotelService"



const MainContainer = () => {

  const [hotels, setHotels] = useState<Hotel[]>([])
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [selectedRooms, setSelectedRooms] = useState<Room[]>([])

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
    <Container sx={{
      display: 'flex',
      justifyContent: 'space-around'
    }}>
      <HotelContainer hotels = {hotels} setSelectedHotel = {setSelectedHotel}/>
      <RoomContainer rooms = {selectedRooms}/>
    </Container>
  )
}

export default MainContainer