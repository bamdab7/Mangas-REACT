import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function ListImage() {
    return (
        <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
            <ImageList variant="masonry" cols={3} gap={8}>
                {itemData.map((item) => (
                <ImageListItem key={item.img}>
                <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                />
                <ImageListItemBar position="below" title={item.author} />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}

const itemData = [
  {
    img: 'https://i0.wp.com/elpalomitron.com/wp-content/uploads/2019/01/Opinion-Manga-DarlingintheFRANXX-ElPalomitron4.jpg?resize=700%2C388&ssl=1',
    title: 'Darling in the franxx',
    author: 'Darling in the franxx',
  },
  {
    img: 'https://2img.net/h/oi41.tinypic.com/241w8pd.jpg',
    title: 'Dragon Ball Super',
    author: 'Dragon Ball Super',
  },
  {
    img: 'https://i.pinimg.com/originals/55/42/0c/55420c005edda1089d38dc10e3f7d837.png',
    title: 'Tokyo Mew Mew',
    author: 'Tokyo Mew Mew',
  },
  {
    img: 'https://ramenparados.com/wp-content/uploads/2017/02/sao-a-3.png',
    title: 'Sword Art Online',
    author: 'Sword Art Online',
  },
  {
    img: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2018/08/zoro_6.jpg?itok=c3uNGD6P',
    title: 'One Piece',
    author: 'One Piece',
  },
  {
    img: 'https://1.bp.blogspot.com/-GwjnySQbDPE/YQ08-2zVxiI/AAAAAAAAEhU/IlpYO-Of3HcsaO3QaBO-Cct20fBGzGjiwCLcBGAsYHQ/s0/07.jpg',
    title: 'Boku No Hero',
    author: 'Boku No Hero',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
    author: 'Ben Kolde',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
    author: 'Philipp Berndt',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
    author: 'Jen P.',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
    author: 'Douglas Sheppard',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
    author: 'Fi Bell',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
    author: 'Hutomo Abrianto',
  },
];
