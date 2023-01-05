import { Button } from '@chakra-ui/react';
import { Dispatch, FC, SetStateAction } from 'react';
import { ACCENT_COLOR, GRADIENT_ACCENT_COLOR } from '../../styles/consts';

interface OrgListButtonProps {
    orgName: string;
    clickHandler: (orgName: string) => void;
    isSelected: boolean;
}

const OrgListButton: FC<OrgListButtonProps> = ({
    orgName,
    clickHandler,
    isSelected,
}) => {
    return (
        <Button
            textColor={isSelected ? ACCENT_COLOR : 'gray.400'}
            bgColor={isSelected ? GRADIENT_ACCENT_COLOR : 'transparent'}
            borderLeft={[
                'none',
                'none',
                `${isSelected ? '2px' : '1px'}`,
                `${isSelected ? '2px' : '1px'}`,
            ]}
            borderColor={isSelected ? GRADIENT_ACCENT_COLOR : 'gray.600'}
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
