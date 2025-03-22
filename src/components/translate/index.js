import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Avatar, Box, FormControl, MenuItem, Select } from '@mui/material'
import UsaVSG from "./usa.svg";
import BraVSG from "./brasil.svg"


const Translator = React.memo(({ path }) => {
  const { t } = useTranslation();
  return t(path);
});

const TranslatorData = React.memo(({ path }) => {
  const { t } = useTranslation();
  return t(path, { returnObjects: true });
});
export default Translator

export {TranslatorData};

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

export function SwitchTranslate() {
  const { i18n } = useTranslation();

  // Verifica se já há um idioma salvo ou pega o idioma do navegador
  const defaultLanguage =
    localStorage.getItem("language") ||
    (["en-US", "pt-BR"].includes(navigator.language) ? navigator.language : "en-US");

  const [Value, SetValue] = useState(defaultLanguage);

  // Sempre que o idioma for alterado, o estado e o localStorage são atualizados
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && savedLanguage !== i18n.language) {
      // Muda o idioma no i18n
      i18n.changeLanguage(savedLanguage);
      SetValue(savedLanguage); // Atualiza o estado com o idioma salvo
    }
  }, [i18n]);

  function handleChangeLanguage(language) {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
    SetValue(language); // Atualiza o estado com o idioma selecionado
  }

  return (
    <Box mx={2} my={1}>
      <FormControl>
        <Select
          autoWidth
          value={Value} // Usa o estado Value aqui
          onChange={(e) => handleChangeLanguage(e.target.value)} // Passa o valor diretamente
        >
          <MenuItem value="en-US">
            <ItemComponent
              Imagem={UsaVSG}
              Nome="English"
              Value={Value}
              valor="en-US"
            />
          </MenuItem>
          <MenuItem value="pt-BR">
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
  );
}