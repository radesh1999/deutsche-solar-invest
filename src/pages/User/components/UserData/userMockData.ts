export interface UserRequest {
    date: string;
    category: string;
    message: string;
    status: 'Reply' | 'Open';
    reply?: string;
}

export interface UserData {
    name: string;
    personal: {
        title: 'Mr.' | 'Mrs.' | 'Ms.';
        firstName: string;
        lastName: string;
        street: string;
        zipCode: string;
        location: string;
        mail: string;
        phone: string;
        mobil: string;
        birthDate: string;
    };
    finance: {
        taxNumber: string;
        taxOffice: string;
        vatNumber: string;
        iban: string;
        bank: string;
        subjectToVAT: boolean;
        receiveNewsletter: boolean;
        receiveProjectUpdates: boolean;
        consultingRoom: string;
        commissionAmount: string;
    };
    requests: UserRequest[];
}

export const mockUserData: UserData = {
    name: 'Heinz Möller',
    personal: {
        title: 'Mr.',
        firstName: 'Heinz',
        lastName: 'Möller',
        street: 'Hauptstr. 32',
        zipCode: '90210',
        location: 'Beverly Hills',
        mail: 'heinz.moeller@web.de',
        phone: '0511-902101',
        mobil: '0177-3449988',
        birthDate: '13.07.1956',
    },
    finance: {
        taxNumber: '4244/345/1234',
        taxOffice: 'Beverly Hills',
        vatNumber: 'DE352525235',
        iban: 'DE94 2412 2444 2412 09',
        bank: 'Deutsche Bank Berlin',
        subjectToVAT: false,
        receiveNewsletter: true,
        receiveProjectUpdates: false,
        consultingRoom: 'partner.deutsche-solar.invest.de/bommel',
        commissionAmount: '5%',
    },
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
    ],
};