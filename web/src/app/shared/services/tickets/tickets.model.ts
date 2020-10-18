export class Ticket {
    public id: string
    public name: string
    public active: boolean
    public solved: boolean
    public sender: string
    public receiver: string
    public ticket_type: string
    
    constructor(
        id: string,
        name: string,
        active: boolean,
        solved: boolean,
        sender: string,
        receiver: string,
        ticket_type: string
    ) {
        this.id = id
        this.name = name
        this.active = active
        this.solved = solved
        this.sender = sender
        this.receiver = receiver
        this.ticket_type = ticket_type
    }
}

export class TicketMessage {
    public id: string
    public ticket: string
    public message: string
    public sent: boolean
    public received: boolean
    public read: boolean
    public sent_datetime: string
    public received_datetime: string
    public read_datetime: string
    public sender: string
    public receiver: string
    
    constructor(
        id: string,
        ticket: string,
        message: string,
        sent: boolean,
        received: boolean,
        read: boolean,
        sent_datetime: string,
        received_datetime: string,
        read_datetime: string,
        sender: string,
        receiver: string
    ) {
        this.id = id
        this.ticket = ticket
        this.message = message
        this.sent = sent
        this.received = received
        this.read = read
        this.sent_datetime = sent_datetime
        this.received_datetime = received_datetime
        this.read_datetime = read_datetime
        this.sender = sender
        this.receiver = receiver
    }
}