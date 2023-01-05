import { Box, Image } from '@chakra-ui/react';
import React, { FC } from 'react';
import { GRADIENT_ACCENT_COLOR, ACCENT_COLOR } from '../../styles/consts';

interface IndividualCourseCertificateProps {
    courseName: string;
    imageSrc: string;
}

const IndividualCourseCertificate: FC<IndividualCourseCertificateProps> = ({
    courseName,
    imageSrc,
}) => {
    return (
        <Box
            border='1px'
            borderColor={GRADIENT_ACCENT_COLOR}
            transition='all 0.2s ease-in-out'
            bgColor={ACCENT_COLOR}
            boxShadow={'rgba(132, 59, 206, 0.15) 0px 8px 32px 10px'}
            _hover={{
                boxShadow: 'rgba(152, 67, 237, 0.501) 0px 8px 32px 10px',
            }}
            borderBottomRadius={'none'}>
            <Image
                opacity={0.7}
                transition='all 0.2s ease-in-out'
                _hover={{ opacity: 1 }}
                src={imageSrc}
                alt={courseName}
            />
        </Box>
    );
};

export default IndividualCourseCertificate;
