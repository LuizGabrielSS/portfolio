import React from 'react'
import { Box } from '@mui/material'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function LottieComponent({gif}){

    return(
        <Box
        m={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
        alignSelf="center"
        >
            <DotLottieReact
                src={gif}
                loop
                autoplay
                height={window.innerHeight}
                width={window.innerWidth*4/10}
                />
        </Box>
    )
}