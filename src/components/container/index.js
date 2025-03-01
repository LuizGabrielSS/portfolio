import React from 'react';
import { Box } from '@mui/material';

import Header from '../header';
import Footer from '../footer';

export default function ContainerComponent({seeHeader=true,fixFooter=false,children}){

    return(
        <Box
        >
            {/* <Container
            maxWidth="xl"
            > */}
                {
                    seeHeader
                    ?   <Header>
                            {children}
                        </Header>
                    : 
                    <>
                    {children}
                    </>
                    
                }
            {/* </Container> */}
            <Footer
            fixed={fixFooter}
            />
        </Box>
    )   

}