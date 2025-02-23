import React from 'react';

import ContainerComponent from '../../components/container'
import BackgroundComponent from './components/back'
import DescriptionComponent from './components/description'


export default function NotFoundScreen(){

    return(
        <ContainerComponent
        // seeHeader={false}
        >
            <BackgroundComponent/>
            <DescriptionComponent/>
        </ContainerComponent>
    )

}