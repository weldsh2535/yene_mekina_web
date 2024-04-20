import React, { useState, useEffect } from 'react';
import { Drawer, Box, Collapse, IconButton, useMediaQuery, ThemeProvider, createTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import logo from '../../assets/images/logo.png';
import FeaturesPage from './features';
import Settings from './settings';
import Infos from './info';
import Home from './home';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getAdverts } from '../../api/notificationSlice';
const drawerWidth = 300;

export default function Dashboard() {
    const [selectedPage, setSelectedPage] = useState('Home');
    const [openSubMenu, setOpenSubMenu] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
    const isMobile = useMediaQuery('(max-width:600px)');

    const { t } = useTranslation()
    const dispatch = useDispatch();

    useEffect(
        async () => {
            dispatch(getAdverts());
        },
        [dispatch]
    );
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
                        <img src={logo} width="165px" height="56px" alt="Yene Mekina" />
                    </Box>
                    <List>
                        <ListItemButton sx={{ padding: '8px 16px' }} onClick={() => handleListItemClick('Home')}>
                            <ListItemIcon>
                                <svg class="h-8 w-8 text-black-low" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />  <polyline points="9 22 9 12 15 12 15 22" /></svg>
                            </ListItemIcon>
                            <ListItemText primary='Home' />
                        </ListItemButton>
                        <ListItemButton sx={{ padding: '8px 16px' }} onClick={() => handleListItemClick('Features')}>
                            <ListItemIcon>
                                <svg class="h-8 w-8 text-black-low" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="4" y="4" width="6" height="6" rx="1" />  <rect x="4" y="14" width="6" height="6" rx="1" />  <rect x="14" y="14" width="6" height="6" rx="1" />  <line x1="14" y1="7" x2="20" y2="7" />  <line x1="17" y1="4" x2="17" y2="10" /></svg>
                            </ListItemIcon>
                            <ListItemText primary='Features' />
                        </ListItemButton>


                        <ListItemButton sx={{ padding: '8px 16px' }} onClick={() => handleListItemClick('Settings')}>
                            <ListItemIcon>
                                <svg class="h-8 w-8 text-black-low" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />  <circle cx="12" cy="12" r="3" /></svg>
                            </ListItemIcon>
                            <ListItemText primary='Settings' />
                        </ListItemButton>
                        <ListItemButton sx={{ padding: '8px 16px' }} onClick={() => handleListItemClick('Info')}>
                            <ListItemIcon>
                                <svg class="h-8 w-8 text-black-low" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="12" y1="16" x2="12" y2="12" />  <line x1="12" y1="8" x2="12.01" y2="8" /></svg>
                            </ListItemIcon>
                            <ListItemText primary='Info' />
                        </ListItemButton>
                    </List>
                </div>

            </Drawer>
            <div style={{ flexGrow: 1, padding: '16px' }}>
                {selectedPage === 'Home' && <div><Home /></div>}
                {selectedPage === 'Features' && <div><FeaturesPage /></div>}
                {selectedPage === 'Settings' && <div><Settings /></div>}
                {selectedPage === 'Info' && <div><Infos /></div>}
            </div>
        </div>
    )
}
