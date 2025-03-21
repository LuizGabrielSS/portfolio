import React from 'react'
import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

export default function EmptyComponent(){

    const { t } = useTranslation()

    return(
        <Box
        sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        }}
        >
            <Box
            m={2}
            p={2}
            sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                borderRadius: '20px',
                backgroundColor: "background.home_a",
                width: '50%',
                height: '100%'
            }}
            >
                <Box>
                <Typography
                variant={window.innerWidth > 420 ? "h4" : 'h6'}
                align='center'
                component="div"
                sx={{
                    color: "text.back"
                }}
                >
                    {t('empty.title')}
                </Typography>
                <Typography
                variant={window.innerWidth > 420 ? "h5" : 'subtitle1'}
                align='center'
                component="div"
                sx={{
                    color: "text.back"
                }}
                >
                    {t('empty.description')}
                </Typography>
                </Box>
            </Box>
        </Box>
        
    )

}