import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import ContainerComponent from '../../components/container'
import EmptyComponent from '../../components/empty';
import StudiesComponent from './components/studies';
import SearchComponent from './components/search';
import FilterComponent from './components/filter';


export default function EducationScreen(){

    const { t } = useTranslation()

    const studies = t('school.formation',{returnObjects: true})

    const[dataStudies,SetDataStudies] = useState(studies)

    return(
        <ContainerComponent
        fixFooter={dataStudies.length === 0 }
        >
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
                {
                    dataStudies.length === 0 
                    ? <EmptyComponent/>
                    : <StudiesComponent
                    data={dataStudies}
                    />
                }
            </Box>
        </ContainerComponent>
    )

}