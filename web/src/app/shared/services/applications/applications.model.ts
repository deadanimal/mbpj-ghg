import { AssessmentExtended } from '../assessments/assessments.model';
import { House } from '../houses/houses.model';
import { Media } from '../medias/medias.model';
import { Schedule } from '../schedules/schedules.model';
import { User } from '../users/users.model';

export class Application {
    constructor(
        public id: number,
        public reference_no: string,
        public applicant: number,
        public evaluator_nominated: number,
        public status: string,
        public applied_house: number,
        public total_lamp: number,
        public total_led: number,
        public vehicle_car: number,
        public vehicle_motorcycle: number,
        public vehicle_bicycle: number,
        public vehicle_other: number,
        public electricity_bill_1_month: string,
        public electricity_bill_1_usage: number,
        public electricity_bill_1_doc: string,
        public electricity_bill_2_month: string,
        public electricity_bill_2_usage: number,
        public electricity_bill_2_doc: string,
        public electricity_bill_3_month: string,
        public electricity_bill_3_usage: number,
        public electricity_bill_3_doc: string,
        public water_bill_1_month: string,
        public water_bill_1_usage: number,
        public water_bill_1_doc: string,
        public water_bill_2_month: string,
        public water_bill_2_usage: number,
        public water_bill_2_doc: string,
        public water_bill_3_month: string,
        public water_bill_3_usage: number,
        public water_bill_3_doc: string,
        public created_at: string,
        public modified_at: string,
        public approved_at: string
    ) {}
}

export class ApplicationExtended {
    constructor(
        public id: number,
        public reference_no: string,
        public applicant: User,
        public evaluator_nominated: User,
        public status: string,
        public applied_house: House,
        public total_lamp: number,
        public total_led: number,
        public vehicle_car: number,
        public vehicle_motorcycle: number,
        public vehicle_bicycle: number,
        public vehicle_other: number,
        public electricity_bill_1_month: string,
        public electricity_bill_1_usage: number,
        public electricity_bill_1_doc: Media,
        public electricity_bill_2_month: string,
        public electricity_bill_2_usage: number,
        public electricity_bill_2_doc: Media,
        public electricity_bill_3_month: string,
        public electricity_bill_3_usage: number,
        public electricity_bill_3_doc: Media,
        public water_bill_1_month: string,
        public water_bill_1_usage: number,
        public water_bill_1_doc: Media,
        public water_bill_2_month: string,
        public water_bill_2_usage: number,
        public water_bill_2_doc: Media,
        public water_bill_3_month: string,
        public water_bill_3_usage: number,
        public water_bill_3_doc: Media,
        public created_at: string,
        public modified_at: string,
        public approved_at: string,
        public application_assessment_application: AssessmentExtended[],
        public evaluation_schedule_application: Schedule,
    ) {}
}

export class ApplicationFiltered {
    constructor(
        public applications: {
            'submitted': ApplicationExtended[],
            'evaluation': ApplicationExtended[],
            'others': ApplicationExtended[]
        }
    ) {}
}

export class ApplicationTemp {
    constructor(
        public id: number,
        public applicant: number,
        public applicant_name: string,
        public evaluator_nominated: number,
        public evaluator_nominated_name: string,
        public status: string,
        public applied_house: number,
        public applied_house_assessment_tax_account: string,
        public total_lamp: number,
        public total_led: number,
        public vehicle_car: number,
        public vehicle_motorcycle: number,
        public vehicle_bicycle: number,
        public vehicle_other: number,
        public electricity_bill_1_month: string,
        public electricity_bill_1_usage: number,
        public electricity_bill_1_doc: string,
        public electricity_bill_2_month: string,
        public electricity_bill_2_usage: number,
        public electricity_bill_2_doc: string,
        public electricity_bill_3_month: string,
        public electricity_bill_3_usage: number,
        public electricity_bill_3_doc: string,
        public water_bill_1_month: string,
        public water_bill_1_usage: number,
        public water_bill_1_doc: string,
        public water_bill_2_month: string,
        public water_bill_2_usage: number,
        public water_bill_2_doc: string,
        public water_bill_3_month: string,
        public water_bill_3_usage: number,
        public water_bill_3_doc: string,
        public created_at: string,
        public modified_at: string
    ) {}
}