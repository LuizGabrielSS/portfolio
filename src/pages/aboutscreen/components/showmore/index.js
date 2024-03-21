import React, { useState } from 'react'
import { Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function ShowMoreFunction({children,Nome}){

    const[Open,SetOpen] = useState(false)

    return(
        <List
        sx={{ width: "100%"}}
        >
            <ListItemButton onClick={() => SetOpen(!Open)}>
                <ListItemIcon>
                <ListItemText primary={Nome} />
                {
                     Open
                     ? <ArrowDropUpIcon
                         sx={{
                             color:"button"
                         }}
                         />
                     : <ArrowDropDownIcon
                         sx={{
                             color:"button"
                         }}
                         />
                 }
                
                </ListItemIcon>
            </ListItemButton>
            <Collapse timeout="auto" in={Open}>
                <Box
                mx={0}
                >
                    {children}
                </Box>
                
            </Collapse>
        </List>
    )

}