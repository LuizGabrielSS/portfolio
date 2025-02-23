import React, { useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';

import Header from '../header';

export default function ContainerComponent({seeHeader=true,children}){

    const [altura, setAltura] = useState(window.innerHeight);
    
    const [largura, setLargura] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
          setAltura(window.innerHeight);
          setLargura(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        // Limpeza do listener quando o componente for desmontado
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

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
        </Box>
    )   

}