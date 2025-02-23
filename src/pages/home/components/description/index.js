import React from 'react';
import { Box,Typography } from '@mui/material';
import { useTranslation } from 'react-i18next'
import LanguageIcon from '@mui/icons-material/Language';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

function BoxThemComponent({Author, Text, Icon, Index}){

    return(
        <Box
        display="flex"
        sx={{
            flexDirection: Index % 2 === 0 ? 'row' : 'row-reverse'
        }}
        >
            <Box
            m={2}
            display='flex'
            alignItems='center'
            justifyContent='center'
            borderRadius='20px'
            sx={{
                width: '50%',
                height: '50%',
                backgroundColor: Index % 2 === 0? "background.home_a" : "background.home_b"
            }}
            >
                <Icon
                sx={{
                    width: '50%',
                    height: '50%',
                    color: Index % 2 === 0? "icon.home_b" : "icon.home_a"
                }}
                />
            </Box>
            <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            >
                <Box>
                    <Box
                    m={2}
                    >
                        <Typography
                        variant="h4"
                        component="div"
                        sx={{
                            color: Index % 2 === 0 ? "text.home_a" : "text.home_b"
                        }}
                        >
                            {Text}
                        </Typography>
                    </Box>
                    <Box
                    m={2}
                    >
                        <Typography
                        variant="h5"
                        component="div"
                        sx={{
                            color: Index % 2 === 0 ? "text.home_a" : "text.home_b"
                        }}
                        >
                            {Author}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )

}

function BoxMeComponent({Author, Text}){

    return(
        <Box
        m={2}
        >
            <Box
            m={2}
            >
                <Typography
                align='center'
                variant="h3"
                component="div"
                sx={{
                    color: "text.home_b"
                }}
                >
                    {Text}
                </Typography>
            </Box>
            <Box
            m={2}
            >
                <Typography
                align='center'
                variant="h4"
                component="div"
                sx={{
                    color: "text.home_b"
                }}
                >
                    {Author}
                </Typography>
            </Box>
        </Box>
    )

}


export default function DescriptionComponent(){

    const { t } = useTranslation()

    const them = t('home.about.them',{returnObjects: true})

    const themIcon = {
        "turismologa":LanguageIcon,
        "jornalista":NewspaperIcon,
        "contador":AccountBalanceIcon,
        "filosofia":AutoStoriesIcon,
    }

    return(
        <Box
        sx={{
            width:(window.innerWidth*98.9/100)
        }}
        p={2}
        >
            <Box
            m={2}
            >
                <Typography
                align='center'
                variant="h2"
                component="div"
                sx={{
                    color: "text.home_a"
                }}
                >
                    {t('home.about.title')}
                </Typography>
            </Box>
            <BoxMeComponent
            Author={t('home.about.me.author')}
            Text={t('home.about.me.text')}
            />
            {
                them.map((item,index) => (
                    <BoxThemComponent
                    key={index}
                    Author={item.author}
                    Text={item.text}
                    Icon={themIcon[item.icon]}
                    Index={index}
                    />
                ))
            }
        </Box>
    )

}