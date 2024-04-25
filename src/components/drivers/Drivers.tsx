"use client"
import React from 'react'
import { Box, Button, Container, ThemeProvider, Typography } from '@mui/material';
import { theme } from '@/themes/muiTheme';
import Image from 'next/image';
import Link from 'next/link';


const Drivers = () => {
  // Convert English number to Persian using toPersian function
  // const englishNumber: number = 12345;
  // const farsiNumber: string = toPersian(englishNumber).toString();
  
  return (
    <ThemeProvider theme={theme}>
      <Container className=''>
        <Box className="grid grid-cols-1 md:grid-cols-2 mb-6 md:mb-24 lg:mb-32">
          <Box className="max-w-prose max-md:order-last text-gray-700">
            <Typography variant="h4" className='font-bold text-black' gutterBottom>
              مزایای تپسی برای رانندگان تاکسی اینترنتی
            </Typography>

            <Typography paragraph className='my-14 text-lg font-bold' >
              رانندگان (سفیران) به‌عنوان همکاران تپسی، جایگاه ویژه‌ای برای شرکت دارند. به همین‌دلیل مزایای مختلفی برای آنها در نظر گرفته شده است.
            </Typography>

            <Typography className="text-xl font-bold mb-6" gutterBottom>
              کسب درآمد روزانه، پایدار و بدون محدودیت
            </Typography>
            <ol>
              <li>
                <Typography className="text-[17px]">
                  . امکان تسویه‌ی اعتبار در هر ساعت از شبانه‌روز
                </Typography>
              </li>
              <li>
                <Typography className="text-[17px]">
                  . طرح‌های تشویقی، ماموریت‌ها‌، پاداش و اعطای وام‌های قرض‌الحسنه به‌طور دوره‌ای
                </Typography>
              </li>
              <li>
                <Typography className="text-[17px]">
                  . نمایش مکان‌های پردرخواست در اپلیکیشن و دریافت سفرهای طلایی
                </Typography>
              </li>
            </ol>

            <Typography className="text-xl font-bold my-6" gutterBottom>
              تضمین امنیت و پشتیبانی رانندگان
            </Typography>
            <ol>
              <li>
                <Typography className="text-[17px]">
                  . پشتیبانی ۲۴ ساعته
                </Typography>
              </li>
              <li>
                <Typography className="text-[17px]">
                  . امکانات امنیت سفر شامل تماس اضطراری با واحد امنیت و پشتیبانی ۲۴ ساعته تیم امنیت
                </Typography>
              </li>
            </ol>
            <Typography className="text-xl font-bold my-6" gutterBottom>
               واریز سهمیه بنزین ویژه رانندگان تپسی
            </Typography>
            <ol>
              <li>
                <Typography className="text-[17px]">
                  . نمایش میزان پیمایش ماهانه درون اپلیکیشن
                </Typography>
              </li>
              <li>
                <Typography className="text-[17px]">
                  . محاسبه‌ی مسافت طی شده تا مسافر در پیمایش
                </Typography>
              </li>
            </ol>
            <Typography className="text-xl font-bold my-6" gutterBottom>
               استفاده از مزایای <Link href={'/'} className='text-blue-500 cursor-pointer'>باشگاه رانندگان تپسی</Link>
            </Typography>
            <ul>
              <li>
                <Typography className="text-[17px]">
                  . تخفیف روی خدمات خودرو مانند بیمه، سرویس‌های دوره‌ای، خرید لاستیک و ...
                </Typography>
              </li>
              <li>
                <Typography className="text-[17px]">
                  . تخفیف روی خدمات رفاهی مانند وام قرض‌الحسنه، خدمات درمانی، خرید اقساطی و ...
                </Typography>
              </li>
            </ul>
            <Box className="flex flex-col max-md:justify-center max-md:items-center max-md:space-y-5 md:flex-row mt-7 md:mt-12">
              <Button variant='contained' color='primary' size="large" className='py-3 px-4 rounded-lg w-[50%] md:w-[40%] md:me-6'><span>ثبت نام راننده تاکسی آنلاین</span></Button>
              <Button variant='contained' color='primary' size="large" className='py-3 px-6 rounded-lg w-[50%] md:w-[40%]'><span>دانلود برنامه تپسی راننده</span></Button>
            </Box>
          </Box>
            <Box className="relative mb-7 h-[300px] w-[100%] md:w-[80%] md:ms-6 rounded-2xl overflow-hidden">
              <Image
                className='z-10'
                alt='driver'
                src={'/asset/images/driver.webp'}
                fill={true}
                loading='lazy'
              />
            </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Drivers


// grid grid-cols-1 place-content-center place-items-center gap-y-4 md:grid-cols-2 md:place-items-start md:gap-x-0