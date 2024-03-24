import React from 'react'
import { useTranslation } from 'react-i18next'
import { Avatar, Box, MenuItem, Select, Typography } from '@mui/material'
import UsaVSG from "./usa.svg";
import BraVSG from "./brasil.svg"

function ItemComponent({Imagem,Nome}){

  return(
    <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    >
      <Box
      mx={1}
      >
        <Avatar 
        src={Imagem} 
        alt="SVG"
        variant="square"
        />
      </Box>
      <Box>
        <Typography variant="body1" color="text.translate">
          {Nome}
        </Typography>
        
      </Box>
    </Box>
  )

}

export default function SelectLanguage(){

    const { i18n } = useTranslation()
  
    function handleChangeLanguage(language) {
      i18n.changeLanguage(language)
    }
  
    return(
      <Box
      
      >
        <Select
        autoWidth
        defaultValue="pt-BR"
        onChange={(value) => handleChangeLanguage(value.target.value)}>
          <MenuItem
            value="en-US"
          >
            <ItemComponent
            Imagem={UsaVSG}
            Nome="English"
            />
          </MenuItem>
          <MenuItem
            value="pt-BR"
          >
            <ItemComponent
            Imagem={BraVSG}
            Nome="Português"
            />
          </MenuItem>
        </Select>
      </Box>
    )
  
  }