import { Box, Button, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { BsArrowRight } from 'react-icons/bs';
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
                    sectionHeadingNumber={4}
                    showNumber={true}
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
            <Box mx='auto' mt={'20'}>
                <a
                    href='https://www.linkedin.com/in/rtpa25/details/certifications/'
                    target={'_blank'}
                    rel='noreferrer'>
                    <Button
                        px={['16', '20']}
                        borderColor={ACCENT_COLOR}
                        color={ACCENT_COLOR}
                        variant='outline'>
                        <Flex alignItems='flex-end'>
                            <Text mr={2}>Show all 12 certificates </Text>
                            <Box>
                                <BsArrowRight />
                            </Box>
                        </Flex>
                    </Button>
                </a>
            </Box>
        </SectionWrapper>
    );
};

export default Education;
