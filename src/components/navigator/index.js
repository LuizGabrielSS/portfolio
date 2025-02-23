import React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

function BoxComponent({name, to, navegacao}){

    const { t } = useTranslation()

    return(
        <Box
        mx={2}
        onClick={() => navegacao(to)}
        sx={{
            cursor: 'pointer'
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
            name='contact'
            navegacao={navegacao}
            to='/contact'
            />
        </Box>
    )

}