import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Card, Typography } from '@mui/material'
import GroupsIcon from '@mui/icons-material/Groups';

export default function SoftSkillFunction(){

    const { t } = useTranslation()

    const softskill = t("about.abilities.softskill.abilities",{ returnObjects: true })

    return(
        <Box
        m={2}
        >
            <Card>
            {
                softskill.map((item) => (
                    <>
                        <Box m={2}>
                            <Box
                            p={2}
                            display="flex"
                            alignItems="space-between"
                            justifyContent="space-between"
                            >
                                <GroupsIcon
                                    sx={{
                                        color:"icon.main"
                                    }}
                                        />
                                <Typography variant="body1">
                                    {item}
                                </Typography>
                            </Box>
                        </Box>
                    </>
                ))
            }
            </Card>
        </Box>
    )

}