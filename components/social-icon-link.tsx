import { Box, Link } from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import { IconType } from 'react-icons';
import { FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi';
import { ACCENT_COLOR } from '../styles/consts';

interface SocialIconLinkProps {
    href: string;
    type: 'linkedin' | 'github' | 'twitter';
}

const SocialIconLink: FC<SocialIconLinkProps> = ({ href, type }) => {
    const LinkIcon: IconType =
        type === 'linkedin'
            ? FiLinkedin
            : type === 'github'
            ? FiGithub
            : FiTwitter;

    return (
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
            <Link href={href} target='_blank' rel='noreferrer'>
                <LinkIcon size={'100%'} />
            </Link>
        </Box>
    );
};

export default SocialIconLink;
