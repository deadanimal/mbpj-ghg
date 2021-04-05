import { AssessmentExtended } from '../assessments/assessments.model';

export class Evaluation {
    constructor(
        public id: number,
        public application_assessment: string,
        public equipment: number,
        public system: number,
        public efficiency: number,
        public remarks: string,
        public created_at: string,
        public modified_at: string
    ) {}
}

export class EvaluationExtended {
    constructor(
        public id: number,
        public application_assessment: AssessmentExtended,
        public equipment: number,
        public system: number,
        public efficiency: number,
        public remarks: string,
        public created_at: string,
        public modified_at: string
    ) {}
}