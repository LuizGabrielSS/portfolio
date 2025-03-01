import React, {useState} from 'react';
import ContainerComponent from '../../components/container';
import FormComponent from './components/form';
import BackgroundComponent from './components/back';
import AlertComponent from './components/alert';

export default function ContactScreen(){

    const[Mensagem,SetMensagem] = useState("")

    const[Status,SetStatus] = useState("")

    const[Open,SetOpen] = useState("")

    return(
        <ContainerComponent
        fixFooter={true}
        >
            <BackgroundComponent>
            <AlertComponent
            Mensagem={Mensagem}
            Open={Open}
            SetOpen={SetOpen}
            Status={Status}
            />
                <FormComponent
                    SetMensagem={SetMensagem}
                    SetOpen={SetOpen}
                    SetStatus={SetStatus}
                />
            </BackgroundComponent>
        </ContainerComponent>
    )

}