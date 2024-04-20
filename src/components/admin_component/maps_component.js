import { useDispatch, useSelector } from 'react-redux';
import { fetchLocations, deleteLocation } from '../../api/mapSlice';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Stack, Box } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import AddLocationAlertDialog from './add_location';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LocationMap() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [showSuccess, setShowSuccess] = useState(true);
  useEffect(
    () => {
      // setShowSuccess(false);
      dispatch(fetchLocations());
    },
    [dispatch]
  );
  const navigate = useNavigate();
  const handleEditLocation = (locationData) => {
    navigate(`/user/admin/${locationData.id}/map/edit`, { state: { myData: locationData } });
  };
  console.log("welds")
  const locations = useSelector((state) => state.location.data) || [];
  const [dialogOpen, setDialogOpen] = useState(false);

  const openAddLocationDialog = () => {
    setDialogOpen(true);
  };

  const closAddLocationeDialog = () => {
    setDialogOpen(false);
  };
  const deleteStatus = useSelector((state) => state.location.deleteStatus);
  const handleDeleteLocation = async (id) => {
    try {
      await confirmDelete();
      dispatch(deleteLocation({ id }));
    } catch (error) {
      console.log("Deletion canceled by user.");
    }
  };

  function confirmDelete() {
    return new Promise((resolve, reject) => {
      const result = window.confirm("Are you sure you want to delete this location?");
      if (result) {
        resolve();
      } else {
        reject();
      }
    });
  }

  console.log("delete status is ", deleteStatus);
  return (
    <div className="App">
      {showSuccess && deleteStatus === "success" && (
        <div className="alert alert-success alert-dismissible">
          <button type="button" className="btn-close" onClick={() => setShowSuccess(false)}>
          </button>
          <strong>Success!</strong> Location deleted successfully!!
        </div>
      )}


      {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'green', width: '100%', padding: '10px' }}>
 {showSuccess && deleteStatus === "success" && (
    <div style={{ color: 'white' }}>
      Location deleted successfully.
    </div>
 )}
</div> */}

      {deleteStatus === "error" && (
        <div style={{ backgroundColor: 'red', width: '100%', color: 'white', padding: '10px' }}>
          Error deleting location.
        </div>
      )}

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2, marginTop: "15px" }}>
        {/* <button onClick={openAddLocationDialog}>Open Dialog from Another Component</button> */}
        <AddLocationAlertDialog open={openAddLocationDialog} onClose={closAddLocationeDialog} />
        {/* <Button variant="contained" class="btn btn-outline-success">
          Add Location
        </Button> */}
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead style={{ backgroundColor: '#0275d8 ', color: '#ffffff', }}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Latitude</TableCell>
              <TableCell align="right">Longitude</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="right">Country</TableCell>

              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {locations.map((location) => (
              <TableRow key={location.id}>
                <TableCell component="th" scope="row">
                  {location.name}
                </TableCell>
                <TableCell align="right">{location.latitude}</TableCell>
                <TableCell align="right">{location.longitude}</TableCell>
                <TableCell align="right">{location.type}</TableCell>
                <TableCell align="right">{location.City}</TableCell>
                <TableCell align="right">{location.Country}</TableCell>
                <TableCell align="right">
                  <Stack direction="row" spacing={2}>
                    <Button variant="contained" class="btn btn-outline-success" onClick={() => handleEditLocation(location)}>
                      Edit
                    </Button>
                    <Button variant="contained" class="btn btn-outline-danger" onClick={() => handleDeleteLocation(location.id)} >
                      Delete
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2, marginTop: "20px" }}>
        <Pagination
          count={10} // Assuming 10 items per page
          // page={page}
          // onChange={handlePageChange}
          color="primary"
          size="large"
        />
      </Box>  </div>
  );
}

export default LocationMap;
