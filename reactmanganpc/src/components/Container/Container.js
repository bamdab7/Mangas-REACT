import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Product from '../Product/Product';
import './Container.css';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Container() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <div className="tituloMangas">
                <h1>Mangas</h1>
            </div>
        <Grid container spacing={2}>
            <Grid item xs={6} sm={4} md={3} >
                <Product/>
            </Grid>
            <Grid item xs={6} sm={4} md={3} >
                <Product/>
            </Grid>
            <Grid item xs={6} sm={4} md={3} >
                <Product/>
            </Grid>
            <Grid item xs={6} sm={4} md={3}  >
                <Product/>
            </Grid>
            <Grid item xs={6} sm={4} md={3} >
                <Product/>
            </Grid>
            <Grid item xs={6} sm={4} md={3} >
                <Product/>
            </Grid>
            <Grid item xs={6} sm={4} md={3}  >
                <Product/>
            </Grid>
            <Grid item xs={6} sm={4} md={3} >
                <Product/>
            </Grid>
        </Grid>
    </Box>
    );
}
