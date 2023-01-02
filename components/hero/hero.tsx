import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { Fade } from 'react-awesome-reveal';
import { ACCENT_COLOR } from '../../styles/consts';

const Hero = () => {
    return (
        <Flex
            mx={'auto'}
            maxW={['90%', '80%', '70%']}
            flexDirection={'column'}
            justifyContent='center'
            alignItems={'flex-start'}
            minH='90vh'>
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
                        I build things for the web.
                    </Heading>
                </Box>

                <Box
                    my={6}
                    maxW={['80%', '70%', '60%', '50%']}
                    lineHeight={1.5}
                    fontSize={['sm', 'md', 'lg']}
                    color={['gray.300', 'gray.400', 'gray.400']}
                    letterSpacing={1.1}
                    fontWeight={'light'}>
                    <Text>
                        {
                            "I'm a software engineer based out of India specializing in building full stack web apps. Currently, I'm an looking for an "
                        }
                        internship at a{' '}
                        <span style={{ color: ACCENT_COLOR }}>
                            high growth startup
                        </span>
                        .
                    </Text>
                </Box>
                <Box my={4}>
                    <Button
                        fontSize={'xl'}
                        p={8}
                        fontWeight={'normal'}
                        variant={'outline'}
                        fontFamily={'mono'}
                        borderColor={ACCENT_COLOR}
                        color={ACCENT_COLOR}>
                        Get in touch!
                    </Button>
                </Box>
            </Fade>
        </Flex>
    );
};

export default Hero;
