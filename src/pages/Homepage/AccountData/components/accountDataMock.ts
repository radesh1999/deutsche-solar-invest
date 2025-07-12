// src/accountDataMock.ts

export const userData = {
    name: "Jochen Rudi",
    personalData: {
        title: "Mr.",
        firstName: "Heinz",
        lastName: "Möller",
        street: "Hauptstr. 32",
        zipCode: "90210",
        location: "Beverly Hills",
        mail: "heinz.moeller@web.de",
        phone: "0511-902101",
        mobil: "0177-3449988",
        birthDate: "13.07.1956",
    },
    financeData: {
        taxNumber: "4244/345/1234",
        taxOffice: "Beverly Hills",
        bank: "220.000 €",
        iban: "Steuerberater",
        registerNumber: "",
        vatNumber: "DE424235346436",
        consultingRoom: "partner.deutsche-solar-invest.de/rudi",
    },
    invoices: [
        {
            date: "22.03.2024",
            invoiceNumber: "134/2024",
            netCommission: "23.334,00 €",
            tax: "4.433,46 €",
            grossCommission: "27.767,46 €",
        },
        {
            date: "18.03.2024",
            invoiceNumber: "131/2024",
            netCommission: "2.344,00 €",
            tax: "445,36 €",
            grossCommission: "2.789,36 €",
        },
        {
            date: "24.11.2023",
            invoiceNumber: "1033/2023",
            netCommission: "12.890,00 €",
            tax: "2.449,10 €",
            grossCommission: "15.339,10 €",
        },
    ],
};