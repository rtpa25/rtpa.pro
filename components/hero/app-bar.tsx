import {
    Button,
    ButtonGroup,
    Flex,
    Heading,
    IconButton,
    useDisclosure,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { navButtons } from '../../data/nav-buttons-data';
import { ACCENT_COLOR } from '../../styles/consts';
import AppBarNavButton from './app-bar-nav-button';
import SideAppBarDrawer from './side-app-bar-drawer';

const AppBar = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();

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
