import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next'

import TranslatorData from '../../components/translate';
import ContainerComponent from '../../components/container';
import EmptyComponent from '../../components/empty';
import CardComponent from './components/cards';
import SearchComponent from './components/search';

export default function ProjectScreen(){
    
    console.log("Renderizou o componente!");

    const { t, i18n } = useTranslation();
    const [projects, setProjects] = useState([]);
    const[data,setdata] = useState(projects)
    useEffect(() => {
        const projeto = t('projects.data', { returnObjects: true })
        // Atualiza os projetos toda vez que o idioma mudar
        setProjects(projeto);
        setdata(projeto)
    }, [i18n.language, t]); // Depende do idioma atual e da função t

    return(
        <ContainerComponent
        fixFooter={data.length === 0}
        >
            <SearchComponent
            original={projects}
            setdata={setdata}
            />
            {
                data.length === 0 
                ? <EmptyComponent
                />
                : <CardComponent
                data={data}
                />
            }
        </ContainerComponent>
    )

}