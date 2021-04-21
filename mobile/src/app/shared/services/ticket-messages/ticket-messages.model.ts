export class TicketMessage {
    public ticket: number
    public id: number
    public message: string
    public sent: boolean
    public received: boolean
    public read: boolean
    public sent_datetime: string
    public received_datetime: string
    public read_datetime: string
    public sender: number
    public receiver: number

    constructor(
        ticket: number,
        id: number,
        message: string,
        sent: boolean,
        received: boolean,
        read: boolean,
        sent_datetime: string,
        received_datetime: string,
        read_datetime: string,
        sender: number,
        receiver: number
    ) {
        this.ticket = ticket
        this.id = id
        this.message = message
        this.sent = sent
        this.received = received
        this.read =read
        this.sent_datetime = sent_datetime
        this.received_datetime = received_datetime
        this.read_datetime = read_datetime
        this.sender = sender
        this.receiver = receiver
    }
}