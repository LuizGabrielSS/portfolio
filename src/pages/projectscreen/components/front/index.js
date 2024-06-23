import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Card, CardActions, CardContent, IconButton, Tooltip, Typography,CardMedia } from '@mui/material'
import { SimpleTreeView, TreeItem } from '@mui/x-tree-view'

import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';

import Translator from '../../../../components/trasnlatecomponent'

function IconeComponent({Titulo,Icone,url}){

    return(
        <Box
        m={1}
        >
            <Tooltip 
            title={Titulo}
            placement="bottom">
                <IconButton
                color="button" 
                onClick={() => window.location.href = url}
                size="large"
                >
                    <Icone
                    sx={{
                        color:"icon.main"
                    }}
                    />
                </IconButton> 
            </Tooltip>
        </Box>
    )

}

function ProjectsComponent({title,description,github,site,image}){

    return(
        <Box
        m={1}
        >
            <Card>
                <Box display="flex"
                alignItems="center"
                justifyContent="center"
                >
                    <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    src={`${process.env.PUBLIC_URL}${image}`}
                />
                    <Box>
                        <CardContent>
                    <Box
                    m={2}
                    >
                        <Typography variant="h5">
                            {title}
                        </Typography>
                    </Box>
                    <Box
                    m={2}
                    >
                        <Typography variant="body1">
                            {description}
                        </Typography>
                    </Box>
                </CardContent>
                <CardActions>
                    <IconeComponent
                    Icone={GitHubIcon}
                    Titulo={<Translator
                        path="project.github"
                    />}
                    url={github}
                    />
                    {
                        site !== ""
                        ? <IconeComponent
                        Icone={WebIcon}
                        Titulo={<Translator
                            path="project.site"
                        />}
                        url={site}
                        />
                        : null
                    }
                </CardActions>
                    </Box>
                </Box>
                
            </Card>
        </Box>
    )

}

function LanguagesCompoent({Titulo,projects}){

    return(
        <Box
        m={2}
        >
            <SimpleTreeView>
                <TreeItem itemId={Titulo} label={Titulo}>
                        <Box>
                            {
                                projects.map((item) => (
                                    <>
                                        <ProjectsComponent
                                        title={item.title}
                                        description={item.description}
                                        github={item.github}
                                        site={item.site}
                                        image={item.image}
                                        />
                                    </>
                                ))
                            }
                        </Box>
                </TreeItem>
            </SimpleTreeView>
        </Box>
    )

}

export default function FrontendFunction(){
    const { t } = useTranslation()

    const frontend_json = t("project.frontend.languages",{ returnObjects: true })

    return(
        <Box
        m={2}
        >
            {
                frontend_json.map((item) => (
                    <>
                        <LanguagesCompoent
                        projects={item.projects}
                        Titulo={item.title}
                        />
                    </>
                ) )
            }
        </Box>
    )

}