export interface ProjectContract {
  id: string;
  location: string;
  purchaseDate: string;
  dcCompletion: string;
  powerSupply: string;
  investment: string;
  equity: {
    amount: string;
    percentage: string;
  };
  loan: {
    amount: string;
    percentage: string;
  };
  invoices: {
    label: string;
    date: string;
  }[];
  persona: string;
  documents: {
    label: string;
    link: string;
  }[];
}

export interface InvestorContractsData {
  investorName: string;
  totalPortfolioValue: string;
  globalDocuments: {
    label: string;
    link: string;
  }[];
  projects: ProjectContract[];
}

export const mockData: InvestorContractsData = {
  investorName: 'Heinz Möller',
  totalPortfolioValue: '818.000 €',
  globalDocuments: [
    { label: 'DSGVO-Erklärung', link: '#' },
    { label: 'Datenschutzerklärung', link: '#' },
  ],
  projects: [
    {
      id: 'p1',
      location: 'Härtlingen',
      purchaseDate: '21.03.2023',
      dcCompletion: '11.12.2023',
      powerSupply: '27.08.2024',
      investment: '208.900,00 €',
      equity: { amount: '48.900,00 €', percentage: '23,41%' },
      loan: { amount: '160.000,00 €', percentage: '76,59%' },
      invoices: [
        { label: 'Invoice 1', date: '24.03.2023' },
        { label: 'Invoice 2', date: '30.11.2023' },
        { label: 'Invoice 3', date: '26.12.2023' },
        { label: 'Invoice 4', date: '10.02.2024' },
      ],
      persona: 'Heinz Möller',
      documents: [
        { label: 'Kaufvertrag', link: '#' },
        { label: 'Servicevertrag', link: '#' },
        { label: 'Flächennutzungsvertrag', link: '#' },
        { label: 'Vollmacht', link: '#' },
      ],
    },
    {
      id: 'p2',
      location: 'Wunstorf',
      purchaseDate: '21.03.2023',
      dcCompletion: '11.12.2023',
      powerSupply: '27.08.2024',
      investment: '208.900,00 €',
      equity: { amount: '48.900,00 €', percentage: '23,41%' },
      loan: { amount: '160.000,00 €', percentage: '76,59%' },
      invoices: [
        { label: 'Invoice 1', date: '24.03.2023' },
        { label: 'Invoice 2', date: '30.11.2023' },
        { label: 'Invoice 3', date: '26.12.2023' },
        { label: 'Invoice 4', date: '10.02.2024' },
      ],
      persona: 'Frauke Möller',
      documents: [
        { label: 'Kaufvertrag', link: '#' },
        { label: 'Servicevertrag', link: '#' },
        { label: 'Flächennutzungsvertrag', link: '#' },
        { label: 'Vollmacht', link: '#' },
      ],
    },
  ],
};