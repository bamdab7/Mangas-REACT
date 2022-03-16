import * as React from 'react';
import './Inicio.css';
import Grid from '@mui/material/Grid';
import ListImage from '../ListImage/ListImage';
import MangasDestacados from '../MangasDestacados/MangasDestacados';

export default function Principal() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <div className="tituloMangasDestacados">
                    <h1>Mangas en oferta por tiempo limitado!</h1>
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <MangasDestacados/>
            </Grid>
            
            <Grid item xs={12} sm={12} md={6} lg={7} xl={7}>
                <div className="textoInicio">
                    <p className="textopInicio">Lorem ipsum dolor sit amet consectetur adipiscing elit varius, ligula donec nam volutpat lacus dis nisi. Rhoncus feugiat aliquam accumsan dictum dis nullam vestibulum duis nibh eu litora curae, ut sem ligula gravida id laoreet pellentesque dictumst nascetur primis ornare. Sociosqu eros torquent porta porttitor pretium volutpat, fermentum hendrerit purus fusce erat tempus, venenatis commodo ridiculus urna dis.
                    </p>

                    <p className="textopInicio">Egestas praesent per vitae parturient aliquet molestie nostra mus, nullam pharetra sollicitudin purus velit facilisi fringilla torquent ultrices, est non rutrum hac orci hendrerit proin. Lacinia nascetur interdum nec aliquet faucibus tincidunt dui lectus torquent nisi mus natoque phasellus leo, quisque suspendisse platea ultrices neque magna nam orci inceptos viverra mollis litora. Magna ultrices dignissim lacinia id dui odio, enim inceptos in erat montes, eu duis urna penatibus mi.</p>

                    <p className="textopInicio">Cras conubia justo per diam netus mauris penatibus mi taciti erat, fermentum class euismod non himenaeos platea aenean torquent tellus, sociosqu fames facilisis dapibus curae habitant suspendisse urna condimentum. Felis penatibus semper torquent non inceptos fusce convallis mauris sagittis cras litora, cursus rhoncus magnis tellus nam bibendum dictumst morbi suspendisse. Vel sed per rutrum tempor lobortis tristique quam placerat, pellentesque libero bibendum ut felis dictum faucibus elementum, fermentum integer penatibus nam vulputate vehicula maecenas.</p>

                    <p className="textopInicio">Dignissim primis justo posuere in ultricies velit aliquam erat, luctus at bibendum tempus risus curabitur donec gravida elementum, sed leo nostra vehicula semper neque tempor. Vestibulum tellus nisi eget bibendum sapien vel lectus fermentum penatibus, neque massa vivamus per mi nisl quisque consequat, odio integer pretium magna et scelerisque sed laoreet. Vehicula arcu cras iaculis litora praesent tellus facilisis viverra ad sed, libero posuere vestibulum urna rutrum mi morbi condimentum tempus penatibus tortor, neque purus fusce cursus mauris duis ligula augue commodo. Aliquet nam mollis mi feugiat arcu tempus turpis imperdiet, risus velit himenaeos blandit est lacus taciti massa, per phasellus nec malesuada non felis fringilla.</p>
                    {/* <p className="textopInicio">Lorem ipsum dolor sit amet consectetur adipiscing elit convallis feugiat integer condimentum fusce, primis auctor justo tortor potenti class et volutpat congue lectus scelerisque. Id laoreet nec vel mauris posuere egestas etiam cras mus, mattis ornare purus montes fermentum taciti pulvinar ut, mollis habitasse nam suscipit vehicula dapibus rutrum sed.</p>*/}
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={5} xl={5} >
                <div className="list"> 
                    <ListImage/> 
                </div>
                
            </Grid>
        </Grid>
    );
}