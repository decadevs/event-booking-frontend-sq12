
export const AllEvents = [
    {
        id: '1',
        img: "src/assets/userallevent/image2.png",
        EventTitle: "Eko All Night Pool Party Festival",
        Organizer: "ACMA People’s platform",
        TicketClass: "VVIP, VIP & Regular",
        Category: "Event & Lifestyle",
        Location: "2b, Herbert Macaulay Road, Yaba, Lagos",
        DateTime: {startDate:"20/02/2023", endDate:"22/02/2023", startTime:"4pm", endTime: "9pm"}
    },
    {
        id: '2',
        img: "src/assets/userallevent/image2.png",
        EventTitle: "Eko All Night Pool Party Festival",
        Organizer: "ACMA People’s platform",
        TicketClass: "VVIP, VIP & Regular",
        Category: "Event & Lifestyle",
        Location: "2b, Herbert Macaulay Road, Yaba, Lagos",
        DateTime: {startDate:"20/02/2023", endDate:"22/02/2023", startTime:"4pm", endTime: "9pm"}
    },
    {
        id: '3',
        img: "src/assets/userallevent/image2.png",
        EventTitle: "Eko All Night Pool Party Festival",
        Organizer: "ACMA People’s platform",
        TicketClass: "VVIP, VIP & Regular",
        Category: "Event & Lifestyle",
        Location: "2b, Herbert Macaulay Road, Yaba, Lagos",
        DateTime: {startDate:"20/01/2023", endDate:"22/01/2023", startTime:"4pm", endTime: "9pm"}
    },
    {
        id: '4',
        img: "src/assets/userallevent/image2.png",
        EventTitle: "Eko All Night Pool Party Festival",
        Organizer: "ACMA People’s platform",
        TicketClass: "VVIP, VIP & Regular",
        Category: "Event & Lifestyle",
        Location: "2b, Herbert Macaulay Road, Yaba, Lagos",
        DateTime: {startDate:"20/01/2023", endDate:"22/01/2023", startTime:"4pm", endTime: "9pm"}
    }
]

export interface Event {
    id: string,
    img: string,
    EventTitle: string,
    Organizer: string,
    TicketClass: string,
    Category: string,
    Location: string,
    DateTime: {startDate:string, endDate:string, startTime:string, endTime: string}
}

export const TicketsSummaryData = [
    {
        id: '1',
        Total: "N306,000",
        VVIP: {qty: "2", price: "300000"},
        VVIPTotal: "600000",
        VIP: {qty: "3", price: "300000"},
        VIPTotal: "900000",
        Regular: {qty: "1", price: "50000"},
        RegularTotal: "50000"
    },
    {
        id: '2',
        Total: "N306,000",
        VVIP: {qty: "3", price: "300000"},
        VVIPTotal: "900000",
        VIP: {qty: "3", price: "300000"},
        VIPTotal: "900000",
        Regular: {qty: "15", price: "50000"},
        RegularTotal: "750000"
    },
    {
        id: '3',
        Total: "N306,000",
        VVIP: {qty: "1", price: "300000"},
        VVIPTotal: "300000",
        VIP: {qty: "3", price: "300000"},
        VIPTotal: "900000",
        Regular: {qty: "10", price: "50000"},
        RegularTotal: "500000"
    }
]

export interface SummaryData {
    id: string,
    Total: string,
    VVIP: {qty: string, price: string},
    VVIPTotal: string,
    VIP: {qty: string, price: string},
    VIPTotal: string,
    Regular: {qty: string, price: string},
    RegularTotal: string,
}