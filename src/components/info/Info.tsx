"use client"
import { theme } from '@/themes/muiTheme'
import { Box, ThemeProvider, Typography } from '@mui/material'
import React from 'react'

const Info = () => {
    return (
        // <Container>
        <ThemeProvider theme={theme}>
            <Box className="bg-city bg-center bg-no-repeat bg-cover  py-2 mt-6 mb-6 lg:mb-32 lg:mt-32  px-16">
                <Box className="transition grid grid-cols-1 h-auto lg:h-[160px]  md:grid-cols-4 place-items-center text-gray-200">
                    <Box className="hover-target w-full  md:border-l-2 py-3 border-gray-200">
                        <Typography variant="h5" className='font-bold text-center'>بسته امنیت سفر</Typography>
                        <Typography className="hover-content text-lg text-center mx-4 mt-4 ">امکانات ویژه امنیت سفر، شامل اشتراک سفر و پشتیبانی ۲۴ ساعته تیم متخصصین امنیت تپسی</Typography>
                    </Box>
                    <Box className="hover-target w-full  md:border-l-2 py-3 border-gray-200">
                        <Typography variant="h5" className='font-bold text-center'>درخواست تلفنی</Typography>
                        <Typography className="hover-content text-lg text-center mx-4 mt-4 ">امکان درخواست خودرو بدون نیاز به اینترنت و اپلیکیشن، از طریق تماس با شماره ۱۶۳۰</Typography>
                    </Box>
                    <Box className="hover-target w-full  md:border-l-2 py-3 border-gray-200">
                        <Typography variant="h5" className='font-bold text-center'>در دسترس‌ ناتوایان</Typography>
                        <Typography className="hover-content text-lg text-center mx-4 mt-4 ">امکان استفاده کاربران نابینااز اپلیکیشن تپسی و عدم کسر کمیسیون از سفر مسافران ویلچردار</Typography>
                    </Box>
                    <Box className="hover-target w-[100%]">
                        <Typography variant="h5" className='font-bold text-center'>امکانات هوشمند</Typography>
                        <Typography className="hover-content text-lg text-center mx-4 mt-4 ">سهولت استفاده از اپلیکیشن با پیشنهاد مبدا و مقصد سفر، مقاصد منتخب و پیشنهادهای ویژه شما</Typography>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
        // </Container>
    )
}

export default Info