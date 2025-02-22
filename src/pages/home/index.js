import React from 'react';

import ContainerComponent from '../../components/container'
import BackgroundComponent from './components/back'

export default function NotFoundScreen(){

    return(
        <ContainerComponent
        // seeHeader={false}
        >
            <BackgroundComponent/>
        </ContainerComponent>
    )

}