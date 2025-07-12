export interface FileItem {
    id: number;
    name: string;
    modificationDate: string;
    size: string;
}

export const files: FileItem[] = [
    {
        id: 1,
        name: 'Creditreform 2024',
        modificationDate: 'Tuesday, 03.03.2025, 06:23',
        size: '2,34 MB',
    },
    {
        id: 2,
        name: 'Company presentation',
        modificationDate: 'Thursday, 05.05.2025, 14:33',
        size: '200,345 KB',
    },
    {
        id: 3,
        name: 'References',
        modificationDate: 'Monday, 06.06.2025, 17:02',
        size: '2,345 MB',
    },
];

export const userData = {
    name: "Jochen Rudi",
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