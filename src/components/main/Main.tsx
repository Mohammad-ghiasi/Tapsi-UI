"use client"
import { Container, ThemeProvider, createTheme } from '@mui/material';
import React from 'react'
const font = "../../public/asset/fonts/lalezar/Lalezar-Regular.ttf";
const theme = (outerTheme: any) =>
    createTheme({

        typography: {
            fontFamily: font, // Font family name without quotes
        },

    });
const Main = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <div>Main</div>
            </Container>
        </ThemeProvider>
    )
}

export default Main