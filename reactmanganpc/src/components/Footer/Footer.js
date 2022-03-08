import * as React from 'react';
import './Footer.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Footer =()=>{

    return(
    
    <Box sx={{ flexGrow: 1 }}>
    <div className="footer">    
        <Grid container spacing={0.5}>
            <Grid item xs={6}>
                <p className="textoFooter">Lorem ipsum dolor sit amet consectetur.</p> 
                <p className="textoFooter">Accumsan neque molestie luctus pellentesque blandit justo sollicitudis.</p>
                <p className="textoFooter">Dis lobortis orci porttitor malesuada eget hac tellus aenean montes massa metus non.</p>
            </Grid>
            <Grid item xs={6}>
                <h1>texto</h1>
            </Grid>
            <Grid item xs={4}>
                <h1>texto</h1>
            </Grid>
            <Grid item xs={8}>
                <h1>texto</h1>
            </Grid>
        </Grid>
    </div>    
    </Box>
    
    );
}
export default Footer;