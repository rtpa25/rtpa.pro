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
import { HERO_ACCENT_COLOR } from '../../styles/consts';

interface SideAppBarDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const SideAppBarDrawer: FC<SideAppBarDrawerProps> = ({ isOpen, onClose }) => {
    return (
        <Drawer onClose={onClose} isOpen={isOpen} size={'sm'}>
            <DrawerOverlay />
            <DrawerContent bgColor={'black'}>
                <DrawerCloseButton
                    m={3}
                    color={HERO_ACCENT_COLOR}
                    size={'lg'}
                />
                <DrawerBody
                    display={'flex'}
                    flexDir={'column'}
                    justifyContent='center'
                    alignItems={'center'}
                    textAlign={'center'}>
                    <UnorderedList listStyleType={'none'} fontFamily='mono'>
                        <ListItem my={8}>
                            <Stack spacing={1}>
                                <Text color={HERO_ACCENT_COLOR}>01.</Text>
                                <Button
                                    variant={'link'}
                                    fontSize={'xl'}
                                    _hover={{
                                        bgColor: 'inherit',
                                        color: HERO_ACCENT_COLOR,
                                        textDecoration: 'underline',
                                    }}
                                    fontWeight={'normal'}
                                    color={'gray.300'}>
                                    About
                                </Button>
                            </Stack>
                        </ListItem>

                        <ListItem my={8}>
                            <Stack spacing={1}>
                                <Text color={HERO_ACCENT_COLOR}>02.</Text>
                                <Button
                                    variant={'link'}
                                    fontSize={'xl'}
                                    _hover={{
                                        bgColor: 'inherit',
                                        color: HERO_ACCENT_COLOR,
                                        textDecoration: 'underline',
                                    }}
                                    fontWeight={'normal'}
                                    color={'gray.300'}>
                                    Experience
                                </Button>
                            </Stack>
                        </ListItem>

                        <ListItem my={8}>
                            <Stack spacing={1}>
                                <Text color={HERO_ACCENT_COLOR}>03.</Text>
                                <Button
                                    variant={'link'}
                                    fontSize={'xl'}
                                    _hover={{
                                        bgColor: 'inherit',
                                        color: HERO_ACCENT_COLOR,
                                        textDecoration: 'underline',
                                    }}
                                    fontWeight={'normal'}
                                    color={'gray.300'}>
                                    Projects
                                </Button>
                            </Stack>
                        </ListItem>

                        <ListItem my={8}>
                            <Stack spacing={1}>
                                <Text color={HERO_ACCENT_COLOR}>04.</Text>
                                <Button
                                    variant={'link'}
                                    fontSize={'xl'}
                                    _hover={{
                                        bgColor: 'inherit',
                                        color: HERO_ACCENT_COLOR,
                                        textDecoration: 'underline',
                                    }}
                                    fontWeight={'normal'}
                                    color={'gray.300'}>
                                    Education
                                </Button>
                            </Stack>
                        </ListItem>

                        <ListItem my={8}>
                            <Stack spacing={1}>
                                <Text color={HERO_ACCENT_COLOR}>05.</Text>
                                <Button
                                    variant={'link'}
                                    fontSize={'xl'}
                                    _hover={{
                                        bgColor: 'inherit',
                                        color: HERO_ACCENT_COLOR,
                                        textDecoration: 'underline',
                                    }}
                                    fontWeight={'normal'}
                                    color={'gray.300'}>
                                    Contact
                                </Button>
                            </Stack>
                        </ListItem>
                    </UnorderedList>
                    <Button
                        mt={10}
                        variant={'outline'}
                        ml={4}
                        w={'40%'}
                        py={6}
                        borderColor={HERO_ACCENT_COLOR}
                        color={HERO_ACCENT_COLOR}>
                        Resume
                    </Button>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
};

export default SideAppBarDrawer;
