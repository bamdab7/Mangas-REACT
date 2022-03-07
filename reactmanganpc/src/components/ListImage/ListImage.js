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
    img: 'https://64.media.tumblr.com/39a1684200eba5350a12804aae45c735/1c8f93e6203fb685-49/s400x600/cc2be0ead08078036372fa189010a78c2a87b95b.png',
    title: 'Genshin impact',
    author: 'Genshin Impact',
  },
  {
    img: 'https://www.tebeosfera.com/T3content/img/T3_textosImg/u/k/imagen_1_4WuK.jpg',
    title: 'Sailor Moon',
    author: 'Sailor Moon',
  },
  {
    img: 'http://pulpfictioncine.com/download/multimedia.normal.9f76e7d966524cde.4b696d657473752d6e6f2d79616962615f6e6f726d616c2e6a7067.jpg',
    title: 'Demon Slayer',
    author: 'Demon Slayer',
  },
  {
    img: 'https://im2.fullrocketspeed.com/files/preview/lmim/13671/chapters/267823/6840406.jpg',
    title: 'Owari no Seraph',
    author: 'Owari no Seraph',
  },
  {
    img: 'https://http2.mlstatic.com/D_NQ_NP_936124-MLC42290380555_062020-O.jpg',
    title: 'Death Note',
    author: 'Death Note',
  },
  {
    img: 'https://www.leomangas.net/uploads/manga/nanatsu-no-taizai/chapters/344esp/005.jpg',
    title: 'Nanatsu no Taizai',
    author: 'Nanatsu no Taizai',
  },
  {
    img: 'https://1.bp.blogspot.com/-H6NXJYBeLMk/XeFFfXA-kJI/AAAAAAAFOxQ/-dzP2Z4rYH0537RPtm6MCsEp5cK0JhxUgCLcBGAsYHQ/s1600/978846793923101_g0001.jpg',
    title: 'Shingeki no Kyojin',
    author: 'Shingeki no Kyojin',
  },
];
