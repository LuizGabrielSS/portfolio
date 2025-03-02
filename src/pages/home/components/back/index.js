import React from 'react';
import { Box,Typography } from '@mui/material';
import LottieComponent from '../../../../components/lottie';


function BoxComponent({ colorBack, colorText, text, lottie="" }) {

    const fontSize = window.innerWidth > 420 ? 'calc(10vw + 3vh)' : 'calc(10vw + 1vh)'

    return (
        <Box
            width={"50%"}
            sx={{
                backgroundColor: colorBack,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative', // Make sure the icons are positioned relative to this box
                overflow: 'hidden', // Hide icons that go outside the box
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0, // Ensure the Lottie animation is at the bottom
                    background: 'rgba(0, 0, 0, 0.7)', // Add a dark background to the Lottie animation
                }}
            >
                <LottieComponent
                    gif={lottie}
                />
            </Box>
            <Typography
                variant="h1"
                component="div"
                sx={{
                    color: colorText,
                    position: 'relative', // Ensure the text is above the icons
                    zIndex: 1, // Ensure the text is above the icons
                    fontSize: fontSize, // Adjust font size to fill maximum space
                    whiteSpace: 'nowrap', // Prevent text from wrapping
                }}
                >
                {text}
            </Typography>
        </Box>
    );
}


export default function BackgroundComponent(){

    return(
        <Box 
            display="flex"
            sx={{
                height:window.innerHeight,
                width:(window.innerWidth*98.9/100)
            }}
            >
            <BoxComponent
            colorBack="background.home_a"
            colorText="text.home_a"
            text="LUIZ"
            lottie="https://lottie.host/c8687693-04da-4e6d-b316-1e255e6318a0/DGegkTCbZF.lottie"
            />
            <BoxComponent
            colorBack="background.home_b"
            colorText="text.home_b"
            text="GABRIEL"
            lottie="https://lottie.host/2f0234b9-08dd-4877-99f5-9562e4e539e9/CxjUV1EjfP.lottie"
            />
        </Box>
    )

}