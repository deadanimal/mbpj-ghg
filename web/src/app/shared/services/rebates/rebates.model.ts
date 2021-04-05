import { Application } from '../applications/applications.model';

export class Rebate {
    constructor(
        public id: number,
        public application: number,
        public amount_approved: number,
        public created_at: string,
        public modified_at: string
    ) {}
}

export class RebateExtended {
    constructor(
        public id: number,
        public application: Application,
        public amount_approved: number,
        public created_at: string,
        public modified_at: string
    ) {}
}


export class RebateTemp {
    constructor(
        public id: number,
        public application: number,
        public applicant: string,
        public amount_approved: number,
        public created_at: string,
        public modified_at: string
    ) {}
}