"use client"
import "./span.css"
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { Button, Container, Divider, ThemeProvider, createTheme } from '@mui/material';
import { theme } from "@/themes/muiTheme";
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            className="mx-8"
            {...other}
        >
            {value === index && (
                <Box className="me-4" sx={{ paddingTop: 6 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}



export default function TapsiTabs() {
    const [value, setValue] = React.useState(0);


    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    React.useEffect(() => {
        const interval = setInterval(() => {
            setValue((prevValue) => (prevValue + 1) % 7);
        }, 5000); // Change tab every 3 seconds

        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <ThemeProvider theme={theme}>
                <Container>
                    <Box className="lg:px-9 lg:pb-7">
                        <Typography className="" variant='h4'>سرویس های تپسی</Typography>
                    </Box>
                    <Box sx={{ width: '100%', marginTop: "40px" }}>
                        <Box>
                            <Tabs className="ms-1m lg:mb-10" sx={{ width: "100%" }} textColor='inherit' value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab className="mx-[5px] md:me-[17px] lg:mx-[21px]" label={
                                    <Box>
                                        <Box className="relative w-[70px] h-[40px] md:w-[80px] md:h-[45px] lg:w-[100px] lg:h-[50px] ">
                                            <Image
                                                alt="icon"
                                                src={"/asset/images/cc-classic.png"}
                                                fill
                                            />
                                        </Box>
                                        <Typography sx={{ marginTop: "13px" }} variant="body1">تپسی کلاسیک</Typography>
                                    </Box>
                                } />
                                <Tab className="mx-[10px] md:mx-[17px] lg:me-[21px]" label={
                                    <Box>
                                        <Box className=" relative w-[70px] h-[40px] md:w-[80px] md:h-[45px] lg:w-[100px] lg:h-[50px] ">
                                            <Image
                                                alt="icon"
                                                src={"/asset/images/cc-tel.png"}
                                                fill
                                            />
                                        </Box>
                                        <Typography sx={{ marginTop: "13px" }} variant="body1">تپسی تلفتی</Typography>
                                    </Box>
                                } />
                                <Tab className="mx-[10px] md:mx-[17px] lg:me-[21px]" label={
                                    <Box>
                                        <Box className="relative w-[70px] h-[40px] md:w-[80px] md:h-[45px] lg:w-[100px] lg:h-[50px] ">
                                            <Image
                                                alt="icon"
                                                src={"/asset/images/cc-line.png"}
                                                fill
                                            />
                                        </Box>
                                        <Typography sx={{ marginTop: "13px" }} variant="body1">تپسی لاین</Typography>
                                    </Box>
                                } />
                                <Tab className="mx-[10px] md:mx-[17px] lg:me-[21px]" label={
                                    <Box>
                                        <Box className="relative w-[70px] h-[40px] md:w-[80px] md:h-[45px] lg:w-[100px] lg:h-[50px] ">
                                            <Image
                                                alt="icon"
                                                src={"/asset/images/cc-motopeyk.png"}
                                                fill
                                            />
                                        </Box>
                                        <Typography sx={{ marginTop: "13px" }} variant="body1">موتوپیک</Typography>
                                    </Box>
                                } />
                                <Tab className="mx-[10px] md:mx-[17px] lg:me-[21px]" label={
                                    <Box>
                                        <Box className="relative w-[70px] h-[40px] md:w-[80px] md:h-[45px] lg:w-[100px] lg:h-[50px] ">
                                            <Image
                                                alt="icon"
                                                src={"/asset/images/cc-autopeyk.png"}
                                                fill
                                            />
                                        </Box>
                                        <Typography sx={{ marginTop: "13px" }} variant="body1">اوتوپیک</Typography>
                                    </Box>
                                } />
                                <Tab className="mx-[10px] md:mx-[17px] lg:me-[21px]" label={
                                    <Box>
                                        <Box className="relative w-[70px] h-[40px] md:w-[80px] md:h-[45px] lg:w-[100px] lg:h-[50px] ">
                                            <Image
                                                alt="icon"
                                                src={"/asset/images/cc-plus.png"}
                                                fill
                                            />
                                        </Box>
                                        <Typography sx={{ marginTop: "13px" }} variant="body1">تپسی پلاس</Typography>
                                    </Box>
                                } />
                                <Tab className="ms-[10px] md:ms-[17px] lg:mx-[21px]" label={
                                    <Box>
                                        <Box className="relative w-[70px] h-[40px] md:w-[80px] md:h-[45px] lg:w-[100px] lg:h-[50px] ">
                                            <Image
                                                alt="icon"
                                                src={"/asset/images/cc-hamyar.png"}
                                                fill
                                            />
                                        </Box>
                                        <Typography sx={{ marginTop: "13px" }} variant="body1">همیار</Typography>
                                    </Box>
                                } />
                            </Tabs>

                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            <Box className="flex lg:flex-row lg:justify-between">
                                <Box className="lg:pe-36 ">
                                    <Typography className="font-bold text-lg md:text-3xl mb-4">تپسی کلاسیک</Typography>
                                    <Typography className="text-md lg:text-xl">سرویس همیار تپسی، به جای شما خرید می‌کند. کافیست فروشگاه مورد نظر خود را به عنوان مبدا مشخص کرده و لیست خریدتان را داخل اپ وارد کنید. این خرید‌ها می‌تواند از سوپرمارکت یا داروخانه مورد نظر شما باشند.</Typography>
                                </Box>
                                <Box className="hidden lg:block relative w-[100%] h-[275px]">
                                    <Image
                                        alt={'illus-classic.webp'}
                                        src={"/asset/images/illus-classic.webp"}
                                        fill
                                        loading="lazy"
                                    />
                                </Box>
                            </Box>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <Box className="flex lg:flex-row lg:justify-between">
                                <Box className="lg:pe-36 ">
                                    <Typography className="font-bold text-lg md:text-3xl mb-4">تپسی تلفنی</Typography>
                                    <Typography className="text-md lg:text-xl">سرویس تپسی تلفنی یا ۱۶۳۰، این امکان را به شما می‌دهد که بدون نیاز به اینترنت و اپلیکیشن، درخواست خودرو بدهید. این سرویس تاکسی تلفنی مناسب زمانی است که به هر دلیلی دسترسی به اینترنت یا اپلیکیشن ندارید. همچنین سرویس تلفنی تپسی، راه حلی مناسب برای افرادی است که کار کردن با اپلیکیشن‌های موبایلی برایشان راحت نیست.</Typography>
                                </Box>
                                <Box className="hidden lg:block relative w-[100%] h-[275px]">
                                    <Image
                                        alt={'illus-classic.webp'}
                                        src={"/asset/images/illus-tel.webp"}
                                        fill
                                        loading="lazy"
                                    />
                                </Box>
                            </Box>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <Box className="flex lg:flex-row lg:justify-between">
                                <Box className="lg:pe-36 ">
                                    <Typography className="font-bold text-lg md:text-3xl mb-4">تپسی لاین</Typography>
                                    <Typography className="text-md lg:text-xl">تپسی لاین سرویسی است که امکان سفر اشتراکی را برایتان فراهم می‌کند. در این سرویس شما با مسافر دیگری که هم‌مسیرتان است، هم‌سفر خواهید بود و هزینه سفرتان تقسیم می‌شود</Typography>
                                </Box>
                                <Box className="hidden lg:block relative w-[100%] h-[275px]">
                                    <Image
                                        alt={'illus-classic.webp'}
                                        src={"/asset/images/illus-line.webp"}
                                        fill
                                        loading="lazy"
                                    />
                                </Box>
                            </Box>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={3}>
                            <Box className="flex lg:flex-row lg:justify-between">
                                <Box className="lg:pe-36">
                                    <Typography className="font-bold text-lg md:text-3xl mb-4">موتو پیک</Typography>
                                    <Typography className="text-md lg:text-xl">با استفاده از سرویس موتوپیک، بسته‌ها و مرسولاتتان با پیک موتور به مقصد ارسال می‌شوند. این سرویس مناسب زمانی است که می‌خواهید مرسوله سریع‌تر به مقصد برسد. در این سرویس، شما می‌توانید مسیر رسیدن مرسوله‌تان به مقصد را به صورت لحظه‌ای روی نقشه دنبال کنید.</Typography>
                                    <Button variant="contained" color="warning" size="large" className="font-bold text-xl py-2 px-4 mt-8">آشنایی با موتوپیک</Button>
                                </Box>
                                <Box className="hidden lg:block relative w-[100%] h-[275px]">
                                    <Image
                                        alt={'illus-classic.webp'}
                                        src={"/asset/images/illus-motopeyk.webp"}
                                        fill
                                        loading="lazy"
                                    />
                                </Box>
                            </Box>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={4}>
                            <Box className="flex lg:flex-row lg:justify-between">
                                <Box className="lg:pe-36 ">
                                    <Typography className="font-bold text-lg md:text-3xl mb-4">اتوپیک</Typography>
                                    <Typography className="text-md lg:text-xl">اتوپیک سرویسی برای ارسال بسته‌های شما با خودرو است. این سرویس، برای زمانی مناسب است که بسته‌های شما، با موتور قابل ارسال نیستند و یا در حین جابجایی، نیاز به مراقبت بیشتری دارند. در این سرویس نیز امکان رصد لحظه ‌به لحظه موقعیت مکانی مرسوله تا زمان رسیدن به مقصد فراهم است</Typography>
                                </Box>
                                <Box className="hidden lg:block relative w-[100%] h-[275px]">
                                    <Image
                                        alt={'illus-classic.webp'}
                                        src={"/asset/images/illus-autopeyk.webp"}
                                        fill
                                        loading="lazy"
                                    />
                                </Box>
                            </Box>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={5}>
                            <Box className="flex lg:flex-row lg:justify-between">
                                <Box className="lg:pe-36 ">
                                    <Typography className="font-bold text-lg md:text-3xl mb-4">تپسی پلاس</Typography>
                                    <Typography className="text-md lg:text-xl">در سرویس پلاس تاکسی اینترنتی تپسی، خودرویی با مدل بالاتر و عمر کمتر، به دنبال شما خواهد آمد. همچنین، رانندگان این سرویس بالاترین امتیاز را از مسافران دریافت کرده‌اند. در این سرویس که در حال حاضر در تهران فعال است، امکان تعیین چند مقصد یا توقف در حین سفر، وجود دارد.</Typography>
                                </Box>
                                <Box className="hidden lg:block relative w-[100%] h-[275px]">
                                    <Image
                                        alt={'illus-classic.webp'}
                                        src={"/asset/images/illus-plus.webp"}
                                        fill
                                        loading="lazy"
                                    />
                                </Box>
                            </Box>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={6}>
                            <Box className="flex flexlg:-row justlg:ify-between">
                                <Box className="lg:pe-36 ">
                                    <Typography className="font-bold text-lg md:text-3xl mb-4">همیار</Typography>
                                    <Typography className="text-md lg:text-xl">سرویس همیار تپسی، به جای شما خرید می‌کند. کافیست فروشگاه مورد نظر خود را به عنوان مبدا مشخص کرده و لیست خریدتان را داخل اپ وارد کنید. این خرید‌ها می‌تواند از سوپرمارکت یا داروخانه مورد نظر شما باشند.</Typography>
                                </Box>
                                <Box className="hidden lg:block relative w-[100%] h-[275px]">
                                    <Image
                                        alt={'illus-classic.webp'}
                                        src={"/asset/images/illus-hamyar.webp"}
                                        fill
                                        loading="lazy"
                                    />
                                </Box>
                            </Box>
                        </CustomTabPanel>
                        <Divider style={{ backgroundColor: '#d4d4d4', marginTop: "40px", marginBottom: "40px" }} />
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    );
}