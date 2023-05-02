import { Container } from "@mui/material"
import { Hotel } from "../types/types"
import { Dispatch, SetStateAction } from "react"
import HotelCard from "../components/hotel/HotelCard";
import AddHotelDialog from "../components/hotel/AddHotelDialog";

interface HotelContainerProps {
  hotels: Hotel[];
  selectedHotel: Hotel | null;
  setSelectedHotel: Dispatch<SetStateAction<Hotel | null>>;
  addHotel: CallableFunction
  editHotel: CallableFunction
  deleteHotel: CallableFunction
}

const HotelContainer = ({ hotels, setSelectedHotel, editHotel, deleteHotel, addHotel, selectedHotel }: HotelContainerProps) => {

  const hotelsToDisplay = hotels.map(hotel => {
    return (
      <HotelCard 
      setSelectedHotel={setSelectedHotel}
      selectedHotel={selectedHotel}
      hotel={hotel}
      editHotel = {editHotel}
      deleteHotel={deleteHotel}
      key={hotel.id}
      />
    )
  })

  return (
    <Container sx={{
      flexBasis: 1,
      minWidth: "30rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: 'center',
      padding: "1rem",
      gap: "0.5rem",
      borderRight: "2px dotted blue"
    }}>
      <AddHotelDialog addHotel={addHotel}/>
      <ul>
        {hotelsToDisplay}
      </ul>
    </Container>
  )
}

export default HotelContainer