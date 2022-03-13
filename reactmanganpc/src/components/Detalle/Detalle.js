import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Manga from '../Product/Product';
import axios from 'axios';
import {useLocation} from 'react-router-dom';



    const GetDetalle=(props)=>{

        const[manga,setManga]= useState([]);
        const{onAdd}=props;

        const location=useLocation();
        const {from}= location.state;

        const fetchManga=()=>{
            axios.get('http://localhost:8080/manga/detalle/' +from).then(res=>{
                setManga(res.data);
                
            });
        }

        useEffect(()=>{
            fetchManga();
        },[]);

        return(
            <div>
                <Grid containter spacing={2}>
                    <Grid item xs={11} sm={5} md={5} lg={6} xl={6} sx={{ms:"auto" , width: 100 }}>
                        <div>
                            <img src={manga.imagen} alt="imagen_manga"/>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }

    export default function DetalleMangas(props){

        const{onAdd}=props;

        return(
            <Grid>
                <GetDetalle onAdd={onAdd}/>
            </Grid>
        )
    }