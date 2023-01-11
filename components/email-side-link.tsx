import { Box, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import Link from 'next/link';

const EmailSideLink = () => {
    return (
        <Box
            position={'fixed'}
            bottom={0}
            right={0}
            display={['none', 'none', 'block', 'block']}>
            <UnorderedList
                mr={12}
                listStyleType={'none'}
                _after={{
                    content: '""',
                    display: 'block',
                    width: '.8px',
                    height: '6rem',
                    margin: '0 auto',
                    bgColor: 'gray.400',
                }}>
                <ListItem my={'52'}>
                    <Box
                        w={6}
                        h={6}
                        transitionDuration={'0.2s'}
                        transitionProperty={'all'}
                        transitionTimingFunction={'ease-in'}
                        transform={'auto'}
                        color={'gray.400'}
                        _hover={{
                            translateY: -2,
                            color: 'gray.200',
                        }}>
                        <Link
                            href={`mailto:pandaronit25@gmail.com`}
                            target='_blank'
                            style={{
                                writingMode: 'vertical-rl',
                            }}
                            rel='noreferrer'>
                            <Text>pandaronit25@gmail.com</Text>
                        </Link>
                    </Box>
                </ListItem>
            </UnorderedList>
        </Box>
    );
};

export default EmailSideLink;
