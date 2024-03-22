import React, { useState } from 'react'

import ContainerComponent from '../../components/containercomponent'
import SendForm from './components/sendform'
import SnackFunction from './components/snack'
import IconeFunction from './components/icones'

export default function ContactScreen(){

    const[OpenSnack,SetOpenSnack] = useState(false)

    const[MensagemSnack,SetMensagemSnack] = useState("")

    const[StatusSnack,SetStatusSnack] = useState(false)

    return(
        <ContainerComponent>
            <SnackFunction
            Mensagem={MensagemSnack}
            Open={OpenSnack}
            SetOpen={SetOpenSnack}
            Status={StatusSnack}
            />
            <SendForm
            SetOpen={SetOpenSnack}
            SetStatus={SetStatusSnack}
            SetMensagem={SetMensagemSnack}
            />
            <IconeFunction/>
        </ContainerComponent>
    )

}