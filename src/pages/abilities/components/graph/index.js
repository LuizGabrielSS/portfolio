import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';

function BoxesComponent({name, level, Icon, iconColor}){

    return(
        <Box
        m={2}
        p={2}
        sx={{
            borderRadius: "20px",
            border: "1px solid #ccc",
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)"
        }}
        >
            <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
                <Icon
                sx={{
                    color:iconColor,
                    fontSize: window.innerWidth*5/100
                }}
                />
            </Box>
            <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="center"
            >
                <Box
            m={2}
            >
                <Typography
                variant={window.innerWidth > 420 ? 'h4' : 'h5'}
                >
                    {name}:
                </Typography>
            </Box>
            <Box
            m={2}
            >
                <Typography
                variant={window.innerWidth > 420 ? 'h4' : 'h5'}
                sx={{
                    color:"#4caf50"
                }}
                >
                    {level}%
                </Typography>
            </Box>
            </Box>
        </Box>
    )

}

function Graph({hard, soft}){

    return(
        <Box
        m={2}
        sx={{
            borderRadius: "20px",
            border: "1px solid #ccc",
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)"
        }}
        >
        <BarChart
            xAxis={[
                { 
                scaleType: 'band', 
                data: ['HardSkill', 'SoftSkill']
             }]}
            series={[
                { 
                    data: [hard, soft],

                }]}
            width={window.innerWidth > 420 ? (window.innerWidth*30/100) : (window.innerWidth*70/100)}
            height={window.innerWidth > 420 ? (window.innerHeight*50/100) : (window.innerHeight*40/100)}
            sx={{
                "& .MuiBarElement-root:first-child": {
                  fill: "#25A6D9",
                },
                "& .MuiBarElement-root:last-child": {
                  fill:"#8C1F33",
                 },
              }}
        />   
        </Box>
    )

}

export default function GraphComponent({data}){

    const[softskill, setSoftskill] = useState({
        average: 0,
        max: {
            level: 0,
            name: ""
        }
    });

    const[hardskill, setHardskill] = useState({
        average: 0,
        max: {
            level: 0,
            name: ""
        }
    });

    function calculateStats(data) {
        let total = 0;
        let max = {
            level: 0,
            name: ""
        };

        data.forEach(item => {
            total += item.level;
            if (item.level > max.level) {
                max = item;
            }
        });

        const average = total / data.length;

        return { 
            average:average, 
            max:max };
    }

    useEffect(() => {
        const soft = calculateStats(data.softskill)

        const hard = calculateStats(data.hardskill)

        setSoftskill({ average: soft.average, max: soft.max });	
        setHardskill({ average: hard.average, max: hard.max });	
    }, [data]);

    return(
        <Box
        my={2}
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        width={(window.innerWidth*98.9/100)}
        >
            <Box
            m={2}
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="center"
            sx={{
                borderRadius: "20px",
                border: "1px solid #ccc",
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)"
            }}
            width={(window.innerWidth*90/100)}
            >
                <Box>
                    <Graph
                    soft={softskill.average}
                    hard={hardskill.average}
                    />
                </Box>
                <Box>
                    <BoxesComponent
                    level={softskill.max.level}
                    name={softskill.max.name}
                    Icon={CodeIcon}
                    iconColor="#4caf50"
                    />
                </Box>
                <Box>
                    <BoxesComponent
                    level={hardskill.max.level}
                    name={hardskill.max.name}
                    Icon={BrushIcon}
                    iconColor="#4caf50"
                    />
                </Box>
            </Box>
        </Box>
    )

}