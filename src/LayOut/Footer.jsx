import { Paper, Box, Typography } from '@mui/material';
import {FooterHeight, FooterTxtColor} from '../theme_params.jsx';
import React from "react";

function Footer() {
    return (
        <Paper
            variant="footer"
            component="footer"
            sx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingX: 2
            }}
        >
            <Typography variant="body2" >
                &copy; {new Date().getFullYear()} Amir Dagan
            </Typography>
        </Paper>
    );
}

export default Footer;