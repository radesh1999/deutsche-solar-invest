export interface Employee {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    consultingRoom: string;
}

export type StatusType = 'Reply' | 'Open';

export interface EmployeeRequest {
    date: string;
    category: string;
    message: string;
    status: StatusType;
    reply?: string;
}

export const mockEmployeeData = {
    managerName: 'Heinz Möller',
    employees: [
        {
            id: 'e1',
            firstName: 'Rüdiger',
            lastName: 'van Bommel',
            email: 'ruediger.vanbommel@ecoblue.de',
            phone: '01603459586',
            consultingRoom: 'partner.deutsche-solar.invest.de/bommel',
        },
        {
            id: 'e2',
            firstName: 'Malte',
            lastName: 'Blaumann',
            email: 'malte.blaumann@ecoblue.de',
            phone: '01603459566',
            consultingRoom: 'partner.deutsche-solar.invest.de/blaumann',
        },
        {
            id: 'e3',
            firstName: 'Sören',
            lastName: 'Paradis',
            email: 'soeren.paradis@ecoblue.de',
            phone: '01734567878',
            consultingRoom: 'partner.deutsche-solar.invest.de/paradis',
        },
        {
            id: 'e4',
            firstName: 'Sönke',
            lastName: 'Lutscher',
            email: 'soenke.lutscher@ecoblue.de',
            phone: '015245634563',
            consultingRoom: 'partner.deutsche-solar.invest.de/lutscher',
        },
    ],
    requests: [
        {
            date: '21.03.2024',
            category: 'Frage zu einer Anlage',
            message: 'Wann wird es den Netzanschluss geben? Wir sind schon 6 Monate drüber.',
            status: 'Reply',
            reply: 'Der Kunde wurde informiert, dass sich der Netzgang um einen Monat verschiebt',
        },
        {
            date: '23.03.2024',
            category: 'Vertriebspartner empfehlen',
            message: 'Bitte bei mir melden. Ich habe einen Freund, der gern Partner werden möchte',
            status: 'Reply',
            reply: 'Hallo Vertriebspartner, es wird sich spätestens am Montag unser Vertriebsleiter bei Ihnen melden.',
        },
        {
            date: '24.03.2024',
            category: 'Hilfe bei Kundenberatung',
            message: 'Bitte um Rückruf. Mein Kunde möchte gern die DSI kennenlernen.',
            status: 'Open',
        },
        {
            date: '20.03.2024',
            category: 'Sonstiges',
            message: 'Wie habt Ihr das nur hinbekommen. Ich bin euch wirklich dankbar, dass Ihr den Kunden doch noch überzeugen konntet, die Anlage zu kaufen.',
            status: 'Open',
        },
    ]
} satisfies {
    managerName: string;
    employees: Employee[];
    requests: EmployeeRequest[];
}; 