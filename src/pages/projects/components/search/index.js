import React, { useState } from 'react';
import { Box, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import Translator from '../../../../components/translate';

export default function SearchComponent({original,setdata}){

    const [SearchText,setSearchText] = useState("")

    const searchFunction = (text) => {
        const updatedData = original.filter((item) => {
            const text_data = text.toUpperCase()
            const item_data = `${item.name.toUpperCase()} and ${item.description.toUpperCase()}`
            return item_data.indexOf(text_data) > -1
        })
        setSearchText(text)
        setdata(updatedData)
    }

    return(
        <Box
        m={5}
        >
            <TextField
            label={<Translator path='projects.search.label' />}
            onChange={(value) => {searchFunction(value.target.value)}}
            value={SearchText}
            fullWidth
            slotProps={{
                input:{
                    endAdornment:
                        <SearchIcon/>
                    }
                }}
            />
        </Box>
    )

}