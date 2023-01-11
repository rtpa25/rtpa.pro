import {
    Box,
    Flex,
    Heading,
    Link,
    ListIcon,
    ListItem,
    Text,
    UnorderedList,
} from '@chakra-ui/react';
import { AiFillCaretRight } from 'react-icons/ai';
import { ACCENT_COLOR } from '../../styles/consts';
import { FC } from 'react';
import { Org, OrgData } from '../../types/org';

interface OrgDataCardProps extends OrgData {}

const OrgDataCard: FC<OrgDataCardProps> = ({
    org,
    position,
    work,
    joiningMonth,
    leavingMonth,
}) => {
    return (
        <Flex flexDirection={'column'}>
            <Box>
                <Heading
                    fontSize={'2xl'}
                    fontWeight='normal'
                    color={'gray.300'}
                    mb={2}>
                    {position}{' '}
                    <Link
                        color={ACCENT_COLOR}
                        target='_blank'
                        rel='noreferrer'
                        href={org.website}>
                        @{org.name}
                    </Link>
                </Heading>
                <Text color={'gray.500'} fontFamily='mono'>
                    {joiningMonth} - {leavingMonth}
                </Text>
            </Box>
            <Box mt={3}>
                <UnorderedList
                    listStyleType={'none'}
                    mx={0}
                    spacing={2}
                    lineHeight={'tall'}
                    fontWeight='light'
                    color={'gray.300'}
                    letterSpacing={'wide'}>
                    {work.map((work) => (
                        <ListItem
                            key={work}
                            display={'flex'}
                            justifyContent='flex-start'
                            alignItems={'flex-start'}>
                            <ListIcon
                                mt={1.5}
                                mr={4}
                                height={'full'}
                                as={AiFillCaretRight}
                                color={ACCENT_COLOR}
                            />
                            {work}
                        </ListItem>
                    ))}
                </UnorderedList>
            </Box>
        </Flex>
    );
};

export default OrgDataCard;
