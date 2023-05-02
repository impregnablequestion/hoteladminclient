import { useState } from "react";
import { Dialog, Button, DialogActions, DialogContent, DialogTitle, DialogContentText, TextField } from "@mui/material"
import { Hotel } from "../../types/types";

interface AddHotelDialogProps {
  addHotel: CallableFunction
}

const AddHotelDialog = ({addHotel}:AddHotelDialogProps) => {

  const [open, setOpen] = useState(false);

  const [hotelToAdd, setHotelToAdd] = useState<Partial<Hotel>>({
    name: "",
    address: "",
    country: "",
    phoneNumber: "",
    website: "",
    email: "",
    city: ""
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    const updatedHotel = {...hotelToAdd, [name]: value}
    setHotelToAdd(updatedHotel);
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addHotel(hotelToAdd);
    setOpen(false)
    setHotelToAdd({
      name: "",
      address: "",
      country: "",
      phoneNumber: "",
      website: "",
      email: "",
      city: ""
    })
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Hotel
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a hotel</DialogTitle>
        <DialogContent>
          <DialogContentText color={"inherit"}>
            Please specify all of the required fields
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            name="name"
            type="text"
            fullWidth
            variant="standard"
            value={hotelToAdd.name}
            onChange={(e) => {handleChange(e)}}
          />
          <TextField
            margin="dense"
            id="address"
            label="Address"
            name="address"
            type="text"
            fullWidth
            variant="standard"
            value={hotelToAdd.address}
            onChange={(e) => {handleChange(e)}}
          />
          <TextField
            margin="dense"
            id="country"
            label="Country"
            type="text"
            name="country"
            fullWidth
            variant="standard"
            value={hotelToAdd.country}
            onChange={(e) => {handleChange(e)}}
          />
          <TextField
            margin="dense"
            id="city"
            label="City"
            name="city"
            type="text"
            fullWidth
            variant="standard"
            value={hotelToAdd.city}
            onChange={(e) => {handleChange(e)}}
          />
          <TextField
            margin="dense"
            id="Phone Number"
            label="Phone Number"
            name="phoneNumber"
            type="number"
            fullWidth
            variant="standard"
            value={hotelToAdd.phoneNumber}
            onChange={(e) => {handleChange(e)}}
          />
          <TextField
            margin="dense"
            id="website"
            label="Website"
            name="website"
            type="url"
            fullWidth
            variant="standard"
            value={hotelToAdd.website}
            onChange={(e) => {handleChange(e)}}
          />
          <TextField
            margin="dense"
            id="name"
            label="Email Address"
            name="email"
            type="email"
            fullWidth
            variant="standard"
            value={hotelToAdd.email}
            onChange={(e) => {handleChange(e)}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={(e) => handleSubmit(e)}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AddHotelDialog