import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { Fade } from 'react-awesome-reveal';
import { ACCENT_COLOR } from '../../styles/consts';
import Tilt from 'react-parallax-tilt';

const Hero = () => {
    return (
        <Flex
            mx={'auto'}
            maxW={['90%', '80%', '70%']}
            flexDirection={'column'}
            justifyContent='center'
            alignItems={'flex-start'}
            h='90vh'>
            <Fade cascade={true} direction='up' duration={500}>
                <Box ml={2}>
                    <Heading
                        fontFamily={'mono'}
                        color={ACCENT_COLOR}
                        fontSize='xl'
                        fontWeight={'light'}
                        lineHeight={1.2}>
                        Hi, my name is
                    </Heading>
                </Box>
                <Box>
                    <Heading
                        fontSize={['4xl', '5xl', '6xl', '8xl']}
                        bgGradient={`linear(to-l, ${ACCENT_COLOR}, #ffffff)`}
                        bgClip='text'
                        letterSpacing={'tighter'}
                        fontWeight={'semibold'}
                        lineHeight={1.2}>
                        Ronit Panda.
                    </Heading>
                </Box>
                <Box>
                    <Heading
                        fontSize={['4xl', '5xl', '6xl', '7xl']}
                        fontWeight={'semibold'}
                        lineHeight={1.2}
                        color='gray.400'>
                        A person who iterates fast.
                    </Heading>
                </Box>

                <Box
                    my={6}
                    maxW={['80%', '70%', '60%', '50%']}
                    lineHeight={1.5}
                    fontSize={['md', 'lg']}
                    color={['gray.300', 'gray.400', 'gray.400']}
                    letterSpacing={1.1}
                    fontWeight={'light'}>
                    <Text>
                        {
                            "I'm a software engineer based out of India specializing in building full stack web apps. Currently, I'm an looking to join a team of passionate people to build products that"
                        }{' '}
                        <span style={{ color: ACCENT_COLOR }}>
                            make a difference
                        </span>
                        .
                    </Text>
                </Box>
                <Box my={4}>
                    <Tilt
                        tiltEnable={false}
                        glareEnable={true}
                        glareMaxOpacity={0.8}
                        glareColor={ACCENT_COLOR}
                        glarePosition='all'>
                        <Button
                            fontSize={['lg', 'lg', 'xl', 'xl']}
                            p={[5, 6, 7, 8]}
                            fontWeight={'normal'}
                            variant={'outline'}
                            fontFamily={'mono'}
                            boxShadow={
                                'rgba(132, 59, 206, 0.15) 0px 8px 32px 10px'
                            }
                            _hover={{
                                boxShadow:
                                    'rgba(152, 67, 237, 0.501) 0px 8px 32px 10px',
                            }}
                            borderColor={ACCENT_COLOR}
                            color={ACCENT_COLOR}>
                            <a href={`mailto:pandaronit25@gmail.com`}>
                                Get in touch!
                            </a>
                        </Button>
                    </Tilt>
                </Box>
            </Fade>
        </Flex>
    );
};

export default Hero;
