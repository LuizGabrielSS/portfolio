import React, {useState} from 'react';
import ContainerComponent from '../../components/container';
import FormComponent from './components/form';

export default function ContactScreen(){

    const[Mensagem,SetMensagem] = useState("")

    const[Status,SetStatus] = useState("")

    const[Open,SetOpen] = useState("")

    return(
        <ContainerComponent>
            <FormComponent
            SetMensagem={SetMensagem}
            SetOpen={SetOpen}
            SetStatus={SetStatus}
            />
        </ContainerComponent>
    )

}