import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SchoolIcon from '@mui/icons-material/School';

import Translator from '../../../../components/trasnlatecomponent'

function TextComponent({variant,Icone,Texto,Color}){

    return(
        <Box
        m={1}
        display="flex"
        alignItems="center"
        >
            <Box
            m={1}
            >
                <Icone 
                sx={{
                    color:"icon.main"
                }}
                />
            </Box>
            <Box
            m={1}
            >
                <Typography variant={variant} color={Color}>
                    {Texto}
                </Typography>
            </Box>
        </Box>
    )

}

function CardComponent({Nome,Tempo}){

    return(
        <Box
        m={2}
        >
            <Card
            >
                <CardContent
                
                >
                    <TextComponent
                    Color="text.primary"
                    Icone={SchoolIcon}
                    Texto={Nome}
                    variant="h5"
                    />
                    <TextComponent
                    Color="text.secondary"
                    Icone={AccessTimeIcon}
                    Texto={Tempo}
                    variant="h6"
                    />
                </CardContent>
            </Card>
        </Box>
    )

}

export default function SchoolFunction(){

    return(
        <Box
        display="flex"
        alignItems="center"
        // justifyContent="center"
        flexWrap="wrap"
        >
            <CardComponent
            Nome={<Translator
                path="about.school.academic.high.title"
            />}
            Tempo={<Translator
                path="about.school.academic.high.time"
            />}
            />
            <CardComponent
            Nome={<Translator
                path="about.school.academic.graduation.title"
            />}
            Tempo={<Translator
                path="about.school.academic.graduation.time"
            />}
            />
        </Box>
    )

}