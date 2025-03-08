import React from 'react';
import { useTranslation } from 'react-i18next';

import ContainerComponent from '../../components/container';
import CardsComponent from './components/cards';
import GraphComponent from './components/graph';

export default function AbilitiesScreen(){

    const { t } = useTranslation()
    
    const abilities = t('abilities.data',{returnObjects: true})

    return(
        <ContainerComponent>
            <GraphComponent data={abilities}/>
            <CardsComponent data={abilities}/>
        </ContainerComponent>
    )

}