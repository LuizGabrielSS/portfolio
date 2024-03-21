//Libs externas
import React from 'react'
import { Box, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import { useLocation, useNavigate } from 'react-router-dom';
import MuiDrawer from '@mui/material/Drawer';

import Translator from '../../../../../trasnlatecomponent'

//Icones
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
})); 

function ButtonsNavigation({Local,Nome,Open,Icone}){

    const localizacao = useLocation();

    const navegacao = useNavigate()

    return(
            <Box
            >
                <ListItem>
                    <ListItemButton
                    onClick={() => navegacao(Local)}
                    sx={{
                        justifyContent: Open ? 'initial' : 'center',
                    }}
                    >
                        <ListItemIcon
                        sx={{
                            justifyContent: 'center',
                        }}
                        >
                            <Icone
                            sx={{
                                color:
                                Local === localizacao.pathname
                                ? "button.main"
                                : "text.secondary"
                            }}
                            />
                        </ListItemIcon>
                        <ListItemText sx={{ opacity: Open ? 1 : 0 }}>
                            <Typography
                            bold
                            color={
                                Local === localizacao.pathname
                                ? "text.main"
                                : "text.secondary"
                            }
                            >
                                {Nome}
                            </Typography>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </Box>
    )
}

export default function DrawerNavigation({OpenDrawer,SetOpenDrawer,drawerWidth}){

    const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
          width: drawerWidth,
          flexShrink: 0,
          whiteSpace: 'nowrap',
          boxSizing: 'border-box',
          ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
          }),
          ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
          }),
        }),
      );

    const closedMixin = (theme) => ({
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.up('sm')]: {
          width: `calc(${theme.spacing(8)} + 1px)`,
        },
    });

    const openedMixin = (theme) => ({
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
    });

    return(
        <Drawer variant="permanent" open={OpenDrawer}>
            <DrawerHeader>
                <IconButton onClick={() => SetOpenDrawer(!OpenDrawer)}>
                    {OpenDrawer ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider/>
            <List>
            
                <ButtonsNavigation
                Nome={<Translator
                    path="pages.home"
                />}
                Local='/'
                Open={OpenDrawer}
                Icone={HomeIcon}
                />
                <ButtonsNavigation
                Nome={<Translator
                    path="pages.about"
                />}
                Local='/about'
                Open={OpenDrawer}
                Icone={InfoIcon}
                />
            </List>
        </Drawer>
    )

}