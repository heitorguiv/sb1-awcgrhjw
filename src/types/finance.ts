export interface FinancialData {
  revenue: any[];
  expenses: any[];
  accounts: any[];
  categories: {
    revenue: any[];
    expenses: any[];
  };
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
  }[];
}