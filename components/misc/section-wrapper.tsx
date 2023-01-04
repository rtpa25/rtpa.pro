import { Flex } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

interface SectionWrapperProps {
    children: ReactNode;
    variant?: 'thin' | 'wide';
}

const SectionWrapper: FC<SectionWrapperProps> = ({ children, variant }) => {
    return (
        <Flex
            flexDir={'column'}
            justifyContent='center'
            maxW={[
                '90%',
                '80%',
                '70%',
                `${variant === 'wide' ? '70%' : '60%'}`,
            ]}
            minH={'100vh'}
            mb={[10]}
            mx={'auto'}>
            {children}
        </Flex>
    );
};

export default SectionWrapper;
