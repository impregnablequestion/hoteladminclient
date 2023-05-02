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

export const GetHotelByIdWithRooms = (id: number): Promise<Hotel> => {
  return fetch(`${baseURL}/hotels/${id}?IncludeRooms=true`)
    .then(res => res.json())
    .then(res => {
      return res as Hotel
    })
}

export const PostHotel = (hotel: Partial<Hotel>): Promise<Hotel> => {
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

export const PutHotel = (hotel: Hotel): Promise<Response> => {
  const { id, ...body } = hotel;
  return fetch(`${baseURL}/hotels/${hotel.id}`, 
  {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}

export const DeleteHotel = (id: number): Promise<Response> => {
  return fetch(`${baseURL}/hotels/${id}`, {
    method: 'DELETE'
  })
}
