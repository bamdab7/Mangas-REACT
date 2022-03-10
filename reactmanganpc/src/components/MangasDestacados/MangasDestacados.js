import React, {useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Manga from '../Product/Product';

import axios from 'axios'; //me permite coger cosas de la base de dato


const GetMangasDestacados = () => {

    const [mangasDestacados, setMangasDestacados] = useState([]);

    const fetchMangasDestacados = () => {
        axios.get('http://localhost:8080/manga/mangas').then(res => {
            setMangasDestacados(res.data);
            console.log(res.data);
        });
    }

    useEffect(() => {
        fetchMangasDestacados();
    }, []);

    return mangasDestacados.map((mangaDestacado, index) => {
        console.log(mangaDestacado);
        return  <Grid item xs={12} sm={1} md={5} lg={2} xl={2} sx={{ mx: "auto", width: 200 }}>
                    <Manga key={mangaDestacado.id} manga={mangaDestacado}/>
                </Grid>
    })

}

export default function MangasDestacados(){
    return(
        <Grid container spacing={2} >
            <GetMangasDestacados/>
        </Grid>
        


    );
}