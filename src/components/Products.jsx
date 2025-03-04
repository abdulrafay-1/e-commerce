import './style.scss';
import { heroVector } from '../assets';
import Card from './Cards';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { heroImg, cardImg, cardImg2 } from '../assets';
import { useSelector } from 'react-redux';

const product = [
    {
        id: 123,
        title: "A beautiful girl in beautyfull abaya hai le lo ma jaldo!",
        slogan: "Explore now!",
        image: heroImg,
    },

    {
        id: 124,
        title: "A beautiful girl in beautyfull abaya hai le lo ma jaldo!",
        image: cardImg,
    },
    {
        id: 125,
        title: "A beautiful girl in beautyfull abaya hai le lo ma jaldo!",
        image: cardImg2,
    },
    {
        id: 126,
        title: "A beautiful girl in beautyfull abaya hai le lo ma jaldo!",
        image: heroImg,
    },

]

const Products = () => {

    const products = useSelector((state) => state.savedProducts);

    return (
        <div>
            <React.Fragment >
                <CssBaseline />
                <Container maxWidth="lg" className='card-main'>
                    <Box>
                        <div className='card-header'>
                            <span>
                                NEW ARRIVALS
                            </span>
                            <img src={heroVector} alt="vector" className='arrival-vector' />
                        </div>
                        <div className="card">
                            <Card products={products} />
                        </div>
                    </Box>
                </Container>
            </React.Fragment>
        </div>
    );
}

export default Products