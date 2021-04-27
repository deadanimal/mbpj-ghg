export class House {
    public id: string
    public applicant: string
    public address: string
    public postcode: string
    public area: string

    public assessment_tax_account: string
    public assessment_tax_doc
    public building_type: string
    public staying_duration_years: number
    public staying_duration_months: number
    public permanent_occupant: number
    public vehicle_car: number
    public vehicle_motorcycle: number
    public vehicle_bicycle: number
    public vehicle_other: number

    public electricity_bill_1_month
    public electricity_bill_1_usage
    public electricity_bill_1_doc
    public electricity_bill_2_month
    public electricity_bill_2_usage
    public electricity_bill_2_doc
    public electricity_bill_3_month
    public electricity_bill_3_usage
    public electricity_bill_3_doc

    public water_bill_1_month
    public water_bill_1_usage
    public water_bill_1_doc
    public water_bill_2_month
    public water_bill_2_usage
    public water_bill_2_doc
    public water_bill_3_month
    public water_bill_3_usage
    public water_bill_3_doc

    constructor(
        id: string,
        applicant: string,
        address: string,
        assessment_tax_account: string,
        building_type: string,
        staying_duration_years: number,
        staying_duration_months: number,
        permanent_occupant: number,
        vehicle_car: number,
        vehicle_motorcycle: number,
        vehicle_bicycle: number,
        vehicle_other: number
    ){
        this.id = id
        this.applicant = applicant
        this.address = address
        this.assessment_tax_account = assessment_tax_account
        this.building_type = building_type
        this.staying_duration_years = staying_duration_years
        this.staying_duration_months = staying_duration_months
        this.permanent_occupant = permanent_occupant
        this.vehicle_car = vehicle_car
        this.vehicle_motorcycle = vehicle_motorcycle
        this.vehicle_bicycle = vehicle_bicycle
        this.vehicle_other = vehicle_other
    }
}

export class MergedHouse {
    public id: string
    public applicant_id: string
    public applicant_name: string
    public address: string
    public postcode: string
    public area: string
    public assessment_tax_account: string
    public assessment_tax_doc: string
    public building_type: string
    public building_type_full: string
    public staying_duration_years: number
    public staying_duration_months: number
    public permanent_occupant: number
    public vehicle_car: number
    public vehicle_motorcycle: number
    public vehicle_bicycle: number
    public vehicle_other: number

    constructor(
        id: string,
        applicant_id: string,
        applicant_name: string,
        address: string,
        assessment_tax_account: string,
        building_type: string,
        building_type_full: string,
        staying_duration_years: number,
        staying_duration_months: number,
        permanent_occupant: number,
        vehicle_car: number,
        vehicle_motorcycle: number,
        vehicle_bicycle: number,
        vehicle_other: number
    ){
        this.id = id
        this.applicant_id = applicant_id
        this.applicant_name = applicant_name
        this.address = address
        this.assessment_tax_account = assessment_tax_account
        this.building_type = building_type
        this.building_type_full = building_type_full
        this.staying_duration_years = staying_duration_years
        this.staying_duration_months = staying_duration_months
        this.permanent_occupant = permanent_occupant
        this.vehicle_car = vehicle_car
        this.vehicle_motorcycle = vehicle_motorcycle
        this.vehicle_bicycle = vehicle_bicycle
        this.vehicle_other = vehicle_other
    }
}