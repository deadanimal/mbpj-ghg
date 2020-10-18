export class Assessment {
    public id: string
    public application: string
    public assessment_aspect: string
    public remarks: string
    public supporting_doc: string
    public created_at: string
    public modified_at: string
    
    constructor(
        id: string,
        application: string,
        assessment_aspect: string,
        remarks: string,
        supporting_doc: string,
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