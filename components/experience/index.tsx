import { Box, Flex, ListItem, UnorderedList } from '@chakra-ui/react';
import { useState } from 'react';
import { orgData, orgList } from '../../data/org-data';
import SectionHeading from '../misc/section-heading';
import SectionWrapper from '../misc/section-wrapper';
import OrgDataCard from './org-data-card';
import OrgListButton from './org-list-button';

const Experience = () => {
    const [selectedOrgName, setSelectedOrgName] =
        useState<string>('SuperTokens');

    const orgButtonClickHandler = (orgName: string) => {
        setSelectedOrgName(orgName);
    };

    return (
        <SectionWrapper>
            <Box mb={[16]}>
                <SectionHeading
                    sectionHeadingText={'Past Experiences'}
                    sectionHeadingNumber={2}
                />
            </Box>
            <Flex flexDir={['column', 'column', 'row', 'row']} mb={40}>
                <Box flex={1}>
                    <UnorderedList
                        listStyleType={'none'}
                        mx={0}
                        mb={[10, 10, 0, 0]}
                        overflow={['auto', 'auto', 'hidden', 'hidden']}
                        display={['flex', 'flex', 'block', 'block']}>
                        {orgList.map((orgName) => (
                            <ListItem
                                key={orgName}
                                w='full'
                                fontFamily={'mono'}>
                                <OrgListButton
                                    isSelected={orgName === selectedOrgName}
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
        </SectionWrapper>
    );
};

export default Experience;
