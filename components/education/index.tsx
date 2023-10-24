import { Box, Button, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { BsArrowRight } from 'react-icons/bs';
import { certificates } from '../../data/certificates-data';
import { ACCENT_COLOR } from '../../styles/consts';
import SectionHeading from '../misc/section-heading';
import SectionWrapper from '../misc/section-wrapper';
import IndividualCourseCertificate from './individual-certificate';
import Tilt from 'react-parallax-tilt';

const Education = () => {
    return (
        <SectionWrapper variant='wide'>
            <Box my={16}>
                <SectionHeading
                    sectionHeadingText={'Course Certificates'}
                    sectionHeadingNumber={6}
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
                    <Tilt
                        tiltEnable={false}
                        glareEnable={true}
                        glareMaxOpacity={0.8}
                        glareColor={ACCENT_COLOR}
                        glarePosition='all'>
                        <Button
                            px={['10', '12', '14', '16']}
                            fontFamily={'mono'}
                            borderColor={ACCENT_COLOR}
                            color={ACCENT_COLOR}
                            boxShadow={
                                'rgba(132, 59, 206, 0.15) 0px 8px 32px 10px'
                            }
                            _hover={{
                                boxShadow:
                                    'rgba(152, 67, 237, 0.501) 0px 8px 32px 10px',
                            }}
                            variant='outline'>
                            <Flex alignItems='flex-end'>
                                <Text mr={2}>Show all 15 certificates</Text>
                                <Box>
                                    <BsArrowRight />
                                </Box>
                            </Flex>
                        </Button>
                    </Tilt>
                </a>
            </Box>
        </SectionWrapper>
    );
};

export default Education;

