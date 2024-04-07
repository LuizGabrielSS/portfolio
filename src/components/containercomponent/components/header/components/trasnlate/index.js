import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Avatar, Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import UsaVSG from "./usa.svg";
import BraVSG from "./brasil.svg"

function ItemComponent({Imagem,Nome,Value,valor}){

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
        <Typography 
        variant="body1" 
        color={
          Value === valor
          ? "text.translate"
          :"text.main"
        }
        >
          {Nome}
        </Typography>
        
      </Box>
    </Box>
  )

}

export default function SelectLanguage(){

    const { i18n } = useTranslation()

    const[Value,SetValue] = useState(null)
  
    function handleChangeLanguage(language) {
      i18n.changeLanguage(language)
      SetValue(language)
    }
  
    return(
      <Box
      width={window.innerWidth> 420 ? (window.innerWidth/8) : (window.innerWidth/3)}
      >
        <FormControl fullWidth>
          {
            Value === null
            ? <InputLabel
              SX={{
                text:"text.translate"
              }}
              >Linguagem/Language</InputLabel>
            : null
          }
        <Select
        autoWidth
        onChange={(value) => handleChangeLanguage(value.target.value)}>
          <MenuItem
            value="en-US"
          >
            <ItemComponent
            Imagem={UsaVSG}
            Nome="English"
            Value={Value}
            valor="en-US"
            />
          </MenuItem>
          <MenuItem
            value="pt-BR"
          >
            <ItemComponent
            Imagem={BraVSG}
            Nome="Português"
            Value={Value}
            valor="pt-BR"
            />
          </MenuItem>
        </Select>
        </FormControl>
      </Box>
    )
  
  }