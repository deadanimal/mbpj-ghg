export class Rebate {
    public id: number
    public application: number
    public approved_by: number
    public amount_approved: number
    public created_at: string
    public modified_at: string

    constructor(
        id: number,
        application: number,
        approved_by: number,
        amount_approved: number,
        created_at: string,
        modified_at: string
    ) {
        this.id = id
        this.application = application
        this.approved_by = approved_by
        this.amount_approved = amount_approved
        this.created_at = created_at
        this.modified_at = modified_at
    }
}