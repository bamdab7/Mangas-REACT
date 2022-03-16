import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Manga from '../Product/Product';
import Categoria from '../Categorias/Categorias';


import axios from 'axios';
import {useLocation} from 'react-router-dom';

const GetCategoria=()=>{
    const[categorias,setCategorias] = useState([]);
    const{state}=useLocation(); //recogemos la info que viene a traves del state, dentro de info esta categoria
    const{info} =state; //info viene de categorias

    const fetchCategorias= () => {
        axios.get('http://localhost:8080/manga/genero/' + info).then(res=>{
            setCategorias(res.data);
        });
    }

    useEffect(() => {
        fetchCategorias();
    },[]);

    return categorias.map((manga,index) => {
        console.log(manga);
        return <Grid item xs={12} sm={5} md={3.85} lg={3} xl={2.15} sx={{ms:"auto",width:100}}>
            <Manga key={manga.id} manga={manga}/>
        </Grid>
    })
}

export default function Categorias() {
    return(
        <Grid container spacing={2}>
            <GetCategoria/>
        </Grid>
    )
}