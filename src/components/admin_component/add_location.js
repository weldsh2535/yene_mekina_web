import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { addLocations } from '../../api/mapSlice';

function AddLocationAlertDialog() {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    lat: '',
    lon: '',
    type: '',
    city: '',
    country: '',
    phone: '',
    email: '',
  });
  const [errors, setErrors] = useState({});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: false }); // Reset error state for the field
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = { ...errors };
    const fields = ['name', 'lat', 'lon', 'type', 'city', 'country'];
    fields.forEach(field => {
      if (!formData[field].trim()) {
        newErrors[field] = true;
      }
    });
    setErrors(newErrors);

    if (Object.values(newErrors).every(error => !error)) {
      const dataContainer = {
        'name': formData.name,
        "lat": parseFloat(formData.lat).toFixed(7),
        "lon": parseFloat(formData.lon).toFixed(7),
        "type": formData.type,
        "city": formData.city,
        "country": formData.country,
        "detail": { "phone": formData.phone },
        "apiKey": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjb21wYW55bmFtZSI6InpheXJpZGUiLCJpZCI6IjM1NTY1Mjk3LTZjZGUtNDVmNy1hYjllLTAwMjU1Y2MxZGVlZSIsInVzZXJuYW1lIjoiemF5cmlkZSJ9.s3mr--J2KM72MWedho9Vo5qOZn-zSk3IR1ZXZ73xppw"
      }
      console.log(dataContainer);

      dispatch(addLocations(dataContainer));
      handleClose();

    }
  };

  return (
    <div>
      <Button variant="outlined" sx={{ marginBottom: 2 }} onClick={handleOpen}>
        Add Location
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title">Add Location</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
          <Grid container spacing={2}>
              {/* Example for Name field */}
              <Grid item xs={12}>
                <TextField
                 autoFocus
                 margin="dense"
                 id="name"
                 label="Name"
                 type="text"
                 fullWidth
                 name="name"
                 value={formData.name}
                 onChange={handleChange}
                 error={errors.name}
                 helperText={errors.name ? 'Name is required' : ''}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                 autoFocus
                 margin="dense"
                 id="Latitude"
                 label="Latitude"
                 type="number"
                 fullWidth
                 name="lat"
                 value={formData.lat}
                 onChange={handleChange}
                 error={errors.lat}
                 helperText={errors.name ? 'Latitude is required' : ''}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                 autoFocus
                 margin="dense"
                 id="Longitude"
                 label="Longitude"
                 type="number"
                 fullWidth
                 name="lon"
                 value={formData.lon}
                 onChange={handleChange}
                 error={errors.lon}
                 helperText={errors.lon ? 'Longitude is required' : ''}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                 autoFocus
                 margin="dense"
                 id="type"
                 label="Type"
                 type="text"
                 fullWidth
                 name="type"
                 value={formData.type}
                 onChange={handleChange}
                 error={errors.type}
                 helperText={errors.type ? 'Type is required' : ''}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                 autoFocus
                 margin="dense"
                 id="country"
                 label="Country"
                 type="text"
                 fullWidth
                 name="country"
                 value={formData.country}
                 onChange={handleChange}
                 error={errors.country}
                 helperText={errors.type ? 'Country is required' : ''}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                 autoFocus
                 margin="dense"
                 id="city"
                 label="City"
                 type="text"
                 fullWidth
                 name="city"
                 value={formData.city}
                 onChange={handleChange}
                 error={errors.city}
                 helperText={errors.city ? 'City is required' : ''}
                />
                
              </Grid>
              <Grid item xs={12}>
                <TextField
                 autoFocus
                 margin="dense"
                 id="phone"
                 label="Phone"
                 type="text"
                 fullWidth
                 name="phone"
                 value={formData.phone}
                 onChange={handleChange}
                //  error={errors.city}
                //  helperText={errors.city ? 'City is required' : ''}
                />
                
              </Grid>
              
            </Grid>
          </DialogContent>
          <DialogActions>
                    <Button onClick={handleClose} class="btn btn-outline-danger">
                      Cancel
                    </Button>
                    <Button onClick={handleSubmit} class="btn btn-outline-success">
                      Submit
                    </Button>
                  </DialogActions>

        </form>
      </Dialog>
    </div>
  );
}

export default AddLocationAlertDialog;
