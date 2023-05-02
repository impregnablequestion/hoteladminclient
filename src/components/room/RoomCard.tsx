import { Button, Card, CardActions, CardContent } from "@mui/material"
import { Room } from "../../types/types"

interface RoomCardProps {
  room: Room;
  deleteRoom: CallableFunction;
}

const RoomCard = ({room, deleteRoom}: RoomCardProps) => {
  return (
    <Card sx={{
      maxWidth: "10rem"
    }}>
      <CardContent>
        <p>{room.description}</p>
        <p> Capacity: {room.capacity}</p>
        <p> Room Id: {room.id}</p>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small" onClick={() => {deleteRoom(room)}}>Delete</Button>
      </CardActions>
    </Card>
  )
}

export default RoomCard