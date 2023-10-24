export interface OpenSourceProject {
    name: string;
    work: string;
    github: string;
    imageUrl: string;
    tech: string[];
    tags: {
        type: 'feature' | 'bug fix' | 'test' | 'documentation' | 'chore';
        text: string;
    }[];
}

