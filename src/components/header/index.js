import React, { useState } from 'react'
import { Box, Toolbar, Typography,CssBaseline, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { useNavigate } from 'react-router-dom';

import Navigator, {DrawerNavigator} from '../navigator'
import {SwitchTranslate} from '../translate'
import SwitchMode from '../switchmode';

import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from '@mui/icons-material/Close';

export default function Header({children}){

    const[OpenList,SetOpenList] = useState(false)

    const drawerWidth = (window.innerWidth/2.5)

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
      })(({ theme }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(OpenList && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
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
            open={OpenList}
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
                    {
                    window.innerWidth> 420 
                    ? null
                    : <IconButton onClick={() => SetOpenList(!OpenList)}>
                    {
                        OpenList
                        ?<CloseIcon/>
                        :<ReorderIcon/>
                    }
                </IconButton>
                }
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
                        {
                            window.innerWidth> 420 
                            ? <Navigator/>
                            : null
                        }
                        {
                            window.innerWidth> 420 
                            ? <SwitchMode/>
                            : <SwitchMode/>
                        }
                        <SwitchTranslate/>
                    </Box>
                </Toolbar>
            </AppBar>
            {
                window.innerWidth> 420 
               ? null
                : <DrawerNavigator 
                    open={OpenList} 
                    onClose={() => SetOpenList(false)}
                    drawerWidth={drawerWidth}
                />
            }
            <Box 
            component="main" 
            marginTop={8}
            >
                {children}
            </Box>
        </Box>
    )

}