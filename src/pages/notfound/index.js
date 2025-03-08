import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import ContainerComponent from '../../components/container'
import LottieComponent from '../../components/lottie'
import ButtonComponent from '../../components/button';

export default function NotFoundScreen(){

    const { t } = useTranslation()

    const navegacao = useNavigate()

    return(
        <ContainerComponent
        fixFooter
        >
            <Dialog
            open={true}
            >
                <DialogTitle>
                    {t('notfound.title')}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {t('notfound.description')}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <ButtonComponent
                    Action={() => navegacao('/')}
                    Text={t('notfound.button')}
                    />
                </DialogActions>
            </Dialog>
            <LottieComponent
            gif="https://lottie.host/df74d5e3-d4e6-4287-b598-87b964cd1cf8/GPIz3D4k8x.json"
            />
        </ContainerComponent>
    )

}