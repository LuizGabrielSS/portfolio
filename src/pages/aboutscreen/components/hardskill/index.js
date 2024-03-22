import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Card, Divider, Typography } from '@mui/material'

export default function HardSkillFunction(){

    const { t } = useTranslation()

    const softskill = t("about.abilities.hardskill.abilities",{ returnObjects: true })

    return(
        <Box
        m={2}
        >
            <Card>
            {
                softskill.map((item) => (
                    <>
                        <Box m={2}>
                            <Typography variant="body1">
                                - {item}
                            </Typography>
                            <Divider
                                color="text"
                                />
                        </Box>
                    </>
                ))
            }
            </Card>
        </Box>
    )

}