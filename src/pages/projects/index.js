import React, { useState } from 'react';
import ContainerComponent from '../../components/container';
import { useTranslation } from 'react-i18next';
import CardComponent from './components/cards';
import SearchComponent from './components/search';

export default function ProjectScreen(){

    const { t } = useTranslation()
    
    const projects = t('projects.data',{returnObjects: true})

    const[data,setdata] = useState(projects)

    return(
        <ContainerComponent>
            <SearchComponent
            original={projects}
            setdata={setdata}
            />
            <CardComponent
            data={data}
            />
        </ContainerComponent>
    )

}