import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Card, CardActions, CardContent, IconButton, Tooltip, Typography } from '@mui/material'
import { SimpleTreeView, TreeItem } from '@mui/x-tree-view'

import GitHubIcon from '@mui/icons-material/GitHub';

import Translator from '../../../../components/trasnlatecomponent'

function ProjetosCompoent({title,description,github}){

    return(
        <Box
        m={1}
        >
            <Card>
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
                    <Box>
                        <Tooltip 
                        title={<Translator
                            path="project.github"
                        />}
                        placement="bottom">
                            <IconButton
                            color="button" 
                            onClick={() => window.location.href = github}
                            size="large"
                            sx={{
                                color:"icon.main"
                            }}
                            >
                                <GitHubIcon
                                style={{
                                    color:"icon.main"
                                }}
                                />
                            </IconButton> 
                        </Tooltip>
                    </Box>
                </CardActions>
            </Card>
        </Box>
    )
    
}

function CategoriasComponent({Titulo,Projetos}){

    return(
        <Box
        m={2}
        >
            <SimpleTreeView>
                <TreeItem itemId={Titulo} label={Titulo}>
                        <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flexWrap="wrap"
                        >
                            {
                                Projetos.map((item) => (
                                    <>
                                        <ProjetosCompoent
                                        title={item.title}
                                        description={item.description}
                                        github={item.github}
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

function LanguagesCompoent({Titulo,Categorias}){

    return(
        <Box
        m={2}
        >
            <SimpleTreeView>
                <TreeItem itemId={Titulo} label={Titulo}>
                        <Box>
                            {
                                Categorias.map((item) => (
                                    <>
                                        <CategoriasComponent
                                        Projetos={item.projects}
                                        Titulo={item.title}
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

export default function BackendFunction(){

    const { t } = useTranslation()

    const backend_json = t("project.backend.languages",{ returnObjects: true })

    return(
        <Box
        m={2}
        >
            {
                backend_json.map((item) => (
                    <>
                        <LanguagesCompoent
                        Categorias={item.categorias}
                        Titulo={item.title}
                        />
                    </>
                ) )
            }
        </Box>
    )

}