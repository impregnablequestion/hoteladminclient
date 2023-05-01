import { Container } from "@mui/material"
import { Hotel } from "../types/types"
import { Dispatch, SetStateAction } from "react"

interface HotelContainerProps {
  hotels: Hotel[];
  setSelectedHotel: Dispatch<SetStateAction<Hotel | null>>;
}

const HotelContainer= ({ hotels, setSelectedHotel }: HotelContainerProps)=> {

  const hotelsToDisplay = hotels.map(hotel => {
    return <li key={hotel.id} onClick={() => setSelectedHotel(hotel)}>{hotel.name}</li>
  })

  return (
    <Container sx={{
      flexBasis: 1,
      minWidth: "20rem"
    }}>
      <ul>
        {hotelsToDisplay}
      </ul>
    </Container>
  )
}

export default HotelContainer