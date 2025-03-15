import React, { useState } from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

function BoxesComponent({name, level, description}){

    const[open,setopen] = useState(false)

    function defineColor(){
        if(level >= 80){
            return "#4caf50"
        }
        else if(level > 50){
            return "#ff9800"           
        }else{
            return "#f44336"
        }
    }

    return(
        <Box
        m={2}
        p={2}
        onClick={() => setopen(!open)}
        sx={{
            cursor: "pointer",
            borderRadius: "10px",
            border: "1px solid #ccc",
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
            transition: "background-color 0.3s ease-in-out",
            '&:hover': {
                backgroundColor: "#f0f0f0"
            }
        }}
        >
            <Box
            display="flex"
            flexDirection="center"
            justifyContent="center"
            >
                <Box
                m={2}
                >
                <Typography
                variant={window.innerWidth > 420 ? 'h6' : 'body1'}
                >
                    {name}
                </Typography>
                </Box>
                <Box
                m={2}
                >
                    {
                        open ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>
                    }
                </Box>
            </Box>
            <Box  
            display="flex"
            alignItems="center"
            sx={{
                width: "90%"
            }}
            m={2}
            >
                <Box
                sx={{
                    width: "100%"
                }}
                >
                <LinearProgress
                variant="determinate"
                value={level}
                sx={{
                    ".MuiLinearProgress-bar":{
                        backgroundColor: defineColor(level),
                        transition: "background-color 0.3s ease-in-out"
                    },
                }}
                />
                </Box>
                <Box
                m={1}
                >
                    <Typography>
                        {level}%
                    </Typography>
                </Box>
                
            </Box>
            {
                open ? 
                (
                    <Box
                    m={1}
                    >
                        <Typography
                        variant={window.innerWidth > 420 ? 'h6' : 'body1'}
                        >
                            {description}
                        </Typography>
                    </Box>
                ) : null
            }            
        </Box>
    )

}

export default function CardsComponent({data}){

    return(
        <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="center"
            width={(window.innerWidth*98.9/100)}
            my={2}
        >
            <Box
            m={2}
            width={window.innerWidth > 420 ? (window.innerWidth/2.2) : (window.innerWidth/1)}
            sx={{
                borderRadius: "20px",
                border: "1px solid #ccc",
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)"
            }}
            >
                <Box
                m={2}
                display="flex"
                flexDirection="row"
                justifyContent="center"
                >
                <Typography
                variant={window.innerWidth > 420 ? 'h4' : 'h5'}
                sx={{
                    color:"text.home_a"
                }}
                >
                    HardSkill
                </Typography>
                </Box>
                <Box>
                    {
                        data.hardskill.map((skill, index) => (
                            <BoxesComponent
                            description={skill.description}
                            key={index}
                            level={skill.level}
                            name={skill.name}
                            />
                        ))
                    }
                </Box>
            </Box>
            <Box
            m={2}
            width={window.innerWidth > 420 ? (window.innerWidth/2.2) : (window.innerWidth/1)}
            sx={{
                borderRadius: "20px",
                border: "1px solid #ccc",
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)"
            }}
            >
                <Box
                m={2}
                display="flex"
                flexDirection="row"
                justifyContent="center"
                >
                    <Typography
                    variant={window.innerWidth > 420 ? 'h4' : 'h5'}
                    sx={{
                        color:"text.home_b"
                    }}
                    >
                        SoftSkill
                    </Typography>
                </Box>
                <Box>
                    {
                        data.softskill.map((skill, index) => (
                            <BoxesComponent
                            description={skill.description}
                            key={index}
                            level={skill.level}
                            name={skill.name}
                            />
                        ))
                    }
                </Box>
            </Box>
        </Box>
    )

}