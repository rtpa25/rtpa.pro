import { Button } from '@chakra-ui/react';
import { Dispatch, FC, SetStateAction } from 'react';
import { ACCENT_COLOR, GRADIENT_ACCENT_COLOR } from '../../styles/consts';

interface OrgListButtonProps {
    orgName: string;
    clickHandler: (orgName: string) => void;
}

const OrgListButton: FC<OrgListButtonProps> = ({ orgName, clickHandler }) => {
    return (
        <Button
            textColor='gray.400'
            borderLeft={['none', 'none', '1px', '1px']}
            borderColor={'gray.600'}
            borderBottom={['1px', '1px', 'none', 'none']}
            py={6}
            variant={'ghost'}
            w={'full'}
            display={'flex'}
            textAlign='left'
            justifyContent={'flex-start'}
            _hover={{
                textColor: ACCENT_COLOR,
                bgColor: GRADIENT_ACCENT_COLOR,
            }}
            _focus={{
                textColor: ACCENT_COLOR,
                bgColor: GRADIENT_ACCENT_COLOR,
                borderColor: GRADIENT_ACCENT_COLOR,
                borderLeft: '2px',
            }}
            rounded='none'
            onClick={() => clickHandler(orgName)}>
            {orgName}
        </Button>
    );
};

export default OrgListButton;
