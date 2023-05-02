import { Container, Button } from "@mui/material"
import { Hotel, Room } from "../types/types"

interface RoomContainerProps {
  rooms: Room[]
  hotel: Hotel | null
}

const RoomContainer = ({ rooms }: RoomContainerProps) => {

  const roomsToDisplay = rooms?.map((room) => {
    return <li key={room.id}>{room.capacity}</li>
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
      <ul>
        {roomsToDisplay}
      </ul>
    </Container>
  )
}

export default RoomContainer