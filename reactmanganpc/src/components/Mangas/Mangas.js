import React, {useState, useEffect} from 'react';
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
        return <Grid item xs={12} sm={5} md={3.85} lg={3} xl={2.15} sx={{ms:"auto",width:100}}>
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