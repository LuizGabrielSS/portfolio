import React from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function SocialComponent({Icon, Link}){

    return(
        <Box
        mx={2}
        >
            <IconButton
            onClick={() => window.open(Link, '_blank')}
            >
                <Icon 
                sx={{
                    color:"icon.home_b"
                }}
                />
            </IconButton>
        </Box>
    )

}

export default function footerComponent({fixed=false}){

    const Footer = styled('footer')(({ theme }) => ({
        position: fixed === true ? 'fixed' : 'relative',
        bottom: 0,
        width: '100%',
        backgroundColor: theme.palette.background.top,
        padding: theme.spacing(2),
        textAlign: 'center',
        borderTop: '2px solid ',
        borderColor: theme.palette.background.home_a,
      }));

    return(
        <Footer
        sx={{display:'flex'}}
        >
            <Box
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            >
            <Typography
            sx={{
                color: "text.top_principal"
            }}
            >
              L. Gabriel S. S.
            </Typography>
          </Box>
          <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            sx={{
                marginLeft: 'auto'
            }}
          >
            <SocialComponent
            Icon={LinkedInIcon}
            Link='https://www.linkedin.com/in/luiz-gabriel-da-silva-samuel/'
            />
            <SocialComponent
            Icon={GitHubIcon}
            Link='https://github.com/LuizGabrielSS'
            />
          </Box>
        </Footer>
    )

}