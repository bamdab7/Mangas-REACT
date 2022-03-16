    import * as React from 'react';
    import { styled } from '@mui/material/styles';
    import Box from '@mui/material/Box';
    import ButtonBase from '@mui/material/ButtonBase';
    import Typography from '@mui/material/Typography';
    import {useNavigate} from 'react-router-dom';

    const images = [
    {
        url: 'https://www.industriaanimacion.com/wp-content/uploads/2021/08/Cover-5-960x504.jpg',
        title: 'Aventura',
        width: '20%',
    },
    {
        url: 'https://www.industriaanimacion.com/wp-content/uploads/2021/06/Cover-18.jpg',
        title: 'Comedia',
        width: '20%',
    },
    {
        url: 'https://www.industriaanimacion.com/wp-content/uploads/2021/06/Cover-14.jpg',
        title: 'Deporte',
        width: '20%',
    },
    {
        url: 'https://www.industriaanimacion.com/wp-content/uploads/2021/07/Cover-21.jpg',
        title: 'Misterio',
        width: '20%',
    },
    {
        url: 'https://www.industriaanimacion.com/wp-content/uploads/2021/02/Cover-12.jpg',
        title: 'Romance',
        width: '20%',
    },
    ];

    const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
        opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
        opacity: 0,
        },
        '& .MuiTypography-root': {
        border: '4px solid currentColor',
        },
    },
    }));

    const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
    });

    const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
    }));

    const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
    }));

    const ImageMarked = styled('span')(({ theme }) => ({
    height: 4,
    width: 20,
    backgroundColor: theme.palette.secondary.light,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
    }));

    export default function ButtonBases() {

    const navigate = useNavigate(); //me lleva a otra pestaña
    const handleOnClick = (title) => {
        navigate('/manga/genero/', {state: {info:title}}); //lo que va al cuerpo de la peticion
    }

        return (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
            {images.map((image) => (
                <ImageButton
                focusRipple
                key={image.title}
                style={{
                    width: image.width,
                }}
                //dentro de la definicion de imagen añadimos un boton
                onClick ={ () => handleOnClick(image.title)} //image title es lo que le pasamos al boton
                >
                <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Image>
                    <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    sx={{
                        position: 'relative',
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    }}
                    >
                    {image.title}
                    <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                </Image>
                </ImageButton>
            ))}
            </Box>
        );
        }
