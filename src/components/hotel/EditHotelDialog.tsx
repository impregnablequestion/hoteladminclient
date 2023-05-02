import { useState } from "react";
import { Dialog, Button, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material"
import { Hotel } from "../../types/types";

interface EditHotelDialogProps {
  editHotel: CallableFunction;
  hotel: Hotel
}

const EditHotelDialog = ({editHotel, hotel}:EditHotelDialogProps) => {

  const [open, setOpen] = useState(false);

  const [hotelToEdit, setHotelToEdit] = useState<Hotel>(hotel)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    const updatedHotel = {...hotelToEdit, [name]: value}
    setHotelToEdit(updatedHotel);
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    editHotel(hotelToEdit);
    setOpen(false)
  }

  return (
    <div>
      <Button onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit this hotel</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            name="name"
            type="text"
            fullWidth
            variant="standard"
            value={hotelToEdit.name}
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
            value={hotelToEdit.address}
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
            value={hotelToEdit.country}
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
            value={hotelToEdit.city}
            onChange={(e) => {handleChange(e)}}
          />
          <TextField
            margin="dense"
            id="Phone Number"
            label="Phone Number"
            name="phoneNumber"
            type="text"
            fullWidth
            variant="standard"
            value={hotelToEdit.phoneNumber.toString()}
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
            value={hotelToEdit.website}
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
            value={hotelToEdit.email}
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

export default EditHotelDialog