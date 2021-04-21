export class Media {
    public id: number
    public document: string
    public created_at: string
    public modified_at: string

    constructor(
        id: number,
        document: string,
        created_at: string,
        modified_at: string
    ) {
        this.id = id
        this.document = document
        this.created_at = created_at
        this.modified_at = modified_at
    }
}