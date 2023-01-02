import { Box, Flex, ListItem, UnorderedList } from '@chakra-ui/react';
import { useState } from 'react';
import { orgData, orgList } from '../../data/orgData';
import SectionHeading from '../misc/section-heading';
import OrgDataCard from './org-data-card';
import OrgListButton from './org-list-button';

const Experience = () => {
    const [selectedOrgName, setSelectedOrgName] =
        useState<string>('SuperTokens');

    const orgButtonClickHandler = (orgName: string) => {
        setSelectedOrgName(orgName);
    };

    return (
        <Flex
            flexDir={'column'}
            justifyContent='center'
            minH={'100vh'}
            maxW={['90%', '80%', '70%', '60%']}
            mx={'auto'}>
            <Box my={16}>
                <SectionHeading
                    sectionHeadingText={'Where I’ve Worked'}
                    sectionHeadingNumber={2}
                />
            </Box>
            <Flex flexDir={['column', 'column', 'row', 'row']}>
                <Box flex={1}>
                    <UnorderedList
                        listStyleType={'none'}
                        mb={[10, 10, 0, 0]}
                        overflow={['auto', 'auto', 'hidden', 'hidden']}
                        display={['flex', 'flex', 'block', 'block']}>
                        {orgList.map((orgName) => (
                            <ListItem
                                key={orgName}
                                w='full'
                                fontFamily={'mono'}>
                                <OrgListButton
                                    orgName={orgName}
                                    clickHandler={orgButtonClickHandler}
                                />
                            </ListItem>
                        ))}
                    </UnorderedList>
                </Box>
                <Box flex={3.5} ml={[0, 0, 10, 10]}>
                    <OrgDataCard
                        org={orgData[selectedOrgName].org}
                        joiningMonth={orgData[selectedOrgName].joiningMonth}
                        leavingMonth={orgData[selectedOrgName].leavingMonth}
                        position={orgData[selectedOrgName].position}
                        work={orgData[selectedOrgName].work}
                    />
                </Box>
            </Flex>
        </Flex>
    );
};

export default Experience;
