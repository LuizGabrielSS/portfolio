import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Divider, Typography } from '@mui/material'

export default function SoftSkillFunction(){

    const { t } = useTranslation()

    const softskill = t("about.abilities.softskill.abilities",{ returnObjects: true })

    return(
        <Box
        m={2}
        >
            {
                softskill.map((item) => (
                    <>
                        <Box m={1}>
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
        </Box>
    )

}