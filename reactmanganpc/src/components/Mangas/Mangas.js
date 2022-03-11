import React, {useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Manga from '../Product/Product';

import axios from 'axios';

const GetMangas=()=>{
    const[mangas,setMangas] = useState([]);

    const fetchMangas= () => {
        axios.get('http://localhost:8080/manga/mangas').then(res=>{
            setMangas(res.data);
        });
    }

    useEffect(() => {
        fetchMangas();
    },[]);

    return mangas.map((manga,index) => {
        console.log(manga);
        return <Grid item xs={12} sm={1} md={5} lg={2} xl={2} sx={{ms:"auto",width:200}}>
            <Manga key={manga.id} manga={manga}/>
        </Grid>
    })
}

export default function Mangas() {
    return(
        <Grid container spacing={2}>
            <GetMangas/>
        </Grid>
    )
}