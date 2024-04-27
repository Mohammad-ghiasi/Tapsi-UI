"use client"
import { theme } from '@/themes/muiTheme'
import { Box, Container, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import Citys from './citys/Citys'

const Area = () => {


    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Box className="hidden lg:block mt-36 lg:mb-16">
                    <Typography variant='h4' className="font-bold mb-10">تپسی در ایران</Typography>
                    <Box className="grid grid-cols-8 gap-x-4 gap-y-3">
                        <Citys farsi={"تهران"} engish={"Tehran"} />
                        <Citys farsi={"کرج"} engish={"Karaj"} />
                        <Citys farsi={"مشهد"} engish={"Mashad"} />
                        <Citys farsi={"اصفهان"} engish={"Isfahan"} />
                        <Citys farsi={"شیراز"} engish={"Shiraz"} />
                        <Citys farsi={"ارومیه"} engish={"Urmia"} />
                        <Citys farsi={"لاریجان"} engish={"Larijan"} />
                        <Citys farsi={"رشت"} engish={"Rasht"} />
                        <Citys farsi={"انزلی"} engish={"Anzali"} />
                        <Citys farsi={"تبریز"} engish={"Tabriz"} />
                        <Citys farsi={"ساری"} engish={"Sari"} />
                        <Citys farsi={"یزد"} engish={"Yazd"} />
                        <Citys farsi={"کرمان"} engish={"Kerman"} />
                        <Citys farsi={"قم"} engish={"Qom"} />
                        <Citys farsi={"اهواز"} engish={"Ahvaz"} />
                        <Citys farsi={"بابل"} engish={"Babol"} />
                        <Citys farsi={"قائم‌شهر"} engish={"Qaem shar"} />
                        <Citys farsi={"آمل"} engish={"Amol"} />
                        <Citys farsi={"کرمانشاه"} engish={"Kermanshah"} />
                        <Citys farsi={"گرگان"} engish={"Gorgan"} />
                        <Citys farsi={"قزوین"} engish={"Qazvin"} />
                        <Citys farsi={"اراک"} engish={"Arak"} />
                        <Citys farsi={"نیشابور"} engish={"Nishabur"} />
                        <Citys farsi={"نور"} engish={"Nur"} />
                        <Citys farsi={"محمود آباد"} engish={"Mahmudabad"} />
                        <Citys farsi={"بجنورد"} engish={"Bojnord"} />
                        <Citys farsi={"آردبیل"} engish={"Ardabil"} />
                        <Citys farsi={"خرم آباد"} engish={"Khoramabad"} />
                        <Citys farsi={"همدان"} engish={"Hamadan"} />
                        <Citys farsi={"کیش"} engish={"Kish"} />
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default Area