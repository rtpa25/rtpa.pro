import React from 'react';
import SectionWrapper from '../misc/section-wrapper';
import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';
import SectionHeading from '../misc/section-heading';
import { ACCENT_COLOR } from '../../styles/consts';
import Tilt from 'react-parallax-tilt';

const TestimonialCard = () => {
    return (
        <SectionWrapper variant='thin'>
            <Box mb={16}>
                <SectionHeading
                    sectionHeadingText={'Testimonials'}
                    sectionHeadingNumber={3}
                    showNumber={true}
                />
            </Box>
            <Flex
                gap={10}
                flexDir={['column', 'column', 'column', 'row']}
                mb={10}>
                <Box className='image' flex={1}>
                    <Box
                        h={'fit-content'}
                        rounded={'lg'}
                        bgColor={ACCENT_COLOR}
                        _hover={{ bgColor: 'transparent' }}>
                        <Tilt
                            glareEnable={true}
                            glareMaxOpacity={0.9}
                            glareColor={'black'}
                            glarePosition='all'>
                            <Image
                                opacity={0.8}
                                width={['100%']}
                                objectFit={'cover'}
                                height={'xs'}
                                transition={'all 0.2s ease-in-out'}
                                _hover={{ opacity: 1 }}
                                rounded={'lg'}
                                alt='ronit'
                                src='Sedat.png'
                            />
                        </Tilt>
                    </Box>
                </Box>
                <Flex
                    className='text'
                    flexDir={'column'}
                    flex={2}
                    gap={10}
                    justifyContent='space-between'>
                    <Text
                        fontSize={['xl', '2xl']}
                        fontWeight='normal'
                        fontStyle='italic'
                        lineHeight={1.4}
                        color={'gray.400'}>
                        {`"One of the best developers I've worked with in my 15 years of experience. I've never seen someone deliver multiple long-term features for our product at such an astonishing speed. He estimates tasks in hours, not days, which is a testament to his work ethic. He also has a keen eye for design and prioritizes the user's perspective before releasing anything to production. Despite the time zone difference, he consistently ensures that our working hours overlap."`}
                    </Text>
                    <Flex flexDir={'column'} fontWeight='semibold'>
                        <Link
                            href='https://www.linkedin.com/in/sedatakkus/'
                            target={'_blank'}
                            rel='noreffer'>
                            <Text>Sedat Akkus</Text>
                        </Link>
                        <Text
                            textColor={ACCENT_COLOR}
                            fontStyle='italic'
                            fontSize='sm'>
                            CEO Superkit, Sr. Engineering Manager Adobe CA.
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </SectionWrapper>
    );
};

export default TestimonialCard;

