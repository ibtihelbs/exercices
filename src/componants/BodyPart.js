import React from 'react';
import { Stack } from '@mui/material';
import icon from '../assets/icons/gym.png';
// Box, Typography, TextField, Button,
const BodyPart = ({item,bodyPart, setBodyPart}) => {
    return (
        <Stack
        type= 'button'
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx = {{
            borderTop: bodyPart === item ?  '4px solid #ff2625': ''
            ,
            backgroundColor: '#fff',
            borderBottomLeftRadius: '20px', 
            width: '270px',
            height: '270px',
            cursor: 'pointer',
            gap: '48px'}}
        >
            
          <img src={icon} styles={ { width: '40px', height: '40px'} } />
        </Stack>
    );
};

export default BodyPart;