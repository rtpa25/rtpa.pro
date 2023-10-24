import { OpenSourceProject } from '../types/open-source';

export const openSourceProjects: OpenSourceProject[] = [
    {
        name: 'Formbricks',
        work: 'Implemented the option to add hidden fields to collect user metadata, Also added ability to upload image to each question. Added a feature to recall information from past questions, and fixed a versioning bug in the pre-commit hook. Got each PR into production within a day or two.',
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
                text: '✨ 3 Major Features',
                type: 'feature',
            },
            {
                text: 'Bug Fixes',
                type: 'bug fix',
            },
        ],
    },
    {
        name: 'Trigger',
        work: 'Trigger currently supplies a Docker image for self-hosters to use. They also wanted to support self-hosters who use kubernetes to be able to easily deploy Trigger.dev. So I wrote a helm chart to improve self-hosting on Kubernetes',
        github: 'https://github.com/triggerdotdev/trigger.dev/pulls/rtpa25',
        imageUrl: './trigger1.png',
        tech: ['Helm Charts', 'Kubernetes', 'Docker', 'Documentation'],
        tags: [
            {
                text: '1 Major Feature ✨',
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
        work: 'Infisical opened an issue from One of their users, to have the ability to create multiple organizations under the same account and switch between them seamlessly without logging in to different accounts, So shot a pr adding that feature within day and got it merged!',
        github: 'https://github.com/Infisical/infisical/pulls/rtpa25',
        imageUrl: './infisical1.png',
        tech: [
            'TypeScript',
            'NextJS',
            'MongoDB',
            'Express',
            'Mongoose',
            'Tailwind',
        ],
        tags: [
            {
                text: '✨ 1 Major Feature',
                type: 'feature',
            },
        ],
    },
    {
        name: 'Twenty',
        work: 'One of the most sophisticated code bases I have ever worked on, Added end to end tests on a specific feature of the app, added multiple UI fixes & I closed one of their chore issues, of removing typed imports from every file of the codebase as not really a use case.',
        github: 'https://github.com/twentyhq/twenty/pulls?q=is%3Apr+author%3Artpa25',
        imageUrl: './twenty1.png',
        tech: ['TypeScript', 'ReactJS', 'GraphQL', 'StoryBook', 'NestJS'],
        tags: [
            {
                text: 'Bug Fixes',
                type: 'bug fix',
            },
            {
                text: 'E2E Tests',
                type: 'test',
            },
            {
                text: 'Chore',
                type: 'chore',
            },
        ],
    },
];

