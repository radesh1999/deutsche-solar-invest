// src/recommendationsMockData.js
// src/types.ts (or within SalesTable.tsx)

export interface SalesRowData {
    location: string;
    sales: string;
    commission: string;
    paidCommission: string;
    openCommission: string;
}

export interface SalesTableProps {
    title: string;
    percentage: string;
    headers: string[];
    rows: SalesRowData[];
    total: SalesRowData;
}

export const summaryData = [
    { title: "Referral revenue", value: "1.504.000,00 €" },
    { title: "Commission", value: "19.560,00 €" },
    { title: "Paid Commission", value: "9.496,00 €" },
    { title: "Open Commission", value: "10.064,00 €" },
];

export const recommendatioinsData = {
    chartData: {
        labels: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
        // CORRECTED: Values are now in the hundreds of thousands to match the axis
        submitted: [500000, 250000, 0, 750000, 700000, 200000, 0, 1250000, 300000, 0, 500000, 300000],
        settled: [150000, 450000, 350000, 400000, 500000, 1100000, 400000, 0, 350000, 600000, 200000, 800000],
    },
    sales: {
        title: 'Sales',
        headers: ['WR', 'Investment', 'Part', 'Invoice', 'Commission', 'Payout'],
        items: [
            { id: 's1', person: 'Heinz Möller', location: 'Nordenham', wr: '3+5+6', investment: '234.535,45 €', part: 1, invoice: '58.141,80 €', commission: '2.907,09 €', payout: '20.07.2024' },
            { id: 's2', person: 'Max Muster', location: 'Nordenham', wr: '23', investment: '434.535,45 €', part: 2, invoice: '114.425,40 €', commission: '5.721,27 €', payout: '02.08.2024' },
            { id: 's3', person: 'Horst Schlämmer', location: 'Hanstedten', wr: '7', investment: '309.480,00 €', part: 2, invoice: '48.540,00 €', commission: '2.427,00 €', payout: '05.08.2024' },
        ],
        totals: { investment: '562.318,00 €', invoice: '221.107,20 €', commission: '11.056,36 €' },
    },
    openSales: {
        title: 'Open sales',
        headers: ['WR', 'Investment', 'Part', 'Invoice', 'Commission'],
        items: [
            { id: 'os1', person: 'Heinz Möller', location: 'Nordenham', wr: '3+5+6', investment: '290.709,00 €', part: 2, invoice: '174.425,40 €', commission: '8.721,27 €' },
            { id: 'os2', person: 'Max Muster', location: 'Nordenham', wr: '23', investment: '190.709,00 €', part: 3, invoice: '38.141,80 €', commission: '1.907,09 €' },
            { id: 'os3', person: 'Horst Schlämmer', location: 'Hanstedten', wr: '7', investment: '80.900,00 €', part: 3, invoice: '16.180,00 €', commission: '809,00 €' },
        ],
        totals: { investment: '562.318,00 €', invoice: '286.889,00 €', commission: '14.344,45 €' },
    },
    referralSales: {
        title: 'Referral sales',
        headers: ['%', 'Investment', 'Commission', 'Payout'],
        items: [
            { id: 'rs1', name: 'Ecoblue', percentage: '0,5', investment: '800.700,00 €', commission: '4.003,50 €', payout: '20.07.2024' },
            { id: 'rs2', name: 'Makler Heinz', percentage: '0,5', investment: '190.709,00 €', commission: '953,54 €', payout: '02.08.2024' },
            { id: 'rs3', name: 'Mehmet van Lee', percentage: '2,5', investment: '280.130,00 €', commission: '7.003,25 €', payout: '05.08.2024' },
        ],
        totals: { investment: '1.217.539,00 €', commission: '11.056,36 €' },
    },
    openReferralSales: {
        title: 'Open referral sales',
        headers: ['%', 'Investment', 'Commission', 'Payout'],
        items: [
            { id: 'ors1', name: 'Ecoblue', percentage: '0,5', investment: '800.700,00 €', commission: '4.003,50 €', payout: '20.07.2024' },
            { id: 'ors2', name: 'Makler Heinz', percentage: '0,5', investment: '190.709,00 €', commission: '953,54 €', payout: '02.08.2024' },
            { id: 'ors3', name: 'Mehmet van Lee', percentage: '2,5', investment: '280.130,00 €', commission: '7.003,25 €', payout: '05.08.2024' },
        ],
        totals: { investment: '1.217.539,00 €', commission: '11.056,36 €' },
    },
} as const;

export const salesTablesData = [
    {
        title: "Ecoblue AG",
        percentage: "0,5%",
        headers: ["Ecoblue AG 0,5%", "Sales", "Commission", "Paid Commission", "Open Commission"],
        rows: [
            { location: "Ludwigshafen", sales: "209.800,00 €", commission: "1.049,00 €", paidCommission: "209,80 €", openCommission: "839,20 €" },
            { location: "Weddelbrock", sales: "400.800,00 €", commission: "2.004,00 €", paidCommission: "1.603,20 €", openCommission: "400,80 €" },
            { location: "Holzminden", sales: "90.400,00 €", commission: "452,00 €", paidCommission: "452,00 €", openCommission: "0 €" },
            { location: "Weinhausen", sales: "201.000,00 €", commission: "1.005,00 €", paidCommission: "201,00 €", openCommission: "804,00 €" },
        ],
        total: { location: "Gesamt", sales: "902.000,00 €", commission: "4.510,00 €", paidCommission: "2.466,00 €", openCommission: "2.044,00 €" },
    },
    {
        title: "Makler Lanz",
        percentage: "2,5%",
        headers: ["Makler Lanz 2,5%", "Sales", "Commission", "Paid Commission", "Open Commission"],
        rows: [
            { location: "Ludwigshafen", sales: "401.000,00 €", commission: "10.025,00 €", paidCommission: "2.005,00 €", openCommission: "8.020,00 €" },
            { location: "Weddelbrock", sales: "201.000,00 €", commission: "5.025,00 €", paidCommission: "5.025,00 €", openCommission: "0 €" },
        ],
        total: { location: "Gesamt", sales: "602.000,00 €", commission: "15.050,00 €", paidCommission: "7.030,00 €", openCommission: "8.020,00 €" },
    }
];