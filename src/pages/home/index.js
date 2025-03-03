import React from 'react';

import ContainerComponent from '../../components/container'
import BackgroundComponent from './components/back'
import DescriptionComponent from './components/description'


export default function HomeScreen(){

    return(
        <ContainerComponent
        >
            <BackgroundComponent/>
            <DescriptionComponent/>
        </ContainerComponent>
    )

}