import { User } from "../users/users.model"

export class Ticket {
    public id: number
    public name: string
    public active: boolean
    public solved: boolean
    public sender: string
    public receiver: string
    public ticket_type: string
    
    constructor(
        id: number,
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

export class TicketTemp {
    public id: number
    public name: string
    public active: boolean
    public solved: boolean
    public sender: User
    public receiver: User
    public ticket_type: string
    
    constructor(
        id: number,
        name: string,
        active: boolean,
        solved: boolean,
        sender: User,
        receiver: User,
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
    public id: number
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
        id: number,
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

export class TicketMessageTemp {
    public id: number
    public ticket: TicketTemp
    public message: string
    public sent: boolean
    public received: boolean
    public read: boolean
    public sent_datetime: string
    public received_datetime: string
    public read_datetime: string
    public sender: User
    public receiver: User
    
    constructor(
        id: number,
        ticket: TicketTemp,
        message: string,
        sent: boolean,
        received: boolean,
        read: boolean,
        sent_datetime: string,
        received_datetime: string,
        read_datetime: string,
        sender: User,
        receiver: User
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