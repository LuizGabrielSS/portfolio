import React from 'react';
import { Box,Typography } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ComputerIcon from '@mui/icons-material/Computer';

function BoxComponent({ colorBack, colorText, text, Icone, colorIcon }) {
    const iconPositions = [
        { top: '10%', left: '20%' },
        { top: '30%', left: '40%' },
        { top: '50%', left: '60%' },
        { top: '70%', left: '80%' },
        { top: '20%', left: '10%' },
        { top: '40%', left: '30%' },
        { top: '60%', left: '50%' },
        { top: '80%', left: '70%' },
        { top: '15%', left: '25%' },
        { top: '35%', left: '45%' },
        { top: '55%', left: '65%' },
        { top: '75%', left: '85%' },
        { top: '25%', left: '15%' },
        { top: '45%', left: '35%' },
        { top: '65%', left: '55%' },
        { top: '85%', left: '75%' },
        { top: '5%', left: '50%' },
        { top: '95%', left: '50%' },
        { top: '50%', left: '5%' },
        { top: '50%', left: '95%' },
    ];

    const icons = iconPositions.map((position, index) => (
        <Icone
            key={index}
            sx={{
                position: 'absolute',
                top: position.top,
                left: position.left,
                opacity: 0.2, // Reduced opacity for fade effect
                fontSize: '2rem',
                color: colorIcon,
                transition: 'opacity 0.3s ease-in-out', // Smooth transition for fade effect
                '&:hover': {
                    opacity: 0.5, // Increase opacity on hover
                },
            }}
        />
    ));

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
            {icons}
            <Typography
                variant="h1"
                component="div"
                sx={{
                    color: colorText,
                    position: 'relative', // Ensure the text is above the icons
                    zIndex: 1, // Ensure the text is above the icons
                    fontSize: 'calc(10vw + 3vh)', // Adjust font size to fill maximum space
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
            colorIcon="icon.home_a"
            text="LUIZ"
            Icone={ComputerIcon}
            />
            <BoxComponent
            colorBack="background.home_b"
            colorText="text.home_b"
            colorIcon="icon.home_b"
            text="GABRIEL"
            Icone={MusicNoteIcon}
            />
        </Box>
    )

}