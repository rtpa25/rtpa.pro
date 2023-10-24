import { Box, Button, Flex, Heading, Link, Text } from '@chakra-ui/react';
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
                <Box ml={[1, 1, 2, 2]}>
                    <Heading
                        fontFamily={'mono'}
                        color={ACCENT_COLOR}
                        fontSize={['md', 'md', 'lg', 'xl']}
                        fontWeight={'light'}
                        lineHeight={1.5}>
                        Hi, my name is
                    </Heading>
                </Box>
                <Box>
                    <Heading
                        fontSize={['5xl', '6xl', '7xl', '8xl']}
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
                        fontSize={['3xl', '5xl', '6xl']}
                        fontWeight={'semibold'}
                        lineHeight={1.2}
                        color='gray.400'>
                        A person who iterates fast.
                    </Heading>
                </Box>

                <Box my={6} maxW={['80%', '70%', '60%', '50%']}>
                    <Text
                        fontSize={'md'}
                        lineHeight={1.5}
                        letterSpacing={'wide'}
                        color={'gray.400'}>
                        {
                            "Hi, I'm, a software engineer from India having previously worked at"
                        }
                        <Link
                            color={ACCENT_COLOR}
                            href='https://supertokens.com'
                            rel='noopener noreferrer'
                            target='_blank'>
                            {' '}
                            SuperTokens(YCS20){' '}
                        </Link>
                        {'and '}
                        <Link
                            color={ACCENT_COLOR}
                            href='https://superkit.io'
                            rel='noopener noreferrer'
                            target='_blank'>
                            SuperKit (both while attending college).
                        </Link>{' '}
                        {
                            "I've a habit of building sophisticated products & shipping them really fast: be it making an internal UI library, or handling infrastructure. I truly champion "
                        }
                        <Link
                            color={ACCENT_COLOR}
                            href='https://github.com/rtpa25'
                            rel='noopener noreferrer'
                            target='_blank'>
                            open source
                        </Link>
                        {
                            '; having shipped to Formbricks, Trigger, Infisical, Twenty, Cal, HyperDX and many more.'
                        }
                    </Text>
                </Box>
                <Box my={4}>
                    <a
                        href={`mailto:pandaronit25@gmail.com`}
                        target='_blank'
                        rel='noreferrer'>
                        <Tilt
                            tiltEnable={false}
                            glareEnable={true}
                            glareMaxOpacity={0.8}
                            glareColor={ACCENT_COLOR}
                            glarePosition='all'>
                            <Button
                                fontSize={['xl', 'xl']}
                                p={[8]}
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
                                Get in touch!
                            </Button>
                        </Tilt>
                    </a>
                </Box>
            </Fade>
        </Flex>
    );
};

export default Hero;

