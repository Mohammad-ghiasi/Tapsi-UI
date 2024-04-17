"use client"
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Box, Container, Button, Divider, TableContainer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider, Theme } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Link from 'next/link';


const font = "../../../public/asset/fonts/lalezar/Lalezar-Regular.ttf";
const theme = (outerTheme: Theme) =>
    createTheme({
        direction: 'rtl',
        typography: {
            fontFamily: font, // Font family name without quotes
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 750, // adjust as needed
                md: 960, // adjust as needed
                lg: 1280, // adjust as needed
                xl: 1920, // adjust as needed
            },
        },
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
            <List className='flex flex-col'>
                <Link href="/">
                    <Button variant='text' color='inherit'> <span className="text-[18px] text-gray-900">ویدیو ها</span></Button>
                </Link>
                <Divider />
                <Link href="/">
                    <Button variant='text' color='inherit'><span className="text-[18px] text-gray-900">پشتیبانی</span></Button>
                </Link>
                <Divider />
                <Link href="/">
                    <Button variant='text' color='inherit'><span className="text-[18px] text-gray-900">امور سهام</span></Button>
                </Link>
                <Divider />
                <Link href="/">
                    <Button variant='text' color='inherit'><span className="text-[18px] text-gray-900">تپسی پک</span></Button>
                </Link>
                <Divider />
                <Link href="/">
                    <Button variant='text' color='inherit'><span className="text-[18px] text-gray-900">فرصت های شغلی</span></Button>
                </Link>
                <Divider />
                <Link href="/">
                    <Button variant='text' color='inherit'><span className="text-[18px] text-gray-900">وبلاگ</span></Button>
                </Link>
            </List>
        </Box>
    );

    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <Container>
                    <Box dir="rtl" >
                        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, margin: "0", padding: "0", background: '#ffff' }}>
                            <Toolbar className="flex flex-row justify-between mx-2 lg:mx-16 sm:max-md:mx-6">
                                <Box>
                                    <Link href="/">
                                        {/* <Button variant='text' color='warning'> <span className="text-[25px] text-gray-900">تپسی</span></Button> */}
                                        <Box className="w-[100px] h-[30px] bg-tapsi bg-center bg-no-repeat bg-cover">
                                        </Box>
                                    </Link>
                                </Box>
                                <Box>
                                    <IconButton
                                        color="inherit"
                                        aria-label="open drawer"
                                        edge="start"
                                        onClick={handleDrawerToggle}
                                        sx={{ mr: 2, display: { md: 'none' }, color: "black" }} // using sx prop for styling
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                    <Box className="hidden lg:block md:max-md:space-x-2 space-x-[10px]" sx={{ mr: 2 }}>
                                        <Link className='ml-[10px]' href="/">
                                            <Button variant='text' color='warning'><span className="text-[18px] text-gray-900 transition hover:text-orange-600">پشتیبانی</span></Button>
                                        </Link>
                                        <Link href="/">
                                            <Button variant='text' color='warning'><span className="text-[18px] text-gray-900 transition hover:text-orange-600">امور سهام</span></Button>
                                        </Link>
                                        <Link href="/">
                                            <Button variant='text' color='warning'><span className="text-[18px] text-gray-900 transition hover:text-orange-600">تپسی پک</span></Button>
                                        </Link>
                                        <Link href="/">
                                            <Button variant='text' color='warning'><span className="text-[18px] text-gray-900 transition hover:text-orange-600">فرصت های شغلی</span></Button>
                                        </Link>
                                        <Link href="/">
                                            <Button variant='text' color='warning'><span className="text-[18px] text-gray-900 transition hover:text-orange-600">وبلاگ</span></Button>
                                        </Link>
                                        <Link href="/">
                                            <Button variant='contained' size='medium' color='warning'><span className="text-[18px] text-gray-100 px-5">دانلود تپسی</span></Button>
                                        </Link>
                                    </Box>
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
                </Container>
            </ThemeProvider>
        </CacheProvider>

    );
};

export default Navbar;
