import React from 'react'
import { Box } from '@mui/material'
import Lottie from 'react-lottie';

export default function LottieComponent({Caminho_Lottie}){

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: Caminho_Lottie,
    };

    return(
        <Box
        m={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
        alignSelf="center"
        >
            <Lottie options={defaultOptions} height={window.innerHeight*9/10}/>
        </Box>
    )

}