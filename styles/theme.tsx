// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

// 2. Add your color mode config
const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
    config,
    styles: {
        global: {
            'html, body': {
                bg: 'black',
            },
        },
    },
    fonts: {
        heading: `'Inter', sans-serif`,
        // body: `'Inter', sans-serif`,
    },
});

export default theme;
