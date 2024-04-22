"use client"
import { theme } from '@/themes/muiTheme';
import { Container, ThemeProvider } from '@mui/material';
import React from 'react'

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