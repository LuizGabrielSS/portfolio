import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import ContainerComponent from '../../components/container';
import EmptyComponent from '../../components/empty';
import CardComponent from './components/cards';
import SearchComponent from './components/search';

export default function ProjectScreen(){

    const { t } = useTranslation()
    
    const projects = t('projects.data',{returnObjects: true})

    const[data,setdata] = useState(projects)

    return(
        <ContainerComponent
        fixFooter={data.length === 0 }
        >
            <SearchComponent
            original={projects}
            setdata={setdata}
            />
            {
                data.length === 0 
                ? <EmptyComponent/>
                : <CardComponent
                data={data}
                />
            }
        </ContainerComponent>
    )

}