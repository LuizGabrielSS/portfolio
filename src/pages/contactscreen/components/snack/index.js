import React from 'react'
import { Alert, Box, Slide, Snackbar } from '@mui/material'

export default function SnackFunction({Open,SetOpen,Status,Mensagem}){

    return(
        <Box>
            <Snackbar 
            open={Open} 
            autoHideDuration={6000}
            onClose={() => SetOpen(false)}
            TransitionComponent={(props) => <Slide {...props} direction="up" />}
            >
                <Alert
                onClose={() => SetOpen(false)}
                severity={
                    Status
                    ? "success"
                    : "error"
                }
                variant="outlined"
                >
                    {Mensagem}
                </Alert>
            </Snackbar>
        </Box>
    )

}