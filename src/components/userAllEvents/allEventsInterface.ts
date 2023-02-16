interface DateTime{
    startDate:string, endDate:string, startTime:string, endTime: string
}

export interface AllEvents{
    id: string,
    img: string,
    EventTitle: string,
    Organizer: string,
    TicketClass: string,
    Category: string,
    Location: string,
    DateTime: DateTime
}