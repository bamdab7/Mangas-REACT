import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import './Product.css';


export default function RecipeReviewCard(props) {
    const{manga}=props;
    return (
    <Card sx={{ maxWidth: 300 }} className="card">
        <CardHeader
        title={manga.titulo} //TITULO MANGA
        // subheader={precio} //AUTOR 
        
        />
        <CardMedia
            component="img"
            image={manga.imagen}
            alt="Manga"
        />
        <CardActions disableSpacing>
            {/* <Link to = {'/detalle/id=${manga.id}'}>
            <IconButton aria-label="details">
                <RemoveRedEyeIcon />
            </IconButton>
            </Link> */}
        
            <IconButton aria-label="details" href={"/detalle/" + manga.id}>
                <RemoveRedEyeIcon />
            </IconButton> 
            <IconButton aria-label="share">
                < AddShoppingCartIcon />
            </IconButton>
        </CardActions>
    </Card>
    );
}
