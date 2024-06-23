import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Card, Typography, CircularProgress } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language';
import ComputerIcon from '@mui/icons-material/Computer';
import PropTypes from 'prop-types';

function CircularProgressWithLabel(props) {

    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" {...props} 
        sx={{color:
            props.value >= 60
            ? "#00ff00"
            : "#ff0"
        }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            {`${props.value}%`}
          </Typography>
        </Box>
      </Box>
    );
  }

export default function HardSkillFunction(){

    CircularProgressWithLabel.propTypes = {
        /**
         * The value of the progress indicator for the determinate variant.
         * Value between 0 and 100.
         * @default 0
         */
        value: PropTypes.number.isRequired,
      };

    const { t } = useTranslation()

    const hardskill = t("about.abilities.hardskill.abilities",{ returnObjects: true })

    return(
        <Box
        m={2}
        >
            <Card>
            {
                hardskill.map((item) => (
                    <>
                        <Box m={2}>
                            <Box
                            p={2}
                            display="flex"
                            alignItems="space-between"
                            justifyContent="space-between"
                            >
                                {
                                    item.type === "prog"
                                    ? <ComputerIcon
                                    sx={{
                                        color:"icon.main"
                                    }}
                                        />
                                    : <LanguageIcon
                                    sx={{
                                        color:"icon.main"
                                    }}
                                    />
                                }
                                <Typography variant="body1">
                                    {item.name}
                                </Typography>
                                <CircularProgressWithLabel value={item.progress}/>
                            </Box>
                            
                        </Box>
                    </>
                ))
            }
            </Card>
        </Box>
    )

}