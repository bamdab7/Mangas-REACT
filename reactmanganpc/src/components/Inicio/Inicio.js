import * as React from 'react';
import './Inicio.css';
import Grid from '@mui/material/Grid';
import Product from '../Product/Product';
import ListImage from '../ListImage/ListImage';

export default function Principal() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <div className="tituloMangasDestacados">
                    <h1>Mangas destacados</h1>
                </div>
            </Grid>
            <Grid item xs={4}>
                <Product/>
            </Grid>
            <Grid item xs={4}>
                <Product/>
            </Grid>
            <Grid item xs={4}>
                <Product/>
            </Grid>
            <Grid item xs={7}>
                <div className="textoInicio">
                    <p className="textopInicio">Lorem ipsum dolor sit amet consectetur adipiscing elit varius, ligula donec nam volutpat lacus dis nisi. Rhoncus feugiat aliquam accumsan dictum dis nullam vestibulum duis nibh eu litora curae, ut sem ligula gravida id laoreet pellentesque dictumst nascetur primis ornare. Sociosqu eros torquent porta porttitor pretium volutpat, fermentum hendrerit purus fusce erat tempus, venenatis commodo ridiculus urna dis.
                    </p>

                    <p className="textopInicio">Egestas praesent per vitae parturient aliquet molestie nostra mus, nullam pharetra sollicitudin purus velit facilisi fringilla torquent ultrices, est non rutrum hac orci hendrerit proin. Lacinia nascetur interdum nec aliquet faucibus tincidunt dui lectus torquent nisi mus natoque phasellus leo, quisque suspendisse platea ultrices neque magna nam orci inceptos viverra mollis litora. Magna ultrices dignissim lacinia id dui odio, enim inceptos in erat montes, eu duis urna penatibus mi.</p>

                    <p className="textopInicio">Cras conubia justo per diam netus mauris penatibus mi taciti erat, fermentum class euismod non himenaeos platea aenean torquent tellus, sociosqu fames facilisis dapibus curae habitant suspendisse urna condimentum. Felis penatibus semper torquent non inceptos fusce convallis mauris sagittis cras litora, cursus rhoncus magnis tellus nam bibendum dictumst morbi suspendisse. Vel sed per rutrum tempor lobortis tristique quam placerat, pellentesque libero bibendum ut felis dictum faucibus elementum, fermentum integer penatibus nam vulputate vehicula maecenas.</p>
                </div>
            </Grid>
            <Grid item xs={5}>
                <ListImage/>
            </Grid>
        </Grid>
    );
}