import React from 'react';
import { Box, Button } from '@mui/material';


export default function ButtonComponent({Text,Action,Disabled=false,variant="outlined",color='button.home_b',Icon}){

    return(
        <Box
        m={2}
        >
            <Button
            size="large"
            variant={variant}
            onClick={Action}
            sx={{
                color: color,
                borderColor: color,
            }}
            disabled={Disabled}
            {...(Icon && { startIcon: <Icon /> })}
            >
                {Text}
            </Button>
        </Box>
    )

}