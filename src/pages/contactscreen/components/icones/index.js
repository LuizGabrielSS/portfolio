import React from 'react'
import { Box, IconButton, Tooltip } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

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
                onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
                size="large"
                sx={{
                    color:"icon.main"
                }}
                >
                    <Icone
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
                link="https://linkedin.com/in/luiz-gabriel-da-silva-samuel"
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