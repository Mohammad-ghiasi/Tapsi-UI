"use client"
import { theme } from '@/themes/muiTheme';
import { Box, Button, Container, ThemeProvider, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Main = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container className="flex flex-col space-y-8  mt-6 lg:mt-40 lg:space-y-40">
                <Box className="grid grid-cols-1 gap-y-14 max-md:mb-16 md:grid-cols-2">
                    <Box className="max-md:order-last max-w-prose">
                        <Typography className='text-xl lg:text-4xl font-bold' >
                            خدمات تپسی ویژه کسب‌وکارها
                        </Typography>
                        <Typography className='text-md md:text-lg mt-5 md:mt-8 mb-6'>
                            پنل سازمانی تپسی، یک سامانه تحت وب است که به سادگی امکان درخواست هم‌زمان تعداد نامحدودی خودرو و پیک را برای کسب‌وکارها و سازمان‌ها فراهم می‌کند. و با استفاده از آن می‌توانید ماموریت های درون‌شهری و ارسال کالاهای خود را به سادگی مدیریت کنید.
                        </Typography>
                        <Link href={'/'} className='text-md font-bold text-orange-500 '>
                            اطلاعات بیشتر سرویس سازمانی
                        </Link><br />
                        <Button className="mt-7 px-5 py-3 " variant='contained' color="warning" size='large'><span className="text-[16px] font-bold">ورود و ثبت نام پنل سازمانی</span></Button>
                    </Box>
                    <Box className="relative w-auto h-[260px] md:h-[350px] ms-12 lg:ms-24" >

                        <Image
                            className='z-10'
                            alt='macBook'
                            src={'/asset/images/i-mac.webp'}
                            fill
                        />
                    </Box>
                </Box>
                <Box className="grid grid-cols-1 gap-y-14 md:grid-cols-2">
                    <Box className="relative w-auto h-[260px] md:h-[350px] p-7 lg:me-24" >
                        <Image
                            className='z-10'
                            alt='macBook'
                            src={'/asset/images/macbook.webp'}
                            fill
                        />
                    </Box>
                    <Box className="max-md:order-last max-w-prose">
                        <Typography className='text-xl lg:text-4xl font-bold' >
                            خدمات تپسی ویژه کسب‌وکارها
                        </Typography>
                        <Typography className='text-md md:text-lg mt-5 md:mt-8 mb-6'>
                            پنل سازمانی تپسی، یک سامانه تحت وب است که به سادگی امکان درخواست هم‌زمان تعداد نامحدودی خودرو و پیک را برای کسب‌وکارها و سازمان‌ها فراهم می‌کند. و با استفاده از آن می‌توانید ماموریت های درون‌شهری و ارسال کالاهای خود را به سادگی مدیریت کنید.
                        </Typography>
                        <Link href={'/'} className='text-md font-bold text-orange-500 '>
                            اطلاعات بیشتر سرویس سازمانی
                        </Link><br />
                        <Button className="mt-7 px-5 py-3 " variant='contained' color="warning" size='large'><span className="text-[16px] font-bold">ورود و ثبت نام پنل سازمانی</span></Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default Main