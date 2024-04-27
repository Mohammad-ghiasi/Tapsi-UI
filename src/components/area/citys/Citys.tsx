import { theme } from '@/themes/muiTheme'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { ThemeProvider } from 'styled-components'

interface cityName {
    farsi: string;
    engish: string;
}

const Citys = (props: cityName) => {
    const { farsi, engish } = props;
    const name = engish;
    const spacedNameEN = name.split('').join(' ');

    return (

            <Box className="">
                <Box>
                    <Typography className="text-lg font-normal">{farsi}</Typography>
                </Box>
                <Box>
                    <Typography>{spacedNameEN}</Typography>
                </Box>
            </Box>

    )
}

export default Citys