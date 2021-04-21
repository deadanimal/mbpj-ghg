export class Assessment {
    public id: number
    public application: number
    public assessment_aspect: number
    public remarks: string
    public supporting_doc: number
    public created_at: string
    public modified_at: string
    
    constructor(
        id: number,
        application: number,
        assessment_aspect: number,
        remarks: string,
        supporting_doc: number,
        created_at: string,
        modified_at: string
    ) {
        this.id = id
        this.application = application
        this.assessment_aspect = assessment_aspect
        this.remarks = remarks
        this.supporting_doc = supporting_doc
        this.created_at = created_at
        this.modified_at = modified_at
    }
}