export interface Room {
  id: number;
  capacity: number;
  pricePerNight: number;
  roomNumber: string | null;
  type: RoomType | null;
  description: string | null;
  hotelId: number;
}

export interface Hotel {
    id: number;
    name: string;
    address: string;
    country: string;
    phoneNumber: string;
    website: string;
    email: string;
    city: string | null;
    rooms: RoomDto[];
    numberOfRooms: number;
}