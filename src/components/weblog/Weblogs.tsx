"use client"
import { theme } from '@/themes/muiTheme'
import { Box, Container, ThemeProvider, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Weblogs = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Box className="">
                    <Typography variant='h4' className='font-bold mb-8 md:mb-20'>تازه‌ترین‌های وبلاگ تپسی</Typography>
                    <Box className="grid grid-cols-1 md:grid-cols-3 gap-20">
                        <Link href={'/'}>
                            <Box className="cursor-pointer">
                                <Typography className='text-lg font-bold mb-5'>
                                    بیانیه شرکت تپسی در ارتباط با حذف گزینه «عجله دارم»
                                </Typography>
                                <Box className="container">
                                    <Typography className='text text-md text-gray-400'>
                                        <span className="text">
                                            در پی احضار مدیر عامل تپسی توسط سازمان تعزیرات حکومتی و دستور این سازمان، تپسی از امروز گزینه «عجله دارم» را از دسترس کاربران خارج کرده است . با توجه به اینکه تپسی همواره به دنبال ارائه راهکارهای متنوع برای گروه‌های مختلف کاربران بوده است، ذکر توضیحاتی در این خصوص را برای شفاف شدن ذهن {"…"}
                                        </span>
                                    </Typography>
                                </Box>
                            </Box>
                        </Link>
                        <Link href={'/'}>
                            <Box className="cursor-pointer">
                                <Box className="relative w-[100%] h-[210px] rounded-xl shadow-lg shadow-gray-400 overflow-hidden mb-5">
                                    <Image
                                        alt={'this is a image'}
                                        src={'/asset/images/Justice.jpg'}
                                        fill
                                    />
                                </Box>
                                <Typography className='text-lg font-bold mb-5'>
                                    <span className="text">
                                        معطل کردن راننده‌ها توسط مسافر | پرتکرارترین شکایت ثبت‌شده در مرکز تماس تپسی
                                    </span>
                                </Typography>
                                <Box className="container">
                                    <Typography className='text text-md text-gray-400'>
                                        <span className="text">
                                            با انتشار یک گزارش آماری، تپسی از چگونگی تعامل مسافران و راننده‌ها ذیل خدمات تاکسی اینترنتی پرده برداشت. شرکت تپسی با انتشار گزارشی به نام «رفتار سفر کاربران در تاکسی‌های اینترنتی» ضمن ارائه موارد نارضایتی در سفرهای درون‌شهری، برای اولین بار معضلات این حوزه را شفاف و نحوه مواجهه خود در راستای بهبود تعامل مسافران {"…"}
                                        </span>
                                    </Typography>
                                </Box>
                            </Box>
                        </Link>
                        <Link href={'/'}>
                            <Box className="cursor-pointer">
                                <Box className="relative w-[100%] h-[210px] rounded-xl shadow-lg shadow-gray-400 overflow-hidden mb-5">
                                    <Image
                                        alt={'this is a image'}
                                        src={"/asset/images/pakro-cover.jpg"}
                                        fill
                                    />
                                </Box>
                                <Typography className='text-lg font-bold mb-5'>
                                    تجربه‌‌ یک سفر ویژه با سرویس VIP تپسی
                                </Typography>
                                <Box className="container">
                                    <Typography className='text text-md text-gray-400'>
                                        یکی از نکات مهم در تپسی، بهبود مستمر تجربه مسافران در سفر است؛ ما همیشه تلاش کرده‌ایم، علاوه بر رساندن شما به مقصد، لحظاتی خوش در مسیر بسازیم و بهترین تجربه را برایتان خلق کنیم. حالا برای شما که تجربه‌ای بیش از یک سفر عالی می‌خواهید، سرویس تازه‌ای را فراهم کرده‌ایم؛ سرویس VIP تپسی که {"…"}
                                    </Typography>
                                </Box>
                            </Box>
                        </Link>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider >
    )
}

export default Weblogs