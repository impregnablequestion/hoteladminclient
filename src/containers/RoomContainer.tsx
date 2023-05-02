import { Container, Button } from "@mui/material"
import { Hotel, Room } from "../types/types"
import RoomCard from "../components/room/RoomCard"

interface RoomContainerProps {
  rooms: Room[];
  hotel: Hotel | null;
  deleteRoom: CallableFunction;
}

const RoomContainer = ({ rooms, deleteRoom }: RoomContainerProps) => {

  if (rooms.length === 0) {
    return(
      <Container sx={{
        flexBasis: 3,
        flexGrow: 1,
        minHeight: "10rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "1rem"
      }}>
      <p>Select a hotel to view, edit and create rooms</p>
      </Container>
    )
  }

  const roomsToDisplay = rooms?.map((room) => {
    return <RoomCard key={room.id} room={room} deleteRoom = {deleteRoom}/>
  })

  return (
    
    <Container sx={{
      flexBasis: 3,
      flexGrow: 1,
      minHeight: "10rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      padding: "1rem"
    }}>
      <Button variant="outlined" sx={{
        alignSelf: "center"
      }}>Add Room</Button>
      <Container sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        overflow: "scroll",
        maxHeight: "38rem",
        padding: "1rem"
      }}>
        {roomsToDisplay}
      </Container>
    </Container>
  )
}

export default RoomContainer