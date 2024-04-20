import React, { useState } from 'react';
import { Drawer, Box, Collapse, IconButton, useMediaQuery, ThemeProvider, createTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import DashboardIcon from '@mui/icons-material/Dashboard';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonIcon from '@mui/icons-material/Person';
import HelpIcon from '@mui/icons-material/Help';
import LocationsMap from './maps_component';
import RoleComponent from './roles';
import GroupsIcon from '@mui/icons-material/Groups';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import PermissionsComponenet from './permission';
const drawerWidth = 300;

export default function AdminHome() {
 const [selectedPage, setSelectedPage] = useState('Dashboard');
 const [openSubMenu, setOpenSubMenu] = useState(false); 
 const [openDrawer, setOpenDrawer] = useState(false);
 const isMobile = useMediaQuery('(max-width:600px)');
 const handleListItemClick = (page) => {
    setSelectedPage(page);
 };
 const toggleSubMenu = () => {
  setOpenSubMenu(!openSubMenu);
};
const toggleDrawer = () => {
  setOpenDrawer(!openDrawer);
};


 return (
    <div style={{ display: "flex" }}>
       {isMobile && (
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Drawer
        sx={{
          width: drawerWidth,
          background: '#f9f9f9',
          '& .MuiDrawer-paper': {
            marginTop: '10px',
            padding: '16px',
          },
        }}
        variant={isMobile ? "temporary" : "permanent"}
        anchor="left"
        open={isMobile ? openDrawer : true}
      >
          <div style={{ flexGrow: 1, padding: '16px' }}>
          <Box sx={{ padding: '16px', marginBottom: '16px' }}>
          <img src="https://mob.tewostechsolutions.com/assets/tewos.png" width="165px" height="56px" alt="Tewos Technology Solution" />
        </Box>
        <List>
          <ListItemButton sx={{ padding: '8px 16px' }} onClick={() => handleListItemClick('Dashboard')}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
          </ListItemButton>
          <ListItemButton sx={{ padding: '8px 16px' }} onClick={() => handleListItemClick('Maps')}>
            <ListItemIcon>
              <TravelExploreIcon />
            </ListItemIcon>
            <ListItemText primary='Maps' />
          </ListItemButton>
          {/* <ListItemButton sx={{ padding: '8px 16px' }} onClick={() => handleListItemClick('User Management')}>
            <ListItemIcon>
              <ManageAccountsIcon />
            </ListItemIcon>
            <ListItemText primary='User Management' />
          </ListItemButton> */}
          <ListItemButton sx={{ padding: '8px 16px' }} onClick={toggleSubMenu}>
            <ListItemIcon>
              <ManageAccountsIcon />
            </ListItemIcon>
            <ListItemText primary='User Management' />
          </ListItemButton>

          <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ padding: '8px 40px' }} onClick={() => handleListItemClick('Users')}>
              <ListItemIcon>
              <ManageAccountsIcon />
            </ListItemIcon>
                <ListItemText primary='Users' />
              </ListItemButton>
              <ListItemButton sx={{ padding: '8px 40px' }} onClick={() => handleListItemClick('Roles')}>
              <ListItemIcon>
              <GroupsIcon />
            </ListItemIcon>
                <ListItemText primary='Roles' />
              </ListItemButton>
              <ListItemButton sx={{ padding: '8px 40px' }} onClick={() => handleListItemClick('Permissions')}>
              <ListItemIcon>
              <LockPersonIcon />
            </ListItemIcon>
                <ListItemText primary='Permissions' />
              </ListItemButton>
              <ListItemButton sx={{ padding: '8px 40px' }} onClick={() => handleListItemClick('Activity Log')}>
              <ListItemIcon>
              <ManageAccountsIcon />
            </ListItemIcon>
                <ListItemText primary='Activity Log' />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton sx={{ padding: '8px 16px' }} onClick={() => handleListItemClick('Edit Profile')}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary='Edit Profile' />
          </ListItemButton>
          <ListItemButton sx={{ padding: '8px 16px' }} onClick={() => handleListItemClick('Help')}>
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary='Help' />
          </ListItemButton>
        </List>
      </div>
        
      </Drawer>
      <div style={{ flexGrow: 1, padding: '16px' }}>
        {selectedPage === 'Dashboard' && <div>Dashboard Content</div>}
        {selectedPage === 'Maps' && <div><LocationsMap/></div>}
        {selectedPage === 'Roles' && <div><RoleComponent/></div>}
        {selectedPage === 'Permissions' && <div><PermissionsComponenet/></div>}
        {selectedPage === 'User Management' && <div>User Management Content</div>}
        {selectedPage === 'Edit Profile' && <div>Edit Profile Content</div>}
        {selectedPage === 'Help' && <div>Help Content</div>}
      </div>
    </div>
 );
}
