import { Button, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Link as ReactScrollLink } from 'react-scroll';
import { ACCENT_COLOR } from '../../styles/consts';

interface AppBarNavButtonProps {
    to: string;
    idx: number;
    btnText: string;
}

const AppBarNavButton: FC<AppBarNavButtonProps> = ({ btnText, idx, to }) => {
    return (
        <ReactScrollLink to={to} smooth={true} duration={1000}>
            <Button
                fontFamily={'mono'}
                fontWeight={'normal'}
                fontSize={'sm'}
                _focus={{ outline: 'none', bgColor: 'inherit' }}
                _hover={{
                    bgColor: 'inherit',
                    color: ACCENT_COLOR,
                }}>
                <Text mx={1} color={ACCENT_COLOR}>
                    0{idx + 1}.{' '}
                </Text>
                <Text _hover={{ textDecoration: 'underline' }}>{btnText}</Text>
            </Button>
        </ReactScrollLink>
    );
};

export default AppBarNavButton;
