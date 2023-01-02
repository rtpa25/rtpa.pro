import { Box, ListItem, UnorderedList } from '@chakra-ui/react';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { ACCENT_COLOR } from '../styles/consts';

const SocialLinks = () => {
    return (
        <Box
            position={'fixed'}
            bottom={0}
            display={['none', 'none', 'block', 'block']}>
            <UnorderedList
                ml={12}
                listStyleType={'none'}
                _after={{
                    content: '""',
                    display: 'block',
                    width: '.8px',
                    height: '6rem',
                    margin: '0 auto',
                    bgColor: ACCENT_COLOR,
                }}>
                <ListItem my={10}>
                    <Box
                        w={6}
                        h={6}
                        transitionDuration={'0.2s'}
                        transitionProperty={'all'}
                        transitionTimingFunction={'ease-in'}
                        transform={'auto'}
                        color={ACCENT_COLOR}
                        _hover={{
                            translateY: -2,
                            color: ACCENT_COLOR,
                        }}>
                        <Link
                            href={'https://github.com/rtpa25'}
                            target='_blank'
                            rel='noreferrer'>
                            <FiGithub size={'100%'} />
                        </Link>
                    </Box>
                </ListItem>
                <ListItem my={10}>
                    <Box
                        w={6}
                        h={6}
                        color={ACCENT_COLOR}
                        transitionDuration={'0.2s'}
                        transitionProperty={'all'}
                        transitionTimingFunction={'ease-in'}
                        transform={'auto'}
                        _hover={{
                            translateY: -2,
                            color: ACCENT_COLOR,
                        }}>
                        <Link
                            href={'https://github.com/rtpa25'}
                            target='_blank'
                            rel='noreferrer'>
                            <FiLinkedin size={'100%'} />
                        </Link>
                    </Box>
                </ListItem>
                <ListItem my={10}>
                    <Box
                        w={6}
                        h={6}
                        color={ACCENT_COLOR}
                        transitionDuration={'0.2s'}
                        transitionProperty={'all'}
                        transitionTimingFunction={'ease-in'}
                        transform={'auto'}
                        _hover={{
                            translateY: -2,
                            color: ACCENT_COLOR,
                        }}>
                        <Link
                            href={'https://github.com/rtpa25'}
                            target='_blank'
                            rel='noreferrer'>
                            <FiTwitter size={'100%'} />
                        </Link>
                    </Box>
                </ListItem>
            </UnorderedList>
        </Box>
    );
};

export default SocialLinks;
