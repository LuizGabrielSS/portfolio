import React from 'react';
import { Box, Card, CardActions, CardContent, CardMedia, Chip, Typography } from '@mui/material';


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

function BoxesComponent({name, description, tags, date, Image, institution}){

    return(
        <Box
        m={2}
        sx={{
            width: window.innerWidth > 420 ? "20%" : "40%",
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
                sx={{
                    height: window.innerWidth > 420 ? (window.innerWidth/10) : (window.innerWidth/2) ,
                    objectFit: "cover"
                }}
                />
                <CardContent>
                    <Typography
                    variant={window.innerWidth > 420 ? "h5" : "body1"}
                    >
                        {name}
                    </Typography>
                    <Typography
                    variant={window.innerWidth > 420 ? "body1" : "body2"}
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
                >
                    <Box>
                        <Typography
                        variant={window.innerWidth > 420 ? "body1" : "body2"}
                        >
                            {institution}
                        </Typography>
                    </Box>    
                    <Box
                    sx={{
                        justifyContent: "flex-end",
                        paddingRight: "10px"
                    }}
                    >
                        <Typography
                        variant={window.innerWidth > 420 ? "body1" : "body2"}
                        >
                            {date}
                        </Typography>
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
                    institution={study.institution}
                    />
                ))
            }
        </Box>
    )

}