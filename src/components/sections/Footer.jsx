import { FacebookOutlined, Instagram, WhatsApp } from '@mui/icons-material';
import { Avatar, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';

export default function Footer() {
    // Footer
    return (
        <Stack sx={{ my: 10 }} alignItems="center">
            <Stack alignItems="center" flexDirection="row">
                <Avatar sx={{ mr: 1 }} className='gradient'>
                    U
                </Avatar>
                <Typography color="text.primary" fontWeight={700} variant="h5">
                    unix gaming
                </Typography>
            </Stack>

            <Stack sx={{ mt: 2 }} flexDirection="row">
                <IconButton size="large" className="footerIcon">
                    <WhatsApp fontSize='20px' />
                </IconButton>
                <IconButton size="large" className="footerIcon">
                    <Instagram fontSize='20px' />
                </IconButton>
                <IconButton size="large" className="footerIcon">
                    <FacebookOutlined fontSize='20px' />
                </IconButton>
            </Stack>
        </Stack>
    )
}
