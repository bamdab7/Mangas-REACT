import * as React from 'react';
import './Footer.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PaymentIcon from '@mui/icons-material/Payment';
import ContactlessIcon from '@mui/icons-material/Contactless';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

const Footer =()=>{

    return(
    
    <Box sx={{ flexGrow: 1 }}>
    <div className="footer">    
        <Grid container spacing={0.5}>
            <Grid item xs={6}>
                <p className="textoFooter">Lorem ipsum dolor sit amet consectetur.</p> 
                <p className="textoFooter">Accumsan neque molestie luctus pellentesque blandit justo sollicitudis.</p>
                <p className="textoFooter">Dis lobortis orci porttitor malesuada eget hac tellus aenean montes massa metus non.</p>
            </Grid>
            <Grid className="producto" item xs={6}>
                <Box sx={{ width: '50%' }}>
                    <Grid container spacing={1} rowSpacing={1.5}>
                        <Grid item xs={3}>
                            <EmailIcon/>
                        </Grid>
                        <Grid item xs={3}>
                            <FacebookIcon/>
                        </Grid>
                        <Grid item xs={3}>
                            <InstagramIcon/>
                        </Grid>
                        <Grid item xs={3}>
                            <TwitterIcon/>
                        </Grid>

                        <Grid item xs={4}>
                            <PaymentIcon/>
                        </Grid>
                        <Grid item xs={4}>
                            <ContactlessIcon/>
                        </Grid>
                        <Grid item xs={4}>
                            <CardGiftcardIcon/>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Grid className="footertexto" item xs={12}>
                <p>Venenatis ultrices himenaeos sollicitudin et eros habitant magna felis</p>
            </Grid>
        </Grid>
    </div>    
    </Box>
    
    );
}
export default Footer;