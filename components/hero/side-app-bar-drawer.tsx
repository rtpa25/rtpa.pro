import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    ListItem,
    Stack,
    Text,
    UnorderedList,
} from '@chakra-ui/react';
import { FC } from 'react';
import { navButtons } from '../../data/nav-buttons-data';
import { ACCENT_COLOR } from '../../styles/consts';
import { scroller } from 'react-scroll';
import { NavButton } from '../../types/nav-button';

interface SideAppBarDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const SideAppBarDrawer: FC<SideAppBarDrawerProps> = ({ isOpen, onClose }) => {
    const navigationHandler = (scrollTo: NavButton['to']) => {
        onClose();
        scroller.scrollTo(scrollTo, {
            duration: 1000,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    };

    return (
        <Drawer onClose={onClose} isOpen={isOpen} size={'sm'}>
            <DrawerOverlay />
            <DrawerContent bgColor={'black'}>
                <DrawerCloseButton m={3} color={ACCENT_COLOR} size={'lg'} />
                <DrawerBody
                    display={'flex'}
                    flexDir={'column'}
                    justifyContent='center'
                    alignItems={'center'}
                    textAlign={'center'}>
                    <UnorderedList listStyleType={'none'} fontFamily='mono'>
                        {navButtons.map((nav, idx) => (
                            <ListItem my={8} key={nav.btnText}>
                                <Stack spacing={1}>
                                    <Text color={ACCENT_COLOR}>
                                        0{idx + 1}.
                                    </Text>
                                    <Button
                                        onClick={() =>
                                            navigationHandler(nav.to)
                                        }
                                        variant={'link'}
                                        fontSize={'xl'}
                                        _hover={{
                                            bgColor: 'inherit',
                                            color: ACCENT_COLOR,
                                        }}
                                        fontWeight={'normal'}
                                        color={'gray.300'}>
                                        {nav.btnText}
                                    </Button>
                                </Stack>
                            </ListItem>
                        ))}
                    </UnorderedList>
                    <Button
                        mt={10}
                        variant={'outline'}
                        ml={4}
                        w={'40%'}
                        py={6}
                        borderColor={ACCENT_COLOR}
                        color={ACCENT_COLOR}>
                        Resume
                    </Button>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
};

export default SideAppBarDrawer;
