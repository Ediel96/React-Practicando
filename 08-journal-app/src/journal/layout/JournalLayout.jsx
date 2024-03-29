import { Toolbar } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'
import { NavBar, SideBar } from '../components';

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display:'flex' }}>

        <NavBar drawerWidth={ drawerWidth }/>

        <SideBar drawerWidth={ drawerWidth }/>

        <Box
            component='main'
            style={{paddingLeft:'7vh'}}
            sx={{ flexGrow: 1, p:5 }}
            >
            
            {/* Toolbar */}
            <Toolbar/>
            { children }

        </Box>

    </Box>
  )
}
