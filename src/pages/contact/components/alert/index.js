import React from "react";
import { Alert, Box, Collapse, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export default function AlertComponent({Mensagem, Status, Open, SetOpen}){

    return(
        <Box
        m={2}
        >
            <Collapse in={Open}>
                <Alert
                variant="filled"
                action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        SetOpen(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
                severity={
                    Status === "success"
                    ? "success"
                    : "error"
                }
                >
                    {Mensagem}
                </Alert>
            </Collapse>
        </Box>
    )

}