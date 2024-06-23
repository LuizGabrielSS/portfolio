import React from 'react'
import { Box } from '@mui/material'
import { SimpleTreeView, TreeItem } from '@mui/x-tree-view';

export default function ShowMoreFunction({children,Nome}){

    return(
        <Box
        m={2}
        >
            <SimpleTreeView
            >
                <TreeItem itemId={Nome} label={Nome}>
                    {children}
                </TreeItem>
            </SimpleTreeView>
        </Box>
    )

}