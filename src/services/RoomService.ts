import { Room } from "../types/types"

const baseURL = "http://localhost:5069/api/hotels"

export const GetRooms = (hotelId: number): Promise<Room[]> => {
  return fetch(`${baseURL}/${hotelId}/rooms`)
    .then(res => res.json())
    .then(res => {
      return res as Room[]
    })
}

export const GetRoomById = (hotelId: number, id: number): Promise<Room> => {
  return fetch(`${baseURL}/${hotelId}/rooms/${id}`)
    .then(res => res.json())
    .then(res => {
      return res as Room
    })
}

export const PostRoom = (hotelId: number, room: Partial<Room>): Promise<Room> => {

  return fetch(`${baseURL}/${hotelId}/rooms`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(room)
  })
    .then(res => res.json())
    .then(res => {
      return res as Room
    })
} 

export const PutRoom = (room: Room): Promise<Response> => {
  const { id, ...body } = room;
  return fetch(`${baseURL}/${room.hotelId}/rooms/${room.id}`, 
  {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}

export const DeleteRoom = (room: Room): Promise<Response> => {
  
  return fetch(`${baseURL}/${room.hotelId}/rooms/${room.id}`, {
    method: 'DELETE'
  })
}