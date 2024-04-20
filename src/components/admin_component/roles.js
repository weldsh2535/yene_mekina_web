import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Stack, Box } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import AddRoleAlertDialog from './add_role'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchRoles } from '../../api/userManagementSlice';


export default function PermissionsComponenet() {
  const dispatch = useDispatch();
    const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(
    () => {
      dispatch(fetchRoles());
    },
    [dispatch]
  );
  const urPerm = useSelector((state) => state.user.user.groups) || [];
  // console.log("the user permission is ",urPerm.groups);
  // const userPerm = urPerm.permissions != [] ? urPerm.permissions : []
  function openAddLocationDialog() {
    setDialogOpen(true);
  }

  const closAddLocationeDialog = () => {
    setDialogOpen(false);
  };


 return (
  <div>
    <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2,marginTop:"15px" }}>
    <h1  >
        All Role
      </h1>
      </Box>
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2,marginTop:"15px" }}>
    <AddRoleAlertDialog open={openAddLocationDialog} onClose={closAddLocationeDialog} />

    {/* <Button variant="outlined" sx={{ marginBottom: 2 }} >
        Add Permissions
      </Button> */}
      </Box>
   
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
 <TableRow style={{ backgroundColor: '#0275d8  ', color: 'white', }}>
    <TableCell>Id</TableCell>
    <TableCell>Name</TableCell>
    <TableCell>Actions</TableCell>

 </TableRow>
</TableHead>
       <TableBody> 

  {urPerm.map((role) => (
    <TableRow key={role.id}>
      <TableCell component="th" scope="row">
        {role.id}
      </TableCell>
      <TableCell component="th" scope="row">
        {role.name}
      </TableCell>
      <TableCell align="right"> 
        <Stack direction="row" spacing={2}>
          <Button variant="contained" class="btn btn-outline-primary">
            Edit
          </Button>
          <Button variant="contained" class="btn btn-outline-danger">
            Delete
          </Button>
        </Stack>
      </TableCell>
    </TableRow>
  ))} 
</TableBody>         

      </Table>
    </TableContainer>
  </div>
 );
}
