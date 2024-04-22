import { createTheme } from "@mui/material";
import { Theme } from '@mui/material/styles';
const font = "../../public/asset/fonts/lalezar/Lalezar-Regular.ttf";
export const theme = (outerTheme: Theme) =>
    createTheme({
        direction: 'rtl',
        typography: {
            fontFamily: font, // Font family name without quotes
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 750, // adjust as needed
                md: 960, // adjust as needed
                lg: 1280, // adjust as needed
                xl: 1920, // adjust as needed
            },
        },
    });