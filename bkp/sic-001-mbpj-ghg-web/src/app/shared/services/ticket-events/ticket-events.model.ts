export class TicketEvent {
    public id: string
    public action: string
    public action_by: string
    public date_time: string

    constructor(
        id: string,
        action: string,
        action_by: string,
        date_time: string
    ){
        this.id = id
        this.action = action
        this.action_by = action_by
        this.date_time = date_time
    }
}