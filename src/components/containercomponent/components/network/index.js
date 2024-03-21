import React from 'react'
import { Box, Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

import LottieFunction from '../../../lottiecomponent'
import NetworkView from './network.json'

export default function NetworkScreen(){

    return(
        <Box>
            <Dialog
            open={true}
            >
                <DialogTitle>Parece ter ocorrido um problema de conexão</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                            Parece que voce esta tendo problemas com a sua conexão,
                            Por favor, vá pegar uma agua e tente novamente mais tarde
                        </DialogContentText>
                </DialogContent>
            </Dialog>
            <LottieFunction
            Caminho_Lottie={NetworkView}
            />
        </Box>
    )

}