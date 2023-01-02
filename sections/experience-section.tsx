import { Box } from '@chakra-ui/react';
import { Element } from 'react-scroll';
import Experience from '../components/experience';
import { GRADIENT_ACCENT_COLOR } from '../styles/consts';

const ExperienceSection = () => {
    return (
        <Element name='about'>
            <Box
                w={'full'}
                bgGradient={`linear(to-r, #000000, ${GRADIENT_ACCENT_COLOR})`}>
                <Experience />
            </Box>
        </Element>
    );
};

export default ExperienceSection;
