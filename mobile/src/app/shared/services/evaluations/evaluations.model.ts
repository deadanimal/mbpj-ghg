export class Evaluation {
    public id: number
    public application_assessment: number
    public equipment: number
    public system: number
    public efficiency: number
    public remarks: string
    public created_at: string
    public modified_at: string

    constructor(
        id: number,
        application_assessment: number,
        equipment: number,
        system: number,
        efficiency: number,
        remarks: string,
        created_at: string,
        modified_at: string
    ) {
        this.id = id
        this.application_assessment = application_assessment
        this.equipment = equipment
        this.system = system
        this.efficiency = efficiency
        this.remarks = remarks
        this.created_at = created_at
        this.modified_at = modified_at
    }
}