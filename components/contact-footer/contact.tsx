import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { ACCENT_COLOR } from '../../styles/consts';
import SectionWrapper from '../misc/section-wrapper';

const ContactFooter = () => {
    return (
        <SectionWrapper>
            <Box textAlign={'center'}>
                <Heading
                    color={ACCENT_COLOR}
                    fontFamily={'mono'}
                    fontSize={'lg'}
                    mb={4}>
                    06. What’s Next?
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
                    I’m currently looking for an internship at a seed or
                    series-A startup as a full-Stack Developer Intern and
                    contribute to teams that want to make a difference. Does it
                    ring a bell, 👇
                </Text>
                <Button
                    mx='auto'
                    mt={'10'}
                    px='10'
                    py='7'
                    fontFamily={'mono'}
                    boxShadow={'rgba(132, 59, 206, 0.15) 0px 8px 32px 10px'}
                    _hover={{
                        boxShadow:
                            'rgba(152, 67, 237, 0.501) 0px 8px 32px 10px',
                    }}
                    borderColor={ACCENT_COLOR}
                    color={ACCENT_COLOR}
                    variant='outline'>
                    Say Hello
                </Button>
            </Box>
        </SectionWrapper>
    );
};

export default ContactFooter;
