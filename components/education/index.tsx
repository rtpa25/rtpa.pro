import { Box, Button, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { BsArrowRight } from 'react-icons/bs';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { certificates } from '../../data/certificates-data';
import { ACCENT_COLOR } from '../../styles/consts';
import SectionHeading from '../misc/section-heading';
import SectionWrapper from '../misc/section-wrapper';
import IndividualCourseCertificate from './individual-certificate';

const Education = () => {
    return (
        <SectionWrapper variant='wide'>
            <Box my={16}>
                <SectionHeading
                    sectionHeadingText={'Online Courses Taken'}
                    sectionHeadingNumber={5}
                />
            </Box>
            <SimpleGrid
                spacing={'16'}
                templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
                {certificates.map((certificate) => (
                    <IndividualCourseCertificate
                        key={certificate.name}
                        courseName={certificate.name}
                        imageSrc={certificate.image}
                    />
                ))}
            </SimpleGrid>
            <Button
                mx='auto'
                mt={'20'}
                px='20'
                borderColor={ACCENT_COLOR}
                color={ACCENT_COLOR}
                variant='outline'>
                <a
                    href='https://www.linkedin.com/in/rtpa25/details/certifications/'
                    target={'_blank'}
                    rel='noreferrer'>
                    <Flex
                        justifyContent={'space-between'}
                        alignItems='flex-end'>
                        <Text mr={2}>Show all 12 certificates </Text>
                        <Box>
                            <BsArrowRight />
                        </Box>
                    </Flex>
                </a>
            </Button>
        </SectionWrapper>
    );
};

export default Education;
