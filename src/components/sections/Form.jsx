import { Alert, Box, Button, Snackbar, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import image from "../../assets/images/section4.png";

export default function Form({ media }) {
    const [snackbar, setSnackbar] = useState(false);
    // Form section
    return (
        <>
            <Stack
                sx={{ my: 5, mx: "auto" }}
                className='form'
                flexWrap={media ? "wrap-reverse" : ""}
                flexDirection="row"
                alignItems="center"
                justifyContent='center'
                id="community">
                <Box>

                    <Typography
                        variant='h4'
                        gutterBottom
                        color="text.primary">
                        Get unix gaming updates.
                    </Typography>

                    <Typography
                        variant='subtitle1'
                        color="text.secondary">
                        when it comes to partnering new blockchain games, we only want to partner with project of class,continue to drive the future evolution of blockchaining games.
                    </Typography>

                    <Stack alignItems="center" sx={{ mt: 3 }} flexDirection="row">
                        <TextField sx={{ mr: 2 }} variant='standard' label="Your email here" />
                        <Button onClick={() => setSnackbar(true)} className='containedBtn'><Typography variant="button" color="text.primary">Submit</Typography></Button>
                    </Stack>

                </Box>

                <img src={image} alt="join image" />
            </Stack>

            <Snackbar autoHideDuration={10000} open={snackbar} onClose={() => setSnackbar(false)}>
                <Alert onClose={() => setSnackbar(false)}>Your email sended successful!</Alert>
            </Snackbar>
        </>
    )
}
