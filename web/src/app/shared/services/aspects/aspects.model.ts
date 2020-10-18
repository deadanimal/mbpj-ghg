export class Aspect {
    public id: string
    public name: string
    public aspect_type: string
    public description_en: string
    public description_ms: string
    public incentive: number
    public created_at: string
    public modified_at: string

    constructor(
        id: string,
        name: string,
        aspect_type: string,
        description_en: string,
        description_ms: string,
        incentive: number,
        created_at: string,
        modified_at: string
    ) {
        this.id = id
        this.name = name
        this.aspect_type = aspect_type
        this.description_en = description_en
        this.description_ms = description_ms
        this.incentive = incentive
        this.created_at = created_at
        this.modified_at = modified_at
    }
}