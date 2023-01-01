import { Box } from '@chakra-ui/react';
import { AppBar, Hero } from '../components/hero';

const HeroSection = () => {
    return (
        <Box w={'full'} bgGradient='linear(to-r, #000000, #4300779f)'>
            <AppBar />
            <Hero />
        </Box>
    );
};

export default HeroSection;
