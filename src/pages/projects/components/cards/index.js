import React from "react";
import { Box, Card, CardActions, CardContent, CardMedia, Chip, IconButton, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

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

function BoxesComponent({name, description, language, tech, github, type, image, url}){

    return(
        <Box
        m={2}
        sx={{
            width: window.innerWidth > 420 ? "40%" : "90%",
            height: window.innerWidth > 420 ? "100%" : "100%",
        }}
        >
            <Card 
                sx={{ 
                    display: 'flex',
                    margin: "10px",
                    borderRadius: "20px",
                    border: "1px solid #ccc",
                    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)"
                    }}>
                <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
                >
                    <CardContent>
                        <Box
                        my={2}
                        >
                            <Chip
                            label={language}
                            style={{backgroundColor: GenerateColor(language)}}
                            />
                        </Box>
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
                            tech.map((tag, index) => (
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
                    <CardActions>
                        <Box
                        display='flex'
                        justifyContent="center"
                        alignItems="center"
                        flexWrap="wrap"
                        >
                            <IconButton
                            onClick={() => window.open(github, '_blank')}
                            >
                                <GitHubIcon/>
                            </IconButton>
                            {
                                type === "frontend"
                                && <IconButton
                                    onClick={() => window.open(url, '_blank')}
                                    >
                                        <LinkIcon/>
                                    </IconButton>
                            }
                        </Box>
                    </CardActions>
                </Box>
                <CardMedia
                    component="img"
                    image={`${process.env.PUBLIC_URL}${image}`}
                    title={name}
                    />
            </Card>
        </Box>
    )

}

export default function CardComponent({data}){

    return(
        <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-around"
        mt={2}
        >
            {
                data.map((item) => (
                    <BoxesComponent
                    description={item.description}
                    name={item.name}
                    language={item.language}
                    tech={item.tech}
                    github={item.github}
                    type={item.type}
                    image={item.image}
                    url={item.url}
                    />
                ))
            }
        </Box>
    )

}