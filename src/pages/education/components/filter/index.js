import React, { useEffect, useState } from 'react';
import { Box, Checkbox, Chip, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function FilterComponent({original,setdata}){

    const[tags,settags] = useState([])

    const[selectedTags,setSelectedTags] = useState([])

    const { t } = useTranslation()

    useEffect(() => {
        const uniqueTags = new Set();
        original.forEach(item => {
            item.tags.forEach(tag => {
                uniqueTags.add(tag.toUpperCase());
            });
        });
        settags(Array.from(uniqueTags));
    }, [original]);

    function filterFunction(text){
        setSelectedTags(
            typeof value === 'string' ? text.split(',') : text,
        )
        if (text.length === 0) {
            setdata(original);
        }else{
        const uniqueItems = new Set();
        original.forEach(item => {
            item.tags.forEach(tag => {
                if (text.includes(tag.toUpperCase())) {
                    uniqueItems.add(item);
                }
            })
        })
        setdata(Array.from(uniqueItems));
        }
    }

    return(
        <Box>
            <FormControl
            sx={{
                width: '100%',
            }}
            >
            <InputLabel>{t('school.filter.label')}</InputLabel>
            <Select
            multiple
            value={selectedTags}
            fullWidth
            onChange={(value) => {filterFunction(value.target.value)}}
            input={<OutlinedInput label={t('school.filter.label')} />}
            renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
                {
                    tags.map((value) => (
                        <MenuItem key={value} value={value}>
                            <Checkbox checked={selectedTags.includes(value)} />
                            <ListItemText primary={value} />
                        </MenuItem>
                    ))
                }
            </Select>
            </FormControl>
            
        </Box>
    )

}