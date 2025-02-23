import React, {useState,useEffect} from 'react';
import { Box, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser';

function ValidandoInfo(Informacao){

    if(Informacao !== null){
        const info = Informacao.replace(/\s/g, "");
        if(info.length > 0){
            return(false)
        }else{
            return(true)
        }
    }

}

function InputComponent({SetInformacao,Informacao,Titulo,PlaceHolder,multiline=false,t}){

    const[Erro,SetErro] = useState(false)

    useEffect(() => {
        SetErro(ValidandoInfo(Informacao))
    },[Informacao])

    return(
        <Box
        m={2}
        >
            <TextField
            fullWidth
            label={Titulo}
            variant="outlined"
            placeholder={PlaceHolder}
            defaultValue={Informacao}
            multiline={multiline}
            onChange={(value) => SetInformacao(value.target.value)}
            error={Erro}
            helperText={
                Erro
                ? (t("contact.form.status.erro"))
                : ""
            }
            />
        </Box>
    )

}

export default function FormComponent({SetMensagem, SetStatus, SetOpen}){

    const[EmailSender,SetEmailSender] = useState(null)

    const[NameSender,SetNameSender] = useState(null)

    const[MessageSender,SetMessageSender] = useState(null)

    const[HabilitarSender,SetHabilitarSender] = useState(true)

    const { t } = useTranslation()

    useEffect(() => emailjs.init(process.env.REACT_APP_PUBLIC_KEY), []);

    async function SendEmail(){
        await emailjs.send(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID,{
            sender:NameSender,
            reply_to:EmailSender,
            mensagem:MessageSender
        }).then((res) => {
            SetMensagem(t("contact.submit.status_ok"))
            SetStatus(true)
            SetOpen(true)
        }).catch((err) => {
            SetMensagem(t("contact.submit.status_not_ok"))
            SetStatus(true)
            SetOpen(true)
        })
    }

    useEffect(() => {
        if(ValidandoInfo(NameSender) === false){
            if(ValidandoInfo(EmailSender) === false){
                if(ValidandoInfo(MessageSender) === false){
                    SetHabilitarSender(false)  
                }else{
                SetHabilitarSender(true)  
                }
            }else{
            SetHabilitarSender(true)  
            }
        }else{
            SetHabilitarSender(true)  
        }
    },[NameSender,EmailSender,MessageSender])

    return(
        <Box
        m={2}
        sx={{
            marginLeft: 'auto'
        }}
        alignItems="center"
        justifyContent="center"
        display="flex"
        >
            <Box>
                <InputComponent
                Informacao={NameSender}
                PlaceHolder={(t("contact.form.name.placeholder"))}
                SetInformacao={SetNameSender}
                Titulo={(t("contact.form.name.title"))}
                t={t}
                />
            </Box>
        </Box>
    )

}