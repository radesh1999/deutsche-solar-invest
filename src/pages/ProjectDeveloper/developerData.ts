// src/data/developer-data.ts

export interface Developer {
    id: number;
    name: string;
    color?: string; // Optional color property
}

export interface Employee {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    hasNews: boolean;
    hasUpdates: boolean;
}

export const developers: Developer[] = [
    { id: 1, name: 'Energy Panels', color: '#007BFF' },
    { id: 2, name: 'GSP' },
    { id: 3, name: 'FinC' },
    { id: 4, name: 'Mediplan e.K.' },
    { id: 5, name: 'IEU GmbH' },
];

export const employees: Employee[] = [
    {
        id: 1,
        firstName: 'Rüdiger',
        lastName: 'van Bommel',
        email: 'ruediger.vanbommel@ecoblue.de',
        hasNews: true,
        hasUpdates: true,
    },
    {
        id: 2,
        firstName: 'Malte',
        lastName: 'Blaumann',
        email: 'malte.blaumann@ecoblue.de',
        hasNews: true,
        hasUpdates: true,
    },
    {
        id: 3,
        firstName: 'Sören',
        lastName: 'Paradis',
        email: 'soeren.paradis@ecoblue.de',
        hasNews: true,
        hasUpdates: true,
    },
    {
        id: 4,
        firstName: 'Sönke',
        lastName: 'Lutscher',
        email: 'soenke.lutscher@ecoblue.de',
        hasNews: false,
        hasUpdates: false,
    },
];

export const mockDashboardData = {
    kpis: {
        sales: {
            title: 'Total sales',
            total: '2.348.849,00 €',
            commission: '117.442,45 €',
            commissionPaid: '30.456,22 €',
            openCommission: '86.986,23 €',
        },
        referral: {
            title: 'Referral revenue',
            total: '5.451.200,00 €',
            commission: '27.256,00 €',
            commissionPaid: '3.456,22 €',
            openCommission: '23.799,78 €',
        },
    },
    openSearchRequests: [
        { id: 1, name: 'Heinz Möller', range: '300.000 € - 400.000 €' },
        { id: 2, name: 'Max Muster', range: '100.000 € - 200.000 €' },
        { id: 3, name: 'Max Muster', range: '400.000 € - 500.000 €' },
    ],
    toDoList: [
        { title: 'Janosch Peréz', text: 'Kaufverträge fehlen' },
        { title: 'Mehmet Lee', text: ' Rechnung Weinhausen seit 14 Tagen überfällig' },
        { title: 'Wayne Interessierts', text: ' Rechnung Härtlingen überfällig', }
    ],
    reservations: {
        items: [
            {
                personName: 'Heinz Möller',
                projects: [
                    { id: 'r1', location: 'Nordenham', wr: '3+5+6', investment: '234.535,45 €', reservedUntil: '24.03.2025' },
                    { id: 'r2', location: 'Nordenham', wr: '3+5+6', investment: '234.535,45 €', reservedUntil: '24.03.2025' },
                    { id: 'r3', location: 'Nordenham', wr: '3+5+6', investment: '234.535,45 €', reservedUntil: '24.03.2025' },
                ],
            },
            {
                personName: 'Weinhausen',
                projects: [
                    { id: 'r2', location: 'Weinhausen', wr: '2', investment: '34.550,55 €', reservedUntil: '21.03.2025' },
                ],
            },
            {
                personName: 'Max Muster',
                projects: [
                    { id: 'r3', location: 'Nordenham', wr: '23', investment: '434.535,45 €', reservedUntil: '21.03.2025' },
                ],
            },
            {
                personName: 'Horst Schlämmer',
                projects: [
                    { id: 'r4', location: 'Hanstedten', wr: '7', investment: '309.480,00 €', reservedUntil: '22.03.2025' },
                ],
            },
        ],
        total: {
            investment: '1.013.101,45 €',
            commissionIncome: '50.655,07 €',
        },
    },
    myRequests: [
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
    ],
} as const; // Using 'as const' is crucial for TypeScript to infer literal types correctly.