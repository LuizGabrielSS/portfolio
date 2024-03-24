import React from 'react'
import { Box, Typography } from '@mui/material'

import Translator from '../../../trasnlatecomponent'

export default function TitleFunction({title}){

    return(
        <Box
        my={2}
        >
            <Typography
            variant="h3"
            >
                <Translator
                path={title}
                />
            </Typography>
        </Box>
    )

}