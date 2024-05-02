"use client"
import { theme } from '@/themes/muiTheme'
import { Box, Container, ThemeProvider, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box className="bg-gray-950 text-gray-200 pt-10 md:pt-20">
                <Container>
                    <Box>
                        <Box className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-6">
                            <Box className="flex flex-col space-y-2">
                                <Box className="relative h-[52px] w-[110px]">
                                    <Link href={'/'}>
                                        <Image
                                            className='z-50'
                                            alt="Tapsi"
                                            src={"/asset/images/tapsi-logo-white.svg"}
                                            fill
                                            loading="lazy"
                                        />
                                    </Link>
                                </Box>
                                <Typography variant='body2' className='font-lale'>اپلیکیشن درخواست خودرو و پیک</Typography>
                                <Typography className="text-xs text-gray-500 hidden md:block">تمام حقوق مادی و معنوی این وبسایت متعلق به تپسی است.</Typography>
                            </Box>
                            <Box>
                                <Typography className='text-xl font-bold mb-5'>تپسی</Typography>
                                <Box className="flex flex-col space-y-1">
                                    <Link className="text-sm font-bold hover:text-orange-600" href={'/'}><span>وبلاگ تپسی</span></Link>
                                    <Link className="text-sm font-bold hover:text-orange-600" href={'/'}><span>فرصت شغلی</span></Link>
                                    <Link className="text-sm font-bold hover:text-orange-600" href={'/'}><span>تماس با ما</span></Link>
                                    <Link className="text-sm font-bold hover:text-orange-600" href={'/'}><span>لوگو و هویت سازمانی</span></Link>
                                    <Link className="text-sm font-bold hover:text-orange-600" href={'/'}><span>استخدام بازاریاب</span></Link>
                                </Box>
                            </Box>
                            <Box>
                                <Typography className='text-xl font-bold mb-5'>مسافران</Typography>
                                <Box className="flex flex-col space-y-1">
                                    <Link className="text-sm font-bold hover:text-orange-600" href={'/'}><span>دانلود اپ مسافر</span></Link>
                                    <Link className="text-sm font-bold hover:text-orange-600" href={'/'}><span>نسخه وب تپسی</span></Link>
                                    <Link className="text-sm font-bold hover:text-orange-600" href={'/'}><span>پرسش‌های متداول مسافران</span></Link>
                                    <Link className="text-sm font-bold hover:text-orange-600" href={'/'}><span>شرایط و قوانین مسافران</span></Link>
                                    <Link className="text-sm font-bold hover:text-orange-600" href={'/'}><span>باشگاه مشتریان</span></Link>
                                </Box>
                            </Box>
                            <Box>
                                <Typography className='text-xl font-bold mb-5'>رانندگان</Typography>
                                <Box className="flex flex-col space-y-1">
                                    <Link className="text-sm font-bold hover:text-orange-600" href={'/'}><span>دانلود اپ سفیر</span></Link>
                                    <Link className="text-sm font-bold hover:text-orange-600" href={'/'}><span>ثبت نام راننده تاکسی اینترنتی</span></Link>
                                    <Link className="text-sm font-bold hover:text-orange-600" href={'/'}><span>پرسش‌های متداول سفیران</span></Link>
                                    <Link className="text-sm font-bold hover:text-orange-600" href={'/'}><span>شرایط و قوانین سفیران</span></Link>
                                    <Link className="text-sm font-bold hover:text-orange-600" href={'/'}><span>باشگاه سفیران</span></Link>
                                    <Link className="text-sm font-bold hover:text-orange-600" href={'/'}><span>ثبت نام راننده موتور</span></Link>

                                </Box>
                            </Box>
                            <Box>
                                <Typography className='text-xl font-bold mb-5'>کسب و کارها</Typography>
                                <Box className="flex flex-col space-y-1">
                                    <Link className="text-sm font-bold hover:text-orange-600" href={'/'}><span>پنل سازمانی تپسی</span></Link>
                                    <Link className="text-sm font-bold hover:text-orange-600" href={'/'}><span>خرید کد اعتبار و تخفیف</span></Link>
                                    <Link className="text-sm font-bold hover:text-orange-600" href={'/'}><span>دریافت API</span></Link>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="flex flex-row justify-around md:justify-start mt-10">
                            <Box>
                                <Box className="relative h-[130px] w-[110px] md:w-[80px] rounded-xl overflow-hidden bg-gray-200">
                                    <Image

                                        alt='E-nemad'
                                        src={"/asset/images/logo.png"}
                                        fill
                                        loading="lazy"
                                    />
                                </Box>
                            </Box>
                            <Box>
                                <Box className="relative h-[130px] w-[110px] md:w-[80px]   rounded-xl overflow-hidden bg-gray-200 mx-4">
                                    <Image

                                        alt='E-nemad'
                                        src={"/asset/images/etehadiye.png"}
                                        fill
                                        loading="lazy"
                                    />
                                </Box>
                            </Box>
                            <Box>
                                <Box className="relative h-[130px] w-[110px] md:w-[130px]   rounded-xl overflow-hidden bg-gray-200">
                                    <Image

                                        alt='E-nemad'
                                        src={"/asset/images/logo_2.png"}
                                        fill
                                        loading="lazy"
                                    />
                                </Box>
                            </Box>
                        </Box>
                        <Box className="mt-6">
                            <Typography className='text-sm text-gray-500 font-bold block md:hidden'>تمام حقوق مادی و معنوی این وبسایت متعلق به تپسی است.</Typography>
                        </Box>
                        <Box>
                            <Typography className='text-sm font-bold hidden md:block'>تپسی در شبکه‌های اجتماعی</Typography>
                            <Box className="w-[100%] md:w-[260px] flex flex-row justify-around mt-3 pb-10 md:pb-20">
                                <Box><FacebookOutlinedIcon style={{ fontSize: 40 }} className='hover:text-orange-500 cursor-pointer' /></Box>
                                <Box><InstagramIcon style={{ fontSize: 40 }} className='hover:text-orange-500 cursor-pointer' /></Box>
                                <Box><TwitterIcon style={{ fontSize: 40 }} className='hover:text-orange-500 cursor-pointer' /></Box>
                                <Box><LinkedInIcon style={{ fontSize: 40 }} className='hover:text-orange-500 cursor-pointer' /></Box>
                                <Box><TelegramIcon style={{ fontSize: 40 }} className='hover:text-orange-500 cursor-pointer' /></Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    )
}

export default Footer


// https://tapsi.ir/images/tapsi-logo-white.svg