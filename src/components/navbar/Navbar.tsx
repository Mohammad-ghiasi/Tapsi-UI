"use client"
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Box, Container, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider, Theme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const theme = (outerTheme: Theme) =>
    createTheme({
        direction: 'rtl',
        // palette: {
        //     mode: outerTheme.palette.mode,
        // },
    });

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box dir='rlt' className="mt-14">
            <List >
                <ListItem button>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="خانه" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Contact" />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <Box dir="rtl">
                    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, margin: "0", padding: "0"}}>
                        <Toolbar className="flex flex-row-reverse justify-between mx-2 md:mx-14">
                            <Box>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={handleDrawerToggle}
                                    sx={{ mr: 2, display: { sm: 'none' } }} // using sx prop for styling
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Box className="hidden md:block" sx={{ mr: 2 }}>
                                    <Button variant='contained' color='warning'>hi</Button>
                                    <Button variant='contained' color='warning'>hi</Button>
                                    <Button variant='contained' color='warning'>hi</Button>
                                    <Button variant='contained' color='warning'>hi</Button>
                                    <Button variant='contained' color='warning'>hi</Button>
                                </Box>
                            </Box>
                            <Box>
                                <Typography variant="h6" noWrap>
                                    Responsive Navbar
                                </Typography>
                            </Box>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        variant="temporary"
                        anchor="top"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        sx={{
                            '& .MuiDrawer-paper': { width: "100%" },
                        }}
                    >
                        <Box>
                            {drawer}
                        </Box>
                    </Drawer>
                </Box>
            </ThemeProvider>
        </CacheProvider>

    );
};

export default Navbar;
