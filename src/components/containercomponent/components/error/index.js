import React from 'react'
import { Box, Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

import LottieFunction from '../../../lottiecomponent'
import ErrorView from './error.json'

export default function ErrorScreen(){

    return(
        <Box
        >
            <Dialog
            open={true}
            >
                <DialogTitle>Parece que voce encontrou um bug</DialogTitle>
                
                <DialogContent>
                    <DialogContentText>
                        Parece ter ocorrido um erro na sua solicitação,
                        Por favor relate ela ao desenvolvedor da plataforma
                    </DialogContentText>
                    
                </DialogContent>
            </Dialog>
            <LottieFunction
            Caminho_Lottie={ErrorView}
            />
        </Box>
    )

}