import React from 'react'

import LottieFunction from '../../../lottiecomponent'
import LoadingView from './loading.json'

export default function LoadingScreen(){

    return(
        <LottieFunction
        Caminho_Lottie={LoadingView}
        />
    )

}