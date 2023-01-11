import {
    Button,
    ButtonGroup,
    Flex,
    Heading,
    IconButton,
    useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BsSoundwave } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import useSound from 'use-sound';
import { navButtons } from '../../data/nav-buttons-data';
import { ACCENT_COLOR } from '../../styles/consts';
import AppBarNavButton from './app-bar-nav-button';
import SideAppBarDrawer from './side-app-bar-drawer';

const AppBar = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();

    const [play, { pause, sound }] = useSound('bg-music.mp3', {
        soundEnabled: true,
        volume: 0.5,
        loop: true,
    });

    const [isPlaying, setIsPlaying] = useState(false);

    const toggleMusic = () => {
        if (isPlaying) {
            pause();
            setIsPlaying(false);
        } else {
            play();
            sound.loop = true;
            setIsPlaying(true);
        }
    };

    return (
        <Flex
            minH={'10vh'}
            px={[6, 8, 10, 12]}
            py={8}
            alignItems='baseline'
            justifyContent={'space-between'}>
            <Heading
                color={ACCENT_COLOR}
                fontWeight='normal'
                fontFamily={'serif'}
                cursor={'pointer'}
                onClick={() => window.location.reload()}>
                RP
            </Heading>

            <Flex
                alignItems={'baseline'}
                display={['none', 'none', 'none', 'block']}>
                <ButtonGroup variant={'ghost'}>
                    {navButtons.map((navButton, idx) => {
                        return (
                            <AppBarNavButton
                                to={navButton.to}
                                idx={idx}
                                key={navButton.btnText}
                                btnText={navButton.btnText}
                            />
                        );
                    })}
                </ButtonGroup>
                <IconButton
                    onClick={toggleMusic}
                    aria-label='sound'
                    icon={<BsSoundwave />}
                    variant={'ghost'}
                    ml={4}
                    _hover={{
                        border: '1px solid',
                        borderColor: ACCENT_COLOR,
                    }}
                    color={ACCENT_COLOR}
                />
                <Button
                    variant={'outline'}
                    ml={4}
                    borderColor={ACCENT_COLOR}
                    color={ACCENT_COLOR}>
                    Resume
                </Button>
            </Flex>

            <IconButton
                onClick={onOpen}
                display={['flex', 'flex', 'flex', 'none']}
                aria-label='hamburger'
                color={ACCENT_COLOR}
                icon={<GiHamburgerMenu />}
            />
            <SideAppBarDrawer isOpen={isOpen} onClose={onClose} />
        </Flex>
    );
};

export default AppBar;
