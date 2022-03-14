import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import {Link} from 'react-router-dom';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({manga: {id,precio,titulo,imagen}}) {
    return (
    <Card sx={{ maxWidth: 300 }}>
        <CardHeader
        title={titulo} //TITULO MANGA
        subheader={precio} //AUTOR 
        />
        <CardMedia
            component="img"
            image={imagen}
            alt="Manga"
        />
        <CardActions disableSpacing>
            {/* <Link to = {'/detalle/id=${manga.id}'}>
            <IconButton aria-label="details">
                <RemoveRedEyeIcon />
            </IconButton>
            </Link> */}
        
            <IconButton aria-label="details" href={"/detalle/" + id}>
                <RemoveRedEyeIcon />
            </IconButton> 
            <IconButton aria-label="share" href="#">
                < AddShoppingCartIcon />
            </IconButton>
        </CardActions>
    </Card>
    );
}
