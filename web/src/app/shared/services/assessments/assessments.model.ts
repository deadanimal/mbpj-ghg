import { Application } from '../applications/applications.model';
import { Aspect } from '../aspects/aspects.model';
import { Evaluation } from '../evaluations/evaluations.model';
import { Media } from '../medias/medias.model';

export class Assessment {
    constructor(
        public id: number,
        public application: string,
        public assessment_aspect: string,
        public remarks: string,
        public supporting_doc: string,
        public created_at: string,
        public modified_at: string
    ) {}
}

export class AssessmentExtended {
    constructor(
        public id: number,
        public application: Application,
        public assessment_aspect: Aspect,
        public application_application_assessment: Evaluation,
        public remarks: string,
        public supporting_doc: Media,
        public created_at: string,
        public modified_at: string
    ) {}
}