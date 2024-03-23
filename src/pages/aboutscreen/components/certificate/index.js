import React from 'react'
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { SimpleTreeView, TreeItem } from '@mui/x-tree-view';

import Translator from '../../../../components/trasnlatecomponent'

function CursoComponent({title,url}){

    return(
        <Box
        m={1}
        >
            <Card>
                <CardContent>
                    <Typography>
                        {title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Box
                    m={1}
                    >
                        <Button variant="outlined" color="button" onClick={() => window.location.href = url}>
                        <Translator
                            path="about.school.certificate.button"
                        />
                        </Button>
                    </Box>
                </CardActions>
            </Card>
        </Box>
    )

}

function CertifcatesComponent({title,cursos}){

    return(
        <Box
        m={2}
        >   
            <SimpleTreeView>
                    <TreeItem itemId={title} label={title}>
                        <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flexWrap="wrap"
                        >
                            {
                                cursos.map((item) => (
                                    <>
                                        <CursoComponent
                                        title={item.title}
                                        url={item.url}
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

export default function CertificatesFunction(){

    const { t } = useTranslation()

    const certifcates_json = t("about.school.certificate.cursos",{ returnObjects: true })

    return(
        <Box
        m={2}
        >
            {
                certifcates_json.map((item) => (
                    <>
                        <CertifcatesComponent
                        cursos={item.cursos}
                        title={item.title}
                        />
                    </>
                ))
            }
        </Box>
    )

}