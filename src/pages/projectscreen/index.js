import React from 'react'

import ContainerComponent from '../../components/containercomponent'
import ShowMore from '../../components/showmore'
import Translator from '../../components/trasnlatecomponent'

import BackendFunction from './components/back'
import FrontendFunction from './components/front'

export default function ProjectScreen(){

    return(
        <ContainerComponent
        title="pages.project"
        >
            <ShowMore
            Nome={
                <Translator
                path="project.backend.title"
                />
            }
            >
                <BackendFunction/>
            </ShowMore>
            <ShowMore
            Nome={
                <Translator
                path="project.frontend.title"
                />
            }
            >
                <FrontendFunction/>
            </ShowMore>
        </ContainerComponent>
    )

}