import React, { useState } from 'react';

import ContainerComponent from '../../components/container'
import TimeLineComponent from './components/timeline';
import { useTranslation } from 'react-i18next';
import DetailsComponent from './components/details';


export default function ExperienceScreen(){

    const { t } = useTranslation()
    
    const timeline = t('exp.content',{returnObjects: true})

    const[selected, setSelected] = useState(null)

    const[openDetails, SetOpenDetails] = useState(false)

    const drawerWidth = (window.innerWidth > 420 ? (window.innerWidth/2.5) : (window.innerWidth/1.5))
    
    return(
        <ContainerComponent
        fixFooter
        >
            <DetailsComponent
            drawerWidth={drawerWidth}
            item={selected}
            open={openDetails}
            onClose={() => SetOpenDetails(false)}
            />
            <TimeLineComponent
            expirence={timeline}
            setSelected={setSelected}
            setOpen={SetOpenDetails}
            />
        </ContainerComponent>
    )

}