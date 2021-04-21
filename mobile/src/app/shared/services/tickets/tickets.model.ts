export class Ticket {
    public id: number
    public name: string
    public active: boolean
    public solved: boolean
    public ticket_type: string
    public sender: number
    public receiver: number

    constructor(
        id: number,
        name: string,
        active: boolean,
        solved: boolean,
        ticket_type: string,
        sender: number,
        receiver: number
    ) {
        this.id = id
        this.name = name
        this.active = active
        this.solved = solved
        this.ticket_type = ticket_type
        this.sender = sender
        this.receiver = receiver
    }
}