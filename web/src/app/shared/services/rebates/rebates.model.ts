export class Rebate {
    public id: string
    public application: string
    public amount_approved: number
    public created_at: string
    public modified_at: string

    constructor(
        id: string,
        application: string,
        amount_approved: number,
        created_at: string,
        modified_at: string
    ) {
        this.id = id
        this.application = application
        this.amount_approved = amount_approved
        this.created_at = created_at
        this.modified_at = modified_at
    }
}

export class RebateTemp {
    public id: string
    public application: string
    public applicant: string
    public amount_approved: number
    public created_at: string
    public modified_at: string

    constructor(
        id: string,
        application: string,
        applicant: string,
        amount_approved: number,
        created_at: string,
        modified_at: string
    ) {
        this.id = id
        this.application = application
        this.applicant = applicant
        this.amount_approved = amount_approved
        this.created_at = created_at
        this.modified_at = modified_at
    }
}