import React from 'react'
import { Box, IconButton, Tooltip } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function IconeComponent({Titulo,Icone,link}){

    return(
        <Box
        m={2}
        >
            <Tooltip 
            title={Titulo}
            placement="bottom"
            >
                <IconButton 
                onClick={() => window.location.href = link}
                size="large"
                style={{
                    color:"button"
                }}
                >
                    <Icone
                    style={{
                        color:"button"
                    }}
                    />
                </IconButton>
            </Tooltip>
        </Box>
    )

}

export default function IconeFunction(){

    return(
            <Box
            m={2}
            alignItems="center"
            justifyContent="center"
            display="flex"
            width={
                window.innerWidth> 420
                ? window.innerWidth*4/5
                : "100%"
            }
            flexWrap="wrap"
            >
                <IconeComponent
                Titulo="Linkedin"
                Icone={LinkedInIcon}
                link="www.linkedin.com/in/luiz-gabriel-da-silva-samuel"
                />
                <IconeComponent
                Titulo="Github"
                Icone={GitHubIcon}
                link="https://github.com/LuizGabrielSS"
                />
                <IconeComponent
                Titulo="Instagram"
                Icone={InstagramIcon}
                link="https://www.instagram.com/lugabrielss/"
                />
            </Box>
    )

}