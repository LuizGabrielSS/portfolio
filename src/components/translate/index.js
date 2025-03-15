import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Avatar, Box, FormControl, MenuItem, Select } from '@mui/material'
import UsaVSG from "./usa.svg";
import BraVSG from "./brasil.svg"

const Translator = ({ path }) => {
    const { t } = useTranslation()
    return t(path)
  }

export default Translator

function ItemComponent({Imagem}){

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
        sx={{ 
          width: window.innerWidth > 420 ? (window.innerWidth/80) : (window.innerWidth/30), 
          height: window.innerWidth > 420 ? (window.innerWidth/80) : (window.innerWidth/30)
         }}
        />
      </Box>
    </Box>
  )

}

export function SwitchTranslate(){

    const { i18n } = useTranslation()

    const defaultLanguage = localStorage.getItem('language') || (["en-US", "pt-BR"].includes(navigator.language) ? navigator.language : "en-US");

    const [Value, SetValue] = useState(defaultLanguage);

    useEffect(() => {
      localStorage.setItem('language', Value);
      i18n.changeLanguage(Value);
    }, [Value]);

    function handleChangeLanguage(language) {
      i18n.changeLanguage(language)
      SetValue(language)
    }

    return(
      <Box
      mx={2}
      my={1}
      >
        <FormControl>
          <Select
          autoWidth
          value={Value}
          onChange={(value) => handleChangeLanguage(value.target.value)}>
            <MenuItem
              value="en-US"
            > <ItemComponent
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