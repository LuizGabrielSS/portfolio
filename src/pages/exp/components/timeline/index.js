import React from 'react';
import { Box, Typography } from '@mui/material';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';


function Info({information}){

    return (
        <Box
        my={2}
        >
            <Typography
            variant={window.innerWidth> 420 ? "h5" : "body1"}
            sx={{
                color: "text.home_b",
            }}
            >
                {information}
            </Typography>
        </Box>
    )

}

function ComponentTimeLine({Title, time, Icon,setSelected,item,setOpen,index,last_item}){

    return(
        <Box
        my={3}
        onClick={() => {setSelected(item);setOpen(true)}}
        sx={{
            cursor: 'pointer',
            transition: 'background-color 0.3s ease-in-out',
            '&:hover': {
                backgroundColor: 'background.home_b'
            },
            border: '1px solid',
            borderRadius: '50px',
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        >
            <TimelineItem>
                <TimelineOppositeContent>
                    <Info
                    information={
                        index % 2 === 0
                        ? Title
                        : time
                    }
                    /> 
                </TimelineOppositeContent>
                <TimelineSeparator>
                <Box
                my={1}
                >
                    <TimelineDot>
                        <Icon
                        sx={{
                            color: "icon.home_b"
                        }}
                        />
                    </TimelineDot>
                    </Box>
                    {
                        index === last_item - 1
                        ? null
                        : <TimelineConnector />
                    }
                </TimelineSeparator>
                <TimelineContent>
                    <Info
                    information={
                        index % 2 === 0
                        ? time
                        : Title
                    }/>
                </TimelineContent>
            </TimelineItem>
            
        </Box>
    )

}


export default function TimeLineComponent({expirence, setSelected, setOpen}){

    const IconOptions = {
        "helper":ManageAccountsIcon,
        "analyst":AnalyticsIcon,
        "dev":IntegrationInstructionsIcon
    }

    return(
        <Box
        my={2}
        p={2}
        display='flex'
        justifyContent='center'
        alignItems='center'
        width={window.innerWidth}
        height={window.innerHeight/1.2}
        >
            <Timeline position="alternate-reverse">
                {
                    expirence.map((item, index) => (
                        <ComponentTimeLine 
                            key={index}  
                            index={index}
                            Title={item.title}
                            time={item.year + ' , ' + item.month}
                            Icon={IconOptions[item.icon]} 
                            setSelected={setSelected}
                            item={item}
                            setOpen={setOpen}
                            last_item={expirence.length}
                            />
                    ))
                }
            </Timeline>
        </Box>
    )

}