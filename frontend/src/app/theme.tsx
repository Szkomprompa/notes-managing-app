"use client";
import {createTheme} from '@mui/material/styles';
import { brown, orange} from "@mui/material/colors";


const theme = createTheme({
    palette: {
        primary: {
            // main: '#a96f16',
            main: orange[500],
        },
        secondary: {
            main: '#594726',
            // main: '#1651a9',
        },
    },
    typography: {
        "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
    },
});

export default theme;