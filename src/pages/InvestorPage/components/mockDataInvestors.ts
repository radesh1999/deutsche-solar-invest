export interface Persona {
    id: string;
    firstName: string;
    lastNameOrLegalForm: string;
    street: string;
    zip: string;
    location: string;
}

export interface Investor {
    key: string;
    name: string;
    mail: string;
    phone: string;
    unitsInPortfolio: number;
    lastPurchase: string | null;
    // NEW DETAILED FIELDS
    personalData: {
        title: 'Mr.' | 'Mrs.' | 'Divers';
        firstName: string;
        lastName: string;
        street: string;
        zip: string;
        location: string;
        mail: string;
        phone: string;
        mobil: string;
        birthDate: string;
        differentPostalAddress: boolean;
    };
    financialData: {
        taxNumber: string;
        taxOffice: string;
        income: number;
        job: string;
        taxTable: 'Splitting' | 'Single' | 'Other';
        churchTax: boolean;
        federalState: string;
        notes: string;
    };
    personas: Persona[];
}

// Updated data for the first few records. The rest of the 50 can use this as a template.
export const investorsData: Investor[] = [
    {
        key: '1',
        name: 'Heinz Möller',
        mail: 'heinz.moeller@web.de',
        phone: '0177-3449988',
        unitsInPortfolio: 300900.00,
        lastPurchase: '21.12.2023',
        personalData: {
            title: 'Mr.',
            firstName: 'Heinz',
            lastName: 'Möller',
            street: 'Hauptstr. 32',
            zip: '90210',
            location: 'Beverly Hills',
            mail: 'heinz.moeller@web.de',
            phone: '0511-902101',
            mobil: '0177-3449988',
            birthDate: '13.07.1956',
            differentPostalAddress: false,
        },
        financialData: {
            taxNumber: '4244/345/1234',
            taxOffice: 'Beverly Hills',
            income: 220000,
            job: 'Steuerberater',
            taxTable: 'Splitting',
            churchTax: false,
            federalState: 'California', // Placeholder
            notes: 'makes one IAB each with his wife.\n+an IAB together.',
        },
        personas: [
            { id: 'p1', firstName: 'Heinz', lastNameOrLegalForm: 'Möller', street: 'Hauptstr. 32', zip: '90210', location: 'Beverly Hills' },
            { id: 'p2', firstName: 'Frauke', lastNameOrLegalForm: 'Möller', street: 'Hauptstr. 32', zip: '90210', location: 'Beverly Hills' },
            { id: 'p3', firstName: 'SunFlow Möller', lastNameOrLegalForm: 'GbR', street: 'Hauptstr. 32', zip: '90210', location: 'Beverly Hills' },
        ],
    },
    // Add more detailed records here, using the first as a template.
    // For brevity, the other 49 records will need to be updated similarly.
    // ... (the other 49 records from the previous step)
];