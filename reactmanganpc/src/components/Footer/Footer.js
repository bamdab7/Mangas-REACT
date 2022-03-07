import * as React from 'react';
import './Footer.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Footer =()=>{

    return(

    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <h1>texto</h1>
            </Grid>
            <Grid item xs={4}>
                <h1>texto</h1>
            </Grid>
            <Grid item xs={4}>
                <h1>texto</h1>
            </Grid>
            <Grid item xs={8}>
                <h1>texto</h1>
            </Grid>
        </Grid>
    </Box>
    
    );
}
export default Footer;