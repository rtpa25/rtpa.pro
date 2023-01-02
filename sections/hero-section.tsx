import { Box } from '@chakra-ui/react';
import { AppBar, Hero } from '../components/hero';
import { GRADIENT_ACCENT_COLOR } from '../styles/consts';

const HeroSection = () => {
    return (
        <Box
            w={'full'}
            bgGradient={`linear(to-r, #000000, ${GRADIENT_ACCENT_COLOR})`}>
            <AppBar />
            <Hero />
        </Box>
    );
};

export default HeroSection;
