import { OrgData } from '../types/org';

export const orgData: {
    [key: string]: OrgData;
} = {
    SuperTokens: {
        org: {
            name: 'SuperTokens',
            website: 'https://supertokens.com',
        },
        joiningMonth: 'Jan 2022',
        leavingMonth: 'Jun 2022',
        position: 'Software Engineer Intern',
        work: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestiae. Ratione harum minus ad ducimus soluta rem possimus laborum numquam.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestiae. Ratione harum minus ad ducimus soluta rem possimus laborum numquam.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestiae. Ratione harum minus ad ducimus soluta rem possimus laborum numquam.',
        ],
    },
    Ether: {
        org: {
            name: 'Ether',
            website: 'https://supertokens.com',
        },
        joiningMonth: 'Feb 2021',
        leavingMonth: 'Sept 2021',
        position: 'Co-Founder & Software Developer',
        work: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestiae. Ratione harum minus ad ducimus soluta rem possimus laborum numquam.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestiae. Ratione harum minus ad ducimus soluta rem possimus laborum numquam.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestiae. Ratione harum minus ad ducimus soluta rem possimus laborum numquam.',
        ],
    },
};

export const orgList = ['SuperTokens', 'Ether'];
