import { Button, Grid, Stack, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import Navbar from './Navbar';
import mainImg from "../../assets/images/section1.png";
import serviceImg1 from "../../assets/images/headerImg1.png";
import serviceImg2 from "../../assets/images/headerImg2.png";
import serviceImg3 from "../../assets/images/headerImg3.png";
import serviceImg4 from "../../assets/images/headerImg4.png";

export default function Header({ media }) {
    const serviceCards = [
        {
            badge: 11.2,
            img: serviceImg1,
            title: "Artwork",
        },
        {
            badge: 9.8,
            img: serviceImg2,
            title: "Designs",
        },
        {
            badge: 11.2,
            img: serviceImg3,
            title: "Devlopment",
        },
        {
            badge: 11.2,
            img: serviceImg4,
            title: "Marketing",
        },
    ]
    // Header Home Section
    return (
        <header className='header'>
            <Container id="home" maxWidth="lg">
                <Navbar media={media} />
                <Stack
                    className='header__content'
                    flexWrap="wrap-reverse"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ pt: 15, pb: 6 }}>

                    <Box sx={{ mt: 5 }}>
                        <Typography fontWeight={600} color="text.primary" variant="h2" gutterBottom>
                            Kickstart your <br /> web3 game
                        </Typography>

                        <Typography gutterBottom color="text.secondary" variant="h6">
                            unix gaming provides what all games need to succed: <br />
                            gamers, technology & funding
                        </Typography>

                        <Button sx={{ mt: 2 }} className='containedBtn'>
                            <Typography variant="button" color="text.primary">Kickstart my game</Typography>
                        </Button>
                    </Box>

                    <Box>
                        <img src={mainImg} alt="person with VR" />
                    </Box>
                </Stack>

                <Grid sx={{ pb: 5 }} justifyContent="center" container spacing={2}>
                    {serviceCards.map(({ badge, img, title }, id) => (
                        <Grid item
                            md={3} sm={6} xs={12}
                            key={id}>
                            <div className="headerCard">
                                <div className="headerCard__badge">{badge}K</div>
                                <img className="headerCard__img" src={img} alt={title} />
                                <Typography className="headerCard__text" color="text.primary" variant="subtitle1">{title}</Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>

            </Container>

        </header>

    )
}
