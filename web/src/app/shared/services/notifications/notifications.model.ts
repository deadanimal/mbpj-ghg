export class Notification {
    public id: string
    public title: string
    public message: string
    public recipient: string
    public created_at: string
    public modified_at: string

    constructor(
        id: string,
        title: string,
        message: string,
        recipient: string,
        created_at: string,
        modified_at: string
    ) {
        this.id = id
        this.title = title
        this.message = message
        this.recipient = recipient
        this.created_at = created_at
        this.modified_at = modified_at
    }
}