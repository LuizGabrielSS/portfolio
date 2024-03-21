//Externas
import React from 'react'
import {Container,Box} from '@mui/material'
import { useSelector } from "react-redux";

//Internas
import LoadingScreen from './components/loading'
import ErrorScreen from './components/error'
import NetworkScreen from './components/network'
import Header from './components/header'

export default function ContainerComponent({Loading=false,Status=200,children}){

    const theme = useSelector((state) => state.mode.darkmode)

    return(
        <Box
        height={window.innerHeight}
        width={window.innerWidth}
        style={{
            backgroundColor:theme.mode === "light"
            ? null
            : "#000"
        }}
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