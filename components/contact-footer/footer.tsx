import { Box } from '@chakra-ui/react';
import { ACCENT_COLOR } from '../../styles/consts';

const Footer = () => {
    return (
        <Box
            textAlign={'center'}
            position='relative'
            fontFamily={'mono'}
            color={'gray.400'}
            opacity={0.87}
            fontSize={'sm'}
            letterSpacing='wide'
            lineHeight={'tall'}
            bottom={10}
            cursor='pointer'
            transition={'all 0.2s ease-in-out'}
            _hover={{ color: ACCENT_COLOR }}>
            <a
                href='https://github.com/rtpa25/rtpa.pro'
                target={'_blank'}
                rel='noreferrer'>
                Designed and built by RP
            </a>
        </Box>
    );
};

export default Footer;
