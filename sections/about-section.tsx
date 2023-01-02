import { Box } from '@chakra-ui/react';
import { Element } from 'react-scroll';
import About from '../components/about';
import { GRADIENT_ACCENT_COLOR } from '../styles/consts';

const AboutSection = () => {
    return (
        <Element name='about'>
            <Box
                w={'full'}
                bgGradient={`linear(to-r, #000000, ${GRADIENT_ACCENT_COLOR})`}>
                <About />
            </Box>
        </Element>
    );
};

export default AboutSection;
