export class Application {
    public id: string
    public applicant: string
    public evaluator_nominated: string
    public status: string
    public applied_house: string
    public total_lamp: number
    public total_led: number
    public vehicle_car: number
    public vehicle_motorcycle: number
    public vehicle_bicycle: number
    public vehicle_other: number
    public electricity_bill_1_month: string
    public electricity_bill_1_usage: number
    public electricity_bill_1_doc: string
    public electricity_bill_2_month: string
    public electricity_bill_2_usage: number
    public electricity_bill_2_doc: string
    public electricity_bill_3_month: string
    public electricity_bill_3_usage: number
    public electricity_bill_3_doc: string
    public water_bill_1_month: string
    public water_bill_1_usage: number
    public water_bill_1_doc: string
    public water_bill_2_month: string
    public water_bill_2_usage: number
    public water_bill_2_doc: string
    public water_bill_3_month: string
    public water_bill_3_usage: number
    public water_bill_3_doc: string
    public created_at: string
    public modified_at: string

    constructor(
        id: string,
        applicant: string,
        evaluator_nominated: string,
        status: string,
        applied_house: string,
        total_lamp: number,
        total_led: number,
        vehicle_car: number,
        vehicle_motorcycle: number,
        vehicle_bicycle: number,
        vehicle_other: number,
        electricity_bill_1_month: string,
        electricity_bill_1_usage: number,
        electricity_bill_1_doc: string,
        electricity_bill_2_month: string,
        electricity_bill_2_usage: number,
        electricity_bill_2_doc: string,
        electricity_bill_3_month: string,
        electricity_bill_3_usage: number,
        electricity_bill_3_doc: string,
        water_bill_1_month: string,
        water_bill_1_usage: number,
        water_bill_1_doc: string,
        water_bill_2_month: string,
        water_bill_2_usage: number,
        water_bill_2_doc: string,
        water_bill_3_month: string,
        water_bill_3_usage: number,
        water_bill_3_doc: string,
        created_at: string,
        modified_at: string
    ) {
        this.id = id
        this.applicant = applicant
        this.evaluator_nominated = evaluator_nominated
        this.status = status
        this.applied_house = applied_house
        this.total_lamp = total_lamp
        this.total_led = total_led
        this.vehicle_car = vehicle_car
        this.vehicle_motorcycle = vehicle_motorcycle
        this.vehicle_bicycle = vehicle_bicycle
        this.vehicle_other = vehicle_other
        this.electricity_bill_1_month = electricity_bill_1_month
        this.electricity_bill_1_usage = electricity_bill_1_usage
        this.electricity_bill_1_doc = electricity_bill_1_doc
        this.electricity_bill_2_month = electricity_bill_2_month
        this.electricity_bill_2_usage = electricity_bill_2_usage
        this.electricity_bill_2_doc = electricity_bill_2_doc
        this.electricity_bill_3_month = electricity_bill_3_month
        this.electricity_bill_3_usage = electricity_bill_3_usage
        this.electricity_bill_3_doc = electricity_bill_3_doc
        this.water_bill_1_month = water_bill_1_month
        this.water_bill_1_usage = water_bill_1_usage
        this.water_bill_1_doc = water_bill_1_doc
        this.water_bill_2_month = water_bill_2_month
        this.water_bill_2_usage = water_bill_2_usage
        this.water_bill_2_doc = water_bill_2_doc
        this.water_bill_3_month = water_bill_3_month
        this.water_bill_3_usage = water_bill_3_usage
        this.water_bill_3_doc = water_bill_3_doc
        this.created_at = created_at
        this.modified_at = modified_at
    }
}

export class ApplicationTemp {
    public id: string
    public applicant: string
    public applicant_name: string
    public evaluator_nominated: string
    public evaluator_nominated_name: string
    public status: string
    public applied_house: string
    public applied_house_assessment_tax_account: string
    public total_lamp: number
    public total_led: number
    public vehicle_car: number
    public vehicle_motorcycle: number
    public vehicle_bicycle: number
    public vehicle_other: number
    public electricity_bill_1_month: string
    public electricity_bill_1_usage: number
    public electricity_bill_1_doc: string
    public electricity_bill_2_month: string
    public electricity_bill_2_usage: number
    public electricity_bill_2_doc: string
    public electricity_bill_3_month: string
    public electricity_bill_3_usage: number
    public electricity_bill_3_doc: string
    public water_bill_1_month: string
    public water_bill_1_usage: number
    public water_bill_1_doc: string
    public water_bill_2_month: string
    public water_bill_2_usage: number
    public water_bill_2_doc: string
    public water_bill_3_month: string
    public water_bill_3_usage: number
    public water_bill_3_doc: string
    public created_at: string
    public modified_at: string

    constructor(
        id: string,
        applicant: string,
        applicant_name: string,
        evaluator_nominated: string,
        evaluator_nominated_name: string,
        status: string,
        applied_house: string,
        applied_house_assessment_tax_account: string,
        total_lamp: number,
        total_led: number,
        vehicle_car: number,
        vehicle_motorcycle: number,
        vehicle_bicycle: number,
        vehicle_other: number,
        electricity_bill_1_month: string,
        electricity_bill_1_usage: number,
        electricity_bill_1_doc: string,
        electricity_bill_2_month: string,
        electricity_bill_2_usage: number,
        electricity_bill_2_doc: string,
        electricity_bill_3_month: string,
        electricity_bill_3_usage: number,
        electricity_bill_3_doc: string,
        water_bill_1_month: string,
        water_bill_1_usage: number,
        water_bill_1_doc: string,
        water_bill_2_month: string,
        water_bill_2_usage: number,
        water_bill_2_doc: string,
        water_bill_3_month: string,
        water_bill_3_usage: number,
        water_bill_3_doc: string,
        created_at: string,
        modified_at: string
    ) {
        this.id = id
        this.applicant = applicant
        this.applicant_name = applicant_name
        this.evaluator_nominated = evaluator_nominated
        this.evaluator_nominated_name = evaluator_nominated_name
        this.status = status
        this.applied_house = applied_house
        this.applied_house_assessment_tax_account = applied_house_assessment_tax_account
        this.total_lamp = total_lamp
        this.total_led = total_led
        this.vehicle_car = vehicle_car
        this.vehicle_motorcycle = vehicle_motorcycle
        this.vehicle_bicycle = vehicle_bicycle
        this.vehicle_other = vehicle_other
        this.electricity_bill_1_month = electricity_bill_1_month
        this.electricity_bill_1_usage = electricity_bill_1_usage
        this.electricity_bill_1_doc = electricity_bill_1_doc
        this.electricity_bill_2_month = electricity_bill_2_month
        this.electricity_bill_2_usage = electricity_bill_2_usage
        this.electricity_bill_2_doc = electricity_bill_2_doc
        this.electricity_bill_3_month = electricity_bill_3_month
        this.electricity_bill_3_usage = electricity_bill_3_usage
        this.electricity_bill_3_doc = electricity_bill_3_doc
        this.water_bill_1_month = water_bill_1_month
        this.water_bill_1_usage = water_bill_1_usage
        this.water_bill_1_doc = water_bill_1_doc
        this.water_bill_2_month = water_bill_2_month
        this.water_bill_2_usage = water_bill_2_usage
        this.water_bill_2_doc = water_bill_2_doc
        this.water_bill_3_month = water_bill_3_month
        this.water_bill_3_usage = water_bill_3_usage
        this.water_bill_3_doc = water_bill_3_doc
        this.created_at = created_at
        this.modified_at = modified_at
    }
}