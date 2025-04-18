export class ApplicationAssessment {
    public id: string
    public application: string
    public assessment_aspect: string
    public assessment_aspect_name: string
    public remarks: string
    public supporting_doc: string
    public total_lamp: number
    public total_led: number

    constructor(
        id: string,
        application: string,
        assessment_aspect: string,
        assessment_aspect_name: string,
        remarks: string,
        supporting_doc: string,
        total_lamp: number,
        total_led: number
    ){
        this.id = id
        this.application = application
        this.assessment_aspect = assessment_aspect
        this.assessment_aspect_name = assessment_aspect_name
        this.remarks = remarks
        this.supporting_doc = supporting_doc
        this.total_lamp = total_lamp
        this.total_led = total_led
    }
}