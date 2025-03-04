import React from 'react';
import { Box, Card, CardActions, CardContent, CardMedia, Chip, IconButton, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';


function GenerateColor(text){

    let hash = 0;
    for (let i = 0; i < text.length; i++) {
        hash = (hash << 5) - hash + text.charCodeAt(i);
        hash = hash & hash; // Para garantir que o número seja de 32 bits
    }

    // Converter o hash para valores RGB
    let r = (hash >> 16) & 0xFF; // Extrai o valor da componente vermelha
    let g = (hash >> 8) & 0xFF;  // Extrai o valor da componente verde
    let b = hash & 0xFF;         // Extrai o valor da componente azul

    // Retorna a cor no formato hexadecimal
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

}

function BoxesComponent({name, description, tags, date, Image}){

    return(
        <Box
        m={2}
        sx={{
            width: window.innerWidth > 420 ? "30%" : "100%",
            height: window.innerWidth > 420 ? "100%" : "100%",
        }}
        >
            <Card
            sx={{
                width: window.innerWidth > 420 ? "100%" : "100%",
                height: window.innerWidth > 420 ? "100%" : "100%",
                margin: "10px",
                borderRadius: "20px",
                border: "1px solid #ccc",
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)"
            }}
            >
                <CardMedia
                component="img"
                image={`${process.env.PUBLIC_URL}${Image}`}
                title={name}
                />
                <CardContent>
                    <Typography
                    variant="h5"
                    >
                        {name}
                    </Typography>
                    <Typography
                    variant="body1"
                    >
                        {description}
                    </Typography>
                    <Box
                    m={2}
                    display='flex'
                    justifyContent="center"
                    alignItems="center"
                    flexWrap="wrap"
                    >
                        {
                            tags.map((tag, index) => (
                                <Box
                                m={1}
                                >
                                    <Chip
                                    key={index}
                                    label={tag}
                                    style={{backgroundColor: GenerateColor(tag)}}
                                    />
                                </Box>
                            ))
                        }
                    </Box>
                </CardContent>
                <CardActions
                sx={{
                    justifyContent: "flex-end",
                    paddingRight: "10px"
                }}
                >    
                    <Box>
                        <Typography>
                            {date}
                        </Typography>
                    </Box>           
                    <Box>
                        <IconButton>
                            <DownloadIcon 
                            />
                        </IconButton>    
                    </Box>                 
                    </CardActions>
            </Card>
        </Box>
    )

}

export default function StudiesComponent({data}){

    return(
        <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-around"
        >
            {
                data.map((study, index) => (
                    <BoxesComponent 
                    key={index}
                    Image={study.image}
                    name={study.name}
                    description={study.description}
                    tags={study.tags}
                    date={study.date}
                    />
                ))
            }
        </Box>
    )

}