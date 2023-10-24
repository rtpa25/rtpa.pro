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
                variant={'ghost'}
                rounded={'full'}
                colorScheme={'purple'}
                fontSize={'sm'}>
                <Text color={'gray.200'}>{btnText}</Text>
            </Button>
        </ReactScrollLink>
    );
};

export default AppBarNavButton;

