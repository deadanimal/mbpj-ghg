export class Schedule {
    public id: string
    public application: string
    public date: string
    public session: string
    public created_at: string
    public modified_at: string

    constructor(
        id: string,
        application: string,
        date: string,
        session: string,
        created_at: string,
        modified_at: string
    ) {
        this.id = id
        this.application = application
        this.date = date
        this.session = session
        this.created_at = created_at
        this.modified_at = modified_at
    }
}