export interface Org {
    name: string;
    website: string;
}

export interface OrgData {
    org: Org;
    joiningMonth: string;
    leavingMonth: string | 'Present';
    position: string;
    work: string[];
}
