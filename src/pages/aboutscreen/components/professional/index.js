import React, { useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, Divider, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WorkIcon from '@mui/icons-material/Work';
import ApartmentIcon from '@mui/icons-material/Apartment';
import GroupsIcon from '@mui/icons-material/Groups';

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
                    color:Color
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

function ExperienciaComponent({titulo,time,tempo,empresa,descricao}){

    const[Open,SetOpen] = useState(false)

    return(
        <Box
        m={2}>
            <Card>
                <CardContent>
                    <TextComponent
                    Color="text.primary"
                    Icone={WorkIcon}
                    Texto={titulo}
                    variant="h5"
                    />
                    <TextComponent
                    Color="text.secondary"
                    Icone={GroupsIcon}
                    Texto={time}
                    variant="h6"
                    />
                    <TextComponent
                    Color="text.secondary"
                    Icone={ApartmentIcon}
                    Texto={empresa}
                    variant="h6"
                    />
                    <TextComponent
                    Color="text.secondary"
                    Icone={CalendarMonthIcon}
                    Texto={tempo}
                    variant="body1"
                    />
                </CardContent>
                <CardActions>
                    <Box
                    m={1}
                    >
                        <Button variant="outlined" color="button" onClick={() => SetOpen(!Open)}>
                            {descricao.title}
                        </Button>
                    </Box>
                </CardActions>
                {
                Open
                ?   <Box
                    m={2}>
                        {
                            descricao.ativities.map((item) => (
                                <Box m={2}>
                                    <Typography variant="body1" >
                                        - {item}
                                    </Typography>
                                    <Divider
                                    color="text"
                                    />
                                </Box>
                            ))
                        }
                        
                    </Box>
                : null
            }
            </Card>
            
        </Box>
    )

}

export default function ProfessionalFunction(){

    const { t } = useTranslation()

    const experiencia_profissional = t("about.experience.profissional.jobs",{ returnObjects: true })

    return(
        <Box
        m={2}
        >
            {
                experiencia_profissional.map((item) => (
                    <>
                        <ExperienciaComponent
                        titulo={item.title}
                        time={item.team}
                        tempo={item.time}
                        empresa={item.company}
                        descricao={item.description}
                        />
                    </>
                ))
            
            }
        </Box>
    )

}