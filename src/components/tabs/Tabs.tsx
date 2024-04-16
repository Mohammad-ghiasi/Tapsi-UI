"use client"
import "./span.css"
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { Container } from '@mui/material';

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
            {...other}
        >
            {value === index && (
                <Box sx={{ paddingTop: 4 }}>
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
            <Container>
                <Typography variant='h4'>سرویس های تپسی</Typography>
                <Box sx={{ width: '100%', marginTop: "40px" }}>
                    <Box>
                        <Tabs sx={{width: "100%"}} textColor='inherit' value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab className="me-[5px] md:me-[17px] lg:me-[21px]" label={
                                <Box>
                                    <Box className="relative w-[70px] h-[40px] md:w-[80px] md:h-[45px] lg:w-[100px] lg:h-[] ">
                                        <Image
                                            alt="icon"
                                            src={"/asset/images/cc-classic.png"}
                                            fill
                                        />
                                    </Box>
                                    <Typography sx={{marginTop: "13px"}} variant="body1">تپسی کلاسیک</Typography>
                                </Box>
                            } />
                            <Tab className="mx-[10px] md:mx-[17px] lg:me-[21px]" label={
                                <Box>
                                    <Box className="relative w-[70px] h-[40px] md:w-[80px] md:h-[45px] lg:w-[100px] lg:h-[] ">
                                        <Image
                                            alt="icon"
                                            src={"/asset/images/cc-tel.png"}
                                            fill
                                        />
                                    </Box>
                                    <Typography sx={{marginTop: "13px"}} variant="body1">تپسی تلفتی</Typography>
                                </Box>
                            } />
                            <Tab className="mx-[10px] md:mx-[17px] lg:me-[21px]" label={
                                <Box>
                                    <Box className="relative w-[70px] h-[40px] md:w-[80px] md:h-[45px] lg:w-[100px] lg:h-[] ">
                                        <Image
                                            alt="icon"
                                            src={"/asset/images/cc-line.png"}
                                            fill
                                        />
                                    </Box>
                                    <Typography sx={{marginTop: "13px"}} variant="body1">تپسی لاین</Typography>
                                </Box>
                            } />
                            <Tab className="mx-[10px] md:mx-[17px] lg:me-[21px]" label={
                                <Box>
                                    <Box className="relative w-[70px] h-[40px] md:w-[80px] md:h-[45px] lg:w-[100px] lg:h-[] ">
                                        <Image
                                            alt="icon"
                                            src={"/asset/images/cc-motopeyk.png"}
                                            fill
                                        />
                                    </Box>
                                    <Typography sx={{marginTop: "13px"}} variant="body1">موتوپیک</Typography>
                                </Box>
                            } />
                            <Tab className="mx-[10px] md:mx-[17px] lg:me-[21px]" label={
                                <Box>
                                    <Box className="relative w-[70px] h-[40px] md:w-[80px] md:h-[45px] lg:w-[100px] lg:h-[] ">
                                        <Image
                                            alt="icon"
                                            src={"/asset/images/cc-autopeyk.png"}
                                            fill
                                        />
                                    </Box>
                                    <Typography sx={{marginTop: "13px"}} variant="body1">اوتوپیک</Typography>
                                </Box>
                            } />
                            <Tab className="mx-[10px] md:mx-[17px] lg:me-[21px]" label={
                                <Box>
                                    <Box className="relative w-[70px] h-[40px] md:w-[80px] md:h-[45px] lg:w-[100px] lg:h-[] ">
                                        <Image
                                            alt="icon"
                                            src={"/asset/images/cc-plus.png"}
                                            fill
                                        />
                                    </Box>
                                    <Typography sx={{marginTop: "13px"}} variant="body1">تپسی پلاس</Typography>
                                </Box>
                            } />
                            <Tab className="ms-[10px] md:ms-[17px] lg:ms-[21px]" label={
                                <Box>
                                    <Box className="relative w-[70px] h-[40px] md:w-[80px] md:h-[45px] lg:w-[100px] lg:h-[] ">
                                        <Image
                                            alt="icon"
                                            src={"/asset/images/cc-hamyar.png"}
                                            fill
                                        />
                                    </Box>
                                    <Typography sx={{marginTop: "13px"}} variant="body1">همیار</Typography>
                                </Box>
                            } />
                        </Tabs>

                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        Item One
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        Item Two
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        Item Three
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={3}>
                        Item for
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={4}>
                        Item five
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={5}>
                        Item six
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={6}>
                        Item seven
                    </CustomTabPanel>
                </Box>
            </Container>
        </>
    );
}