import styled from "@emotion/styled"

const HotelContainer = () => {
  return (
    <HotelWrapper>
      <p>Hotel Container</p>
    </HotelWrapper>
  )
}

const HotelWrapper = styled.div`
  flex-basis: 1;
  min-width: 20rem;
`

export default HotelContainer