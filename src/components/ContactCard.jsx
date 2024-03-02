import './style.scss'
import { Box, Typography, Container } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PinDropIcon from '@mui/icons-material/PinDrop';

function ContactCard() {
    return (
        <div className='contact-card'>
            <Container className='contact-card'>
                <Box className='contact-header'>
                    <Typography variant='h4'>Contact Information</Typography>
                    <Typography variant='subtitle1'>Say something to start a live chat!</Typography>
                </Box>
                <Box mt={7} className='contact-info'>
                    <Typography mt={2} variant='body1'>
                        <WhatsAppIcon />
                        <a href='https://wa.me/+923252105103'>+92 3252105103</a>
                    </Typography>
                    <Typography mt={2} variant='body1'>
                        <MailOutlineIcon />
                        <a href='mailto:sharjeelhussain877@gmail.com'>sharjeelhussain877@gmail.com</a>
                    </Typography>
                    <Typography mt={2} variant='body1'>
                        <PinDropIcon />
                        <a href='https://www.google.com/maps?q=24.980749,66.9853283'>
                            75800 Gulshan-e-zia
                            Orangi Town, KHI
                            PK
                        </a>
                    </Typography>
                </Box>
                <Box mt={8} className='icons'>
                    <TwitterIcon />
                    <InstagramIcon />
                    <FacebookIcon />
                </Box>
            </Container>
        </div>
    )
}

export default ContactCard