import { Box, ListItem, UnorderedList } from '@chakra-ui/react';
import { socialLinks } from '../data/social-links-data';
import { ACCENT_COLOR } from '../styles/consts';
import SocialIconLink from './social-icon-link';

const SocialLinks = () => {
    return (
        <Box
            position={['absolute', 'absolute', 'fixed', 'fixed']}
            bottom={[10, 10, 0, 0]}
            w={['full', 'full', 'auto', 'auto']}
            display={['flex', 'flex', 'block', 'block']}>
            <UnorderedList
                w={'full'}
                ml={[0, 0, 12, 12]}
                display={['flex', 'flex', 'block', 'block']}
                justifyContent={'center'}
                alignItems={'center'}
                listStyleType={'none'}
                _after={{
                    content: '""',
                    display: ['none', 'none', 'block', 'block'],
                    position: 'relative',
                    right: '36%',
                    width: '.8px',
                    height: '6rem',
                    margin: '0 auto',
                    bgColor: ACCENT_COLOR,
                }}>
                {socialLinks.map((link) => (
                    <ListItem my={10} mx={[10, 10, 0, 0]} key={link.address}>
                        <SocialIconLink href={link.address} type={link.type} />
                    </ListItem>
                ))}
            </UnorderedList>
        </Box>
    );
};

export default SocialLinks;
