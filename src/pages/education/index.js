import React, { useState } from 'react';

import ContainerComponent from '../../components/container'
import StudiesComponent from './components/studies';
import { useTranslation } from 'react-i18next';
import SearchComponent from './components/search';
import { Box } from '@mui/material';
import FilterComponent from './components/filter';

export default function EducationScreen(){

    const { t } = useTranslation()

    const studies = t('school.formation',{returnObjects: true})

    const[dataStudies,SetDataStudies] = useState(studies)

    return(
        <ContainerComponent>
            <Box
            m={5}
            display='flex'
            justifyContent='space-between'
            >
                <Box
                m={1}
                width={window.innerWidth > 420 ? (window.innerWidth*6/10) : (window.innerWidth*5/10)}
                >
                    <SearchComponent
                    original={studies}
                    setdata={SetDataStudies}
                    />
                </Box>
                <Box
                m={1}
                width={window.innerWidth > 420 ? (window.innerWidth*1/10) : (window.innerWidth*2/10)}
                >
                    <FilterComponent
                    original={studies}
                    setdata={SetDataStudies}
                    />
                </Box>
            </Box>
            <Box
            width='100%'
            >
           <StudiesComponent
            data={dataStudies}
            />
            </Box>
        </ContainerComponent>
    )

}