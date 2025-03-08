import React, {useState,useEffect} from 'react';
import { Box, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser';
import SendIcon from '@mui/icons-material/Send';
import ButtonComponent from '../../../../components/button';


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
        sx={{
            backgroundColor: "background.top"
        }}
        >
            <TextField
            fullWidth
            label={Titulo}
            variant="outlined"
            rows={4}
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
            SetStatus(false)
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
        p={2}
        width={window.innerWidth > 420 ? (window.innerWidth/3) : 'auto'}
        height={window.innerWidth > 420 ? 'auto' : '80%'}
        sx={{
            borderRadius: '10px',
            backgroundColor: "background.top", // Set background to be slightly transparent
            backdropFilter: 'blur(10px)', // Apply blur effect
        }}
        >
            <InputComponent
            Informacao={EmailSender}
            PlaceHolder={(t("contact.form.email.placeholder"))}
            SetInformacao={SetEmailSender}
            Titulo={(t("contact.form.email.title"))}
            t={t}
            />
            <InputComponent
            Informacao={NameSender}
            PlaceHolder={(t("contact.form.name.placeholder"))}
            SetInformacao={SetNameSender}
            Titulo={(t("contact.form.name.title"))}
            t={t}
            />
            <InputComponent
            Informacao={MessageSender}
            PlaceHolder={(t("contact.form.message.placeholder"))}
            SetInformacao={SetMessageSender}
            Titulo={(t("contact.form.message.title"))}
            multiline={true}
            t={t}
            />
            <ButtonComponent
            Action={() => SendEmail()}
            Text={(t("contact.submit.button"))}
            Disabled={HabilitarSender}
            Icon={SendIcon}
            />
        </Box>
    )

}