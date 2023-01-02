import { Box, Flex, ListItem, UnorderedList } from '@chakra-ui/react';
import { useState } from 'react';
import { orgData, orgList } from '../../data/orgData';
import { Org } from '../../types/org';
import SectionHeading from '../misc/section-heading';
import OrgDataCard from './org-data-card';
import OrgListButton from './org-list-button';

const Experience = () => {
    const [selectedOrgName, setSelectedOrgName] =
        useState<string>('SuperTokens');

    const [joiningMonth, setJoiningMonth] = useState<string>(
        orgData[selectedOrgName].joiningMonth
    );
    const [leavingMonth, setLeavingMonth] = useState<string>(
        orgData[selectedOrgName].leavingMonth
    );
    const [position, setPosition] = useState<string>(
        orgData[selectedOrgName].position
    );
    const [work, setWork] = useState<string[]>(orgData[selectedOrgName].work);
    const [org, setOrg] = useState<Org>(orgData[selectedOrgName].org);

    const orgButtonClickHandler = (orgName: string) => {
        setSelectedOrgName(orgName);
        setJoiningMonth(orgData[orgName].joiningMonth);
        setLeavingMonth(orgData[orgName].leavingMonth);
        setPosition(orgData[orgName].position);
        setWork(orgData[orgName].work);
        setOrg(orgData[orgName].org);
    };

    return (
        <Flex
            flexDir={'column'}
            justifyContent='center'
            minH={'100vh'}
            maxW={['90%', '70%', '60%', '50%']}
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
                        mx={[10, 10, 0, 0]}
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
                <Box flex={3} ml={10}>
                    <OrgDataCard
                        org={org}
                        joiningMonth={joiningMonth}
                        leavingMonth={leavingMonth}
                        position={position}
                        work={work}
                    />
                </Box>
            </Flex>
        </Flex>
    );
};

export default Experience;
