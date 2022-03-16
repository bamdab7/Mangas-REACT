import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Product from '../Product/Product';
import './Container.css';
import Mangas from '../Mangas/Mangas';
import Categorias from '../Categorias/Categorias';

export default function Container() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <div className="tituloMangas">
                <h1>Mangas</h1>
            </div>
        <Grid container spacing={3}>
            <Grid item sm={12} md={12} lg={12} xl={12} >
                <Categorias/>
            </Grid>
            <Grid item sm={12} md={12} lg={12} xl={12} >
                <Mangas/>
            </Grid>
        </Grid>
    </Box>
    );
}
