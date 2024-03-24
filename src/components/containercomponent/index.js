//Externas
import React from 'react'
import {Container,Box} from '@mui/material'
import { useSelector } from "react-redux";

//Internas
import LoadingScreen from './components/loading'
import ErrorScreen from './components/error'
import NetworkScreen from './components/network'
import Header from './components/header'
import TitleFunction from './components/title'

export default function ContainerComponent({Loading=false,Status=200,children,title=""}){

    const theme = useSelector((state) => state.mode.darkmode)

    return(
        <Box
        height="100%"
        width="100%"
        >
            <Container>
                {
                    Loading
                    ? <LoadingScreen/>
                    :   <>
                        {
                            Status === 200
                            ?   <>
                                <Header>
                                    <TitleFunction
                                    title={title}
                                    />
                                    {children}
                                </Header>
                                </>
                            :   <>
                            {
                                Status.toLowerCase() === "network"
                                ? <NetworkScreen/>
                                : <ErrorScreen/>
                            }
                        </>
                        }
                        </>
                }
            </Container>
        </Box>
    )

}