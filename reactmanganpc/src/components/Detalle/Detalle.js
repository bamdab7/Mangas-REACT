import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';

import axios from 'axios';
import {useParams } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Alert from '@mui/material/Alert';
import Fab from '@mui/material/Fab';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EuroIcon from '@mui/icons-material/Euro';
import PersonIcon from '@mui/icons-material/Person';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';


const Manga = ({manga: {id,titulo,genero,saga,precio,imagen}}) => {

    return (
        <div className="contenedor">
        <Grid container spacing={3}>
            <Grid item xs={11} sm={5} md={5} lg={6} xl={6} sx={{ mx: "auto", width: 200 }}>
                <div className="portada">
                    <img className="imagen" src={imagen} alt="img"/>
                </div>
            </Grid>
            <Grid item xs={10} sm={5} md={5} lg={6} xl={6} sx={{ mx: "auto", width: 200 }}>
                <div>
                    <h1>{titulo}</h1>
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar>
                                <TheaterComedyIcon/>
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={genero}/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar>
                                <LibraryBooksIcon/>
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={saga}/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar>
                                <EuroIcon/>
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={precio + "€"}/>
                        </ListItem>
                        <ListItem>
                            <Alert severity="success">Disponible</Alert>
                        </ListItem>
                        <ListItem>
                             {/* <Fab className="carrito" aria-label="add" onClick={() => {
                                onAdd(pelicula);
                            }}> */}
                                <AddShoppingCartIcon/>
                            {/* </Fab>  */}
                        </ListItem>
                    </List>
                </div>
            </Grid>
        </Grid>
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
                            <Manga manga={manga}/>
                            {/* esto lo muestro como el objeto */}
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