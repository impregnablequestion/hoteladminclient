import { Hotel } from "../types/types"

const baseURL = "http://localhost:5069/api"

export const GetHotels = (): Promise<Hotel[]> => {
  return fetch(`${baseURL}/hotels`)
    .then(res => res.json())
    .then(res => {
      return res as Hotel[]
    })
}

export const GetHotelById = (id: number): Promise<Hotel> => {
  return fetch(`${baseURL}/hotels/${id}`)
    .then(res => res.json())
    .then(res => {
      return res as Hotel
    })
}

export const PostHotel = (hotel: Hotel): Promise<Hotel> => {
  return fetch(`${baseURL}/hotels`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(hotel)
  })
    .then(res => res.json())
    .then(res => {
      return res as Hotel
    })
} 
