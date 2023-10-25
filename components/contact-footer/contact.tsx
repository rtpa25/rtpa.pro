import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { ACCENT_COLOR } from '../../styles/consts';
import SectionWrapper from '../misc/section-wrapper';
import Tilt from 'react-parallax-tilt';

const ContactFooter = () => {
    return (
        <SectionWrapper>
            <Box textAlign={'center'}>
                <Heading
                    color={ACCENT_COLOR}
                    fontFamily={'mono'}
                    fontSize={'lg'}
                    mb={4}>
                    07. What’s Next?
                </Heading>
                <Heading fontSize={'5xl'} mb={4}>
                    Get In Touch
                </Heading>
                <Text
                    maxW={['full', '90%', '80%', '70%', '60%']}
                    mx='auto'
                    color={'gray.400'}
                    opacity={0.87}
                    letterSpacing='wide'
                    lineHeight={'tall'}>
                    I’m currently looking for a full-stack developer role, In a
                    pre-series A startup. And work along side a highly focussed
                    team that is trying to put a dent in the universe. Sounds
                    familiar? Let’s talk.
                </Text>
                <Box mx={'auto'} w='fit-content' mt={10}>
                    <a
                        href={`mailto:pandaronit25@gmail.com`}
                        target='_blank'
                        rel='noreferrer'>
                        <Tilt
                            tiltEnable={false}
                            glareEnable={true}
                            glareMaxOpacity={0.5}
                            glareColor={ACCENT_COLOR}
                            glarePosition='all'>
                            <Button
                                px='10'
                                py='7'
                                fontFamily={'mono'}
                                boxShadow={
                                    'rgba(132, 59, 206, 0.15) 0px 8px 32px 10px'
                                }
                                _hover={{
                                    boxShadow:
                                        'rgba(152, 67, 237, 0.501) 0px 8px 32px 10px',
                                }}
                                borderColor={ACCENT_COLOR}
                                color={ACCENT_COLOR}
                                variant='outline'>
                                Say Hello 👋
                            </Button>
                        </Tilt>
                    </a>
                </Box>
            </Box>
        </SectionWrapper>
    );
};

export default ContactFooter;

