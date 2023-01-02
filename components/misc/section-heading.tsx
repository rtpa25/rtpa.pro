import { Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { ACCENT_COLOR } from '../../styles/consts';

interface SectionHeadingProps {
    sectionHeadingText: string;
    sectionHeadingNumber: number;
}

const SectionHeading: FC<SectionHeadingProps> = ({
    sectionHeadingNumber,
    sectionHeadingText,
}) => {
    return (
        <Heading
            color={'gray.300'}
            fontWeight='semibold'
            _after={{
                content: '""',
                display: 'inline-block',
                position: 'relative',
                top: '-.7rem',
                width: '40%',
                height: '1px',
                ml: '1rem',
                backgroundColor: 'gray.700',
            }}>
            <Text
                fontSize={'3xl'}
                color={ACCENT_COLOR}
                mr={1}
                display={'inline'}
                fontFamily='mono'>
                0{sectionHeadingNumber}.{' '}
            </Text>
            {sectionHeadingText}
        </Heading>
    );
};

export default SectionHeading;
