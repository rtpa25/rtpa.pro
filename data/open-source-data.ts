import { OpenSourceProject } from '../types/open-source';

export const openSourceProjects: OpenSourceProject[] = [
    {
        name: 'Formbricks',
        work: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quis accusantium labore ratione consequatur, sunt porro quasi possimus alias voluptatem esse exercitationem quas, est amet! Est deleniti voluptas itaque maiores!',
        github: 'https://github.com/formbricks/formbricks/pulls/rtpa25',
        imageUrl: './formbricks1.png',
        tech: [
            'TypeScript',
            'NextJS',
            'Prisma',
            'Postgres',
            'Zod',
            'Tailwind',
            'RadixUI',
            'TurboRepo',
            'Eslint',
        ],
        tags: [
            {
                text: '3 Major Features',
                type: 'feature',
            },
            {
                text: 'bug fixes',
                type: 'bug fix',
            },
        ],
    },
    {
        name: 'Trigger',
        work: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quis accusantium labore ratione consequatur, sunt porro quasi possimus alias voluptatem esse exercitationem quas, est amet! Est deleniti voluptas itaque maiores!',
        github: 'https://github.com/formbricks/formbricks/pulls/rtpa25',
        imageUrl: './trigger1.png',
        tech: ['Helm Charts', 'Kubernetes', 'Docker', 'Documentation'],
        tags: [
            {
                text: '1 Major Feature',
                type: 'feature',
            },
            {
                text: 'Documentation',
                type: 'documentation',
            },
        ],
    },
    {
        name: 'Infisical',
        work: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quis accusantium labore ratione consequatur, sunt porro quasi possimus alias voluptatem esse exercitationem quas, est amet! Est deleniti voluptas itaque maiores!',
        github: 'https://github.com/formbricks/formbricks/pulls/rtpa25',
        imageUrl: './infisical1.png',
        tech: ['TypeScript', 'NextJS', 'MongoDB', 'Mongoose', 'Tailwind'],
        tags: [
            {
                text: '1 Feature',
                type: 'feature',
            },
        ],
    },
    {
        name: 'Twenty',
        work: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quis accusantium labore ratione consequatur, sunt porro quasi possimus alias voluptatem esse exercitationem quas, est amet! Est deleniti voluptas itaque maiores!',
        github: 'https://github.com/formbricks/formbricks/pulls/rtpa25',
        imageUrl: './twenty1.png',
        tech: ['TypeScript', 'ReactJS', 'GraphQL', 'StoryBook', 'NestJS'],
        tags: [
            {
                text: '1 bug fix',
                type: 'bug fix',
            },
            {
                text: '1 test',
                type: 'test',
            },
        ],
    },
];

