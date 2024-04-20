import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { addRole } from '../../api/userManagementSlice';

function AddRoleAlertDialog() {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
   
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
    const fields = ['name'];
    fields.forEach(field => {
      if (!formData[field].trim()) {
        newErrors[field] = true;
      }
    });
    setErrors(newErrors);

    if (Object.values(newErrors).every(error => !error)) {
      const dataContainer = {
        "group_name": formData.name,
      
      }
      console.log("permission sent to server is ",dataContainer);

      dispatch(addRole(dataContainer));
      handleClose();

    }
  };

  return (
    <div>
      <Button variant="outlined" sx={{ marginBottom: 2 }} onClick={handleOpen}>
        Add Role
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title">Add Role</DialogTitle>
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
                 id="description"
                 label="Description"
                 type="text"
                 fullWidth
                 name="description"
                 value={formData.lat}
                 onChange={handleChange}
                 error={errors.lat}
                 helperText={errors.name ? 'Description is required' : ''}
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

export default AddRoleAlertDialog;
