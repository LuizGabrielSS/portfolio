import React, { useState } from 'react'
import { Box, Toolbar, Typography,CssBaseline, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';

import Translator from '../../../trasnlatecomponent'

import SwitchMode from './components/switch'
import SelectLanguage from './components/trasnlate'
import DrawerNavigation from './components/drawernavigation'

export default function Header({children}){

    const drawerWidth = window.innerWidth> 420 ? (window.innerWidth/7) : (window.innerWidth/2)

    const[OpenDrawer,SetOpenDrawer] = useState(false)

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
      })(({ theme }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(OpenDrawer && {
          marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }),
      }));

    return(
        <Box
        sx={{display:'flex'}}
        >
            <CssBaseline />
            <AppBar 
            position="fixed" 
            open={OpenDrawer}
            sx={{
                backgroundColor:"primary.main",
            }}
            >
            <Toolbar
            sx={{
              display:"flex",
              justifyContent:"space-between"
            }}
            >
              <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              >
              <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => SetOpenDrawer(!OpenDrawer)}
              edge="start"
              sx={{
              marginRight: 5,
              ...(OpenDrawer && { display: 'none' }),
              }}
              >
                  <MenuIcon />
              </IconButton>
              <Typography variant="h6" placement="center" noWrap component="div">
                <Translator path="header.title"/>
              </Typography>
              </Box>
              <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              style={{
                  // position: 'fixed',
                  right: '20px',
                }}
              >
              <SwitchMode
              />
              <SelectLanguage
              />
              </Box>
            
            
            </Toolbar>
            </AppBar>
            <DrawerNavigation
            OpenDrawer={OpenDrawer}
            SetOpenDrawer={SetOpenDrawer}
            drawerWidth={drawerWidth}
            />
            <Box 
            component="main" 
            marginTop={9}
            >
                {children}
            </Box>
        </Box>
    )

}