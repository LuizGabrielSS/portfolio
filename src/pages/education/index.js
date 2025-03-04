import React from 'react';

import ContainerComponent from '../../components/container'
import StudiesComponent from './components/studies';
import { useTranslation } from 'react-i18next';

export default function EducationScreen(){

    const { t } = useTranslation()

    const studies = t('school.formation',{returnObjects: true})

    const[dataStudies,SetDataStudies] = [studies]

    return(
        <ContainerComponent>
            {/*
            Criar um search
            Criar um filter
            */}
            <StudiesComponent
            data={dataStudies}
            />
        </ContainerComponent>
    )

}