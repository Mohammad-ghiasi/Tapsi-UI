"use client"
import React from 'react'
import { Box, Button, ThemeProvider, Typography } from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AppsIcon from '@mui/icons-material/Apps';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import SportsMotorsportsOutlinedIcon from '@mui/icons-material/SportsMotorsportsOutlined';
import Image from "next/image";
import { theme } from '@/themes/muiTheme';
const Hero = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box className="flex flex-row justify-center w-100 h-[600px] mb-5 lg:mb-36 md:h-[500px]  bg-hero-pattern bg-center bg-no-repeat bg-cover">
                <Box className="w-[100%] md:max-md:w-[60%] xl:w-[50%]   flex justify-center ">
                    <Box className=" px-9 text-white bg-gradient-to-r from-black-rgba to-black-rgba-2  lg:ms-24 my-auto py-6 w-[90%] rounded-3xl ">
                        <Typography variant="h3">تپسی</Typography>
                        <Typography variant="body1" className="font-bold text-xl md:text-2xl mt-4 ">اپلیکیشن درخواست خودرو و پیک</Typography>
                        <Box className="w-[100%] flex justify-center flex-col items-center">
                            <Box className=" w-[100%] grid grid-cols-1 md:grid-cols-2 gap-[16px] mt-8">
                                <Button startIcon={<ArrowDownwardIcon style={{ fontSize: "25px", marginLeft: "15px" }} />} variant="contained" sx={{
                                    background: "white", color: "black", paddingY: "12px", fontWeight: 'bold', borderRadius: '8px', fontSize: '16px'
                                }} color="inherit" fullWidth>دانلود اپلیکیشن مسافران</Button>

                                <Button startIcon={<AppsIcon style={{ fontSize: "25px", marginLeft: "15px" }} />} variant="contained" sx={{
                                    background: "white", color: "black", paddingY: "12px", fontWeight: 'bold', borderRadius: '8px', fontSize: '16px'
                                }} color="inherit" fullWidth>وب اپلیکیشن مسافران</Button>

                                <Button variant="contained"
                                    startIcon={<DirectionsCarFilledOutlinedIcon style={{ fontSize: "25px", marginLeft: "15px" }} />}
                                    sx={{
                                        border: '2px solid white', // Adjust border properties as needed
                                        borderRadius: '8px',
                                        fontWeight: 'bold',
                                        paddingY: "12px",
                                        fontSize: '16px', // Add border radius for rounded corners if desired
                                        '&:hover': {
                                            background: 'rgba(0, 0, 0, 0.6)', // Adjust hover border color if needed
                                        },
                                    }} className="bg-black-rgba" fullWidth>ثبت نام راننده خودرو</Button>

                                <Button variant="contained"
                                    startIcon={<SportsMotorsportsOutlinedIcon style={{ fontSize: "25px", marginLeft: "15px" }} />}
                                    sx={{
                                        border: '2px solid white', // Adjust border properties as needed
                                        borderRadius: '8px',
                                        fontWeight: 'bold',
                                        paddingY: "12px",
                                        fontSize: '16px', // Add border radius for rounded corners if desired
                                        '&:hover': {
                                            background: 'rgba(0, 0, 0, 0.6)', // Adjust hover border color if needed
                                        },
                                    }} className="bg-black-rgba" fullWidth>ثبت نام راننده موتود</Button>

                            </Box>
                            <Box className="w-[100%] md:w-[50%]">
                                <Button variant="contained"
                                    startIcon={<ArrowDownwardIcon style={{ fontSize: "25px", marginLeft: "15px" }} />} // Increase the font size of the icon
                                    sx={{
                                        border: '2px solid white',
                                        borderRadius: '8px',
                                        fontWeight: 'bold',
                                        fontSize: '16px',
                                        '&:hover': {
                                            background: 'rgba(0, 0, 0, 0.6)',
                                        },
                                    }}
                                    className="bg-black-rgba mt-[16px] py-3"
                                    fullWidth
                                >
                                    دانلود اپلیکیشن مسافران
                                </Button>

                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className="w-[50%] hidden lg:block ">
                    k
                    <Box className="relative w-[60%] xl:w-[29%] h-[80%] mx-auto mt-40 shadow-manual ">
                        <Image
                            alt="phone"
                            src={'/asset/images/phone.png'} // Updated path
                            fill={true}
                        />
                        jbjkj
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default Hero;