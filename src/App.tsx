import './App.css'
import { ThemeProvider, createTheme } from "@mui/material/styles"
// import { useEffect, useState } from 'react';
// import { GetHotels } from './services/HotelService';
// import { Hotel } from './types/types';
import MainContainer from './containers/MainContainer';

function App() {

  const theme = createTheme();

  // const [hotels, setHotels]= useState<Hotel[]>([]);

  // useEffect(() => {
  //   GetHotels()
  //   // .then(res => console.log(res))
  //   .then(res => {
  //     setHotels(res);
  //   })
  // }, [])

  return (
    <ThemeProvider theme={theme}>
      <MainContainer/>
    </ThemeProvider>
  )
}

export default App
