import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Product from '../Product/Product';
import './Container.css';
import Mangas from '../Mangas/Mangas';

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
        <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6} >
                <Mangas/>
            </Grid>
        </Grid>
    </Box>
    );
}
