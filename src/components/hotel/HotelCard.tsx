import { Button, Card, CardActions, CardContent } from "@mui/material"
import { Hotel } from "../../types/types"
import { Dispatch, SetStateAction } from "react";
import EditHotelDialog from "./EditHotelDialog";

interface HotelCardProps {
  hotel: Hotel;
  editHotel: CallableFunction;
  deleteHotel: CallableFunction;
  selectedHotel: Hotel | null;
  setSelectedHotel: Dispatch<SetStateAction<Hotel | null>>
}

const HotelCard = ({ hotel, deleteHotel, setSelectedHotel, selectedHotel, editHotel }: HotelCardProps) => {

  const selected = selectedHotel?.id == hotel.id;

  return (
    <Card
      sx={{
        margin: "1rem"
      }}>
      <CardContent>
        <h3>{hotel.name}</h3>
        <p>Address: {hotel.address}</p>
        <p>Country: {hotel.country}</p>
        <p>Email: {hotel.email}</p>
        <p>Phone Number: {hotel.phoneNumber}</p>
        <p>Rooms: {hotel.numberOfRooms}</p>
      </CardContent>
      <CardActions>
        <Button
          color="error"
          onClick={() => {
            deleteHotel(hotel.id)
          }}>
          Delete
        </Button>
        <EditHotelDialog hotel={hotel} editHotel={editHotel}/>
        {
          selected ?
            <Button onClick={() => {setSelectedHotel(null)}}>Deselect</Button>
            :
            <Button color="inherit" onClick={() => { setSelectedHotel(hotel) }}>Select</Button>
        }
      </CardActions>
    </Card>
  )
}

export default HotelCard