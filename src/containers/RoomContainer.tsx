import { Container } from "@mui/material"
import { Room } from "../types/types"

interface RoomContainerProps {
  rooms: Room[]
}

const RoomContainer = ({ rooms }: RoomContainerProps) => {

  const roomsToDisplay = rooms?.map((room) => {
    return <li key={room.id}>{room.capacity}</li>
  })

  return (
    
    <Container sx={{
      flexBasis: 3,
      flexGrow: 1,
      minHeight: "10rem"
    }}>
      <ul>
        {roomsToDisplay}
      </ul>
    </Container>
  )
}

export default RoomContainer