import React from 'react';
import { Box } from '@mui/material';
import LottieComponent from '../../../../components/lottie';

export default function BackgroundComponent({children}){

    return(
        <Box>
            <Box
            sx={{
                backgroundColor: "background.home_b",
                height: '100vh',
                width: '100vw',
                position: 'fixed',
                zIndex: '-1',
                display: 'flex',
                alignItems: 'center',
            }}
            >
                <LottieComponent
                gif="https://lottie.host/23879266-d2f7-438e-84ac-850469dd622e/Ovej7uH0C6.json"
                />
            </Box>
            <Box
                sx={{ 
                    display: 'flex', 
                    justifyContent: 'flex-end', 
                    height: '80vh',
                    width: '100vw',
                    position: 'fixed',
                    zIndex: '1'
                    }}
                >
                {children}
            </Box>
        </Box>
    )

}
