import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Product from '../Product/Product';

export default function SimpleContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container sx={{ margin: 2,mt:2, margin:"auto"}}  >
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', flexDirection:"row"}} >
                    <Product/>
                    <Product/>
                </Box>
            </Container>
        </React.Fragment>
    );
}
