import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';


 const Manga = ({manga: {id,titulo,genero,saga,precio,imagen}}) => {

    return (
        <div>
            <p>{id}</p>
            <p>{titulo}</p>
        </div>
    );
 }

    const GetDetalle=(props)=>{
        const[manga,setManga]= useState([]);
        // const{onAdd}=props;
        // const location=useLocation();
        

        const fetchManga=()=>{
            console.log("Fetching manga " + props.id)
            axios.get('http://localhost:8080/manga/detalle/' + props.id).then(res=>{
                console.log("Detalle " + JSON.stringify(res.data));
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
                            <Manga manga={manga}/>
                            {/* esto lo muestro como el objeto */}
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }


    export default function DetalleMangas(props){ 
        const{onAdd}=props;
        const {id} = useParams();
        //const {from}= location.state;
        console.log("Id: " + id);
        return(
            <Grid>
                <GetDetalle id={id} onAdd={onAdd}/>
            </Grid>
        )
    }