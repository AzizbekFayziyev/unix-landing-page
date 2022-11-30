import { ArrowDropDown } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Button, Container, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import image1 from "../../assets/images/section2.png";
import image2 from "../../assets/images/section3.png";
import Footer from './Footer';
import Form from './Form';

export default function Sections({ media }) {
    const accordionContent = [
        {
            summary: "Platform for gamers",
            details: "owned is not another p2e platform. It’s the only platform that puts games & gamers first. find play-to-own games based on user review.",
        },
        {
            summary: "Sdk for games",
            details: "owned is not another p2e platform. It’s the only platform that puts games & gamers first. find play-to-own games based on user review.",
        },
        {
            summary: "Web3 social app",
            details: "owned is not another p2e platform. It’s the only platform that puts games & gamers first. find play-to-own games based on user review.",
        },
        {
            summary: "Multi-chain launchpad",
            details: "owned is not another p2e platform. It’s the only platform that puts games & gamers first. find play-to-own games based on user review.",
        },
        {
            summary: "Gaming Studio",
            details: "owned is not another p2e platform. It’s the only platform that puts games & gamers first. find play-to-own games based on user review.",
        },
    ];
    // Sections
    return (
        <Container className='section' sx={{ my: 5 }} maxWidth="lg">
            <Typography
                id="products"
                color="text.primary"
                textAlign="center"
                variant="h3"
                gutterBottom
            >
                The unix ecosystem
            </Typography>

            <Typography
                textAlign="center"
                maxWidth={600}
                marginX="auto"
                variant="subtitle1"
                color="text.secondary"
            >
                wanted is a web3 social app created for discovery. you tell us what you’re
                interested in, and we help you find others to share your interests.
            </Typography>

            <Stack
                flexDirection="row"
                flexWrap={media ? "wrap" : "nowrap"}
                justifyContent="space-between"
                alignItems="center"
            >
                <img className='section__img' src={image1} alt="developer person" />

                <Box>
                    {accordionContent.map(({ summary, details }, id) => (
                        <Accordion key={id}>
                            <AccordionSummary expandIcon={<ArrowDropDown />}>
                                <Typography variant="subtitle1">{summary}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body1">{details}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>

            </Stack>

            <Stack
                sx={{ mt: 5 }}
                flexDirection="row"
                flexWrap={media ? "wrap" : "nowrap"}
                justifyContent="space-between"
                alignItems="center">
                <Box>
                    <Typography
                        id="unix"
                        color="text.primary"
                        variant='h3'
                        gutterBottom
                    >
                        Product, defined by it’s customer
                    </Typography>
                    <Typography
                        color="text.secondary"
                        variant="subtitle1"
                        gutterBottom
                    >
                        wanted is a web3 social app created for discovery. you tell us what you’re interested in, and we help you find others to share your interests.
                    </Typography>

                    <Button sx={{ mt: 2 }} className='outlinedBtn'>
                        <Typography color="text.primary" variant="button">Buy unix token</Typography>
                    </Button>
                </Box>
                <img className='section__img' src={image2} alt="customer" />
            </Stack>
            {/* Community form */}
            <Form media={media} />
            {/* Footer */}
            <Footer />
            {/* Background items */}
            <div className="bg-item bg-item1"></div>
            <div className="bg-item bg-item2"></div>
            <div className="bg-item bg-item3"></div>
            <div className="bg-item bg-item4"></div>
        </Container>
    )
}
