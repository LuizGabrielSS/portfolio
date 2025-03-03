import React from 'react';
import { Box, Drawer, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'


function BoxComponent({name, to, navegacao}){

    const { t } = useTranslation()

    return(
        <Box
        mx={2}
        onClick={() => navegacao(to)}
        display="flex"
        sx={{
            cursor: 'pointer',
        }}
        >
            <Typography
                sx={{
                    color: "text.top"
                }}
            >
                {t(`routes.${name}`)}
                
            </Typography>
        </Box>
    )

}


export default function Navigator(){

    const navegacao = useNavigate()

    return(
        <Box
        display="flex"
        alignContent="center"
        justifyContent="center"
        mt={3}
        >
            <BoxComponent
            name='project'
            navegacao={navegacao}
            to='/projects'
            /><BoxComponent
            name='exp'
            navegacao={navegacao}
            to='/exp'
            /><BoxComponent
            name='school'
            navegacao={navegacao}
            to='/school'
            />
            <BoxComponent
            name='contact'
            navegacao={navegacao}
            to='/contact'
            />
        </Box>
    )

}


export function DrawerNavigator({open, onClose, drawerWidth}){

    const navegacao = useNavigate()

    return(
        <Drawer
            variant="temporary"
            open={open}	
            onClose={onClose}
        >
            <Box
            sx={{
                width: drawerWidth
            }}
            >
                <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                mt={3}
                >
                    <BoxComponent
                    name='project'
                    navegacao={navegacao}
                    to='/projects'
                    />
                </Box>
                <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                mt={3}
                >
                    <BoxComponent
                    name='exp'
                    navegacao={navegacao}
                    to='/exp'
                    />
                </Box>
                <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                mt={3}
                >
                    <BoxComponent
                    name='school'
                    navegacao={navegacao}
                    to='/school'
                    />
                </Box>
                <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                mt={3}
                >
                    <BoxComponent
                    name='contact'
                    navegacao={navegacao}
                    to='/contact'
                    />
                </Box>
            </Box>
        </Drawer>
    )

}