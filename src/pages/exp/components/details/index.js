import React from 'react';
import { Avatar, Box, Divider, Drawer, Typography,Chip } from '@mui/material';

function ContentComponent({item}){

    return(
        <Box>
            <Box mb={2}>
                <Avatar
                    sx={{
                        width: window.innerWidth > 420 ? "100%" : "100%",
                        height: window.innerWidth > 420 ? "300px" : "100%",
                    }}
                    src={item.picture}
                    variant="square"
                />
            </Box>
            <Divider sx={{ color: "background.home_a" }}>
                {item.company}
            </Divider>
            <Box my={2} display="flex" justifyContent="center" alignItems="center">
                <Typography 
                    variant="h5"
                    align="center"
                    sx={{ color: "text.top" }}
                >
                    {item.team} - {item.title}
                </Typography>
            </Box>
            <Divider sx={{ color: "background.home_a" }}>
                {item.year} - {item.year_end}
            </Divider>
            <Box
                display='flex'
                justifyContent="center"
                alignItems="center"
                flexWrap="wrap"
            >
                {
                    item.technologies.map((tech, index) => {
                        return (
                            <Box key={index} m={1}>
                                <Chip 
                                    label={tech} 
                                    sx={{
                                        color: "#fff",
                                        backgroundColor: index % 2 === 0? "background.home_b" : "background.home_a"
                                    }}
                                    />
                            </Box>
                        )
                    })
                }
            </Box>
            <Box m={2} display="flex" justifyContent="center" alignItems="center">
                <Typography
                    variant="h6"
                    sx={{ color: "text.top" }}
                >
                    {item.description}
                </Typography>
            </Box>
        </Box>
    )

}

export default function DetailsComponent({open, onClose, drawerWidth, item}){

    return(
        <Box
        >
            <Drawer
                variant="temporary"
                open={open}	
                onClose={onClose}
                anchor='right'
            >
                {
                    item !== null && item !== undefined
                    ? <Box
                    marginTop={10}
                    sx={{
                        width: drawerWidth
                    }}
                    >
                        <ContentComponent item={item}/>
                    </Box>
                    : null
                }
            </Drawer>
        </Box>
    )

}