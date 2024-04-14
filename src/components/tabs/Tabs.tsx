"use client"
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
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
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

    return (
        <>
            <Container>
                <Typography variant='h4'>سرویس های تپسی</Typography>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label={
                                <Box className="">
                                    <Image
                                        alt="icon"
                                        src={"/asset/images/cc-classic.png"}
                                        width={100}
                                        height={100}
                                    />
                                    lable
                                </Box>
                            } />
                            <Tab label={
                                <Box className="">
                                    <Image
                                        alt="icon"
                                        src={"/asset/images/cc-tel.png"}
                                        width={100}
                                        height={100}
                                    />
                                    lable
                                </Box>
                            } />
                            <Tab label={
                                <Box className="">
                                    <Image
                                        alt="icon"
                                        src={"/asset/images/cc-line.png"}
                                        width={100}
                                        height={100}
                                    />
                                    lable
                                </Box>
                            } />
                            <Tab label={
                                <Box className="">
                                    <Image
                                        alt="icon"
                                        src={"/asset/images/cc-motopeyk.png"}
                                        width={100}
                                        height={100}
                                    />
                                    lable
                                </Box>
                            } />
                            <Tab label={
                                <Box className="">
                                    <Image
                                        alt="icon"
                                        src={"/asset/images/cc-autopeyk.png"}
                                        width={100}
                                        height={100}
                                    />
                                    lable
                                </Box>
                            } />
                            <Tab label={
                                <Box className="">
                                    <Image
                                        alt="icon"
                                        src={"/asset/images/cc-plus.png"}
                                        width={100}
                                        height={100}
                                    />
                                    lable
                                </Box>
                            } />
                            <Tab label={
                                <Box className="">
                                    <Image
                                        alt="icon"
                                        src={"/asset/images/cc-hamyar.png"}
                                        width={100}
                                        height={100}
                                    />
                                    lable
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