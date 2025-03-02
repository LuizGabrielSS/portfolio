import React from 'react'
import { Box, Toolbar, Typography,CssBaseline } from '@mui/material'
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { useNavigate } from 'react-router-dom';

import Navigator from '../navigator'
import {SwitchTranslate} from '../translate'

export default function Header({children}){

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
      })(({ theme }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      }));

    const navegacao = useNavigate()

    return(
        <Box
        sx={{display:'flex'}}
        >
            <CssBaseline />
            <AppBar 
            position="fixed" 
            sx={{
                backgroundColor:"background.top",
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
                        <Box
                        onClick={() => navegacao('/')}
                        sx={{
                            cursor: 'pointer'
                        }}
                        >
                            <Typography 
                                variant="h6" 
                                placement="center" 
                                noWrap 
                                component="div"
                                sx={{
                                    color: "text.top_principal"
                                }}
                                >
                                    {window.innerWidth > 420 ? 'Luiz/Gabriel/Silva/Samuel' : 'L/G/S/S'}
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                    sx={{
                        marginLeft: 'auto'
                    }}
                    display="flex"
                    alignContent="center"
                    justifyContent="center"
                    >
                        <Navigator/>
                        <SwitchTranslate/>
                    </Box>
                </Toolbar>
            </AppBar>
            
            <Box 
            component="main" 
            marginTop={8}
            >
                {children}
            </Box>
        </Box>
    )

}