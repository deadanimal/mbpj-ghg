export class Application {
    public id: string
    public applicant: string
    public evaluator_nominated: string
    public applied_house: string
    public status: string
    public date_submitted: string
    public date_approved: string
    public year_application: string
    public past_application: boolean
    public past_application_number: string

    constructor(
        id: string,
        applicant: string,
        evaluator_nominated: string,
        applied_house: string,
        status: string,
        date_submitted: string,
        date_approved: string,
        year_application: string,
        past_application: boolean,
        past_application_number: string
    ){
        this.id = id
        this.applicant = applicant
        this.evaluator_nominated = evaluator_nominated
        this.applied_house = applied_house
        this.status = status
        this.date_submitted = date_submitted
        this.date_approved = date_approved
        this.year_application = year_application
        this.past_application = past_application
        this.past_application_number = past_application_number
    }
}

export class MergedApplication {
    public id: string
    public applicant_id: string
    public applicant_name: string
    public evaluator_nominated_id: string
    public evaluator_nominated_name: string
    public applied_house_id: string
    public applied_house_assessment_tax_account: string
    public status: string
    public date_submitted: string

    constructor(
        id: string,
        applicant_id: string,
        applicant_name: string,
        evaluator_nominated_id: string,
        evaluator_nominated_name: string,
        applied_house_id: string,
        applied_house_assessment_tax_account: string,
        status: string,
        date_submitted: string
    ){
        this.id = id
        this.applicant_id = applicant_id
        this.applicant_name = applicant_name
        this.evaluator_nominated_id = evaluator_nominated_id
        this.evaluator_nominated_name = evaluator_nominated_name
        this.applied_house_id = applied_house_id
        this.applied_house_assessment_tax_account = applied_house_assessment_tax_account
        this.status = status
        this.date_submitted = date_submitted
    }
}