import { format } from 'date-fns';

export function transformFinancialData(data: any[]) {
  return data.reduce((acc, event) => {
    const month = format(new Date(event.date), 'MMM');
    if (!acc[month]) {
      acc[month] = { revenue: 0, expenses: 0 };
    }
    
    if (event.type === 'REVENUE') {
      acc[month].revenue += event.amount;
    } else {
      acc[month].expenses += event.amount;
    }
    
    return acc;
  }, {});
}

export function transformExpenseCategories(data: any[]) {
  return data.reduce((acc, expense) => {
    const category = expense.categories?.name || 'Uncategorized';
    if (!acc[category]) {
      acc[category] = 0;
    }
    acc[category] += expense.amount;
    return acc;
  }, {});
}

export function transformCashFlow(data: any[]) {
  return data.reduce((acc, event) => {
    const month = format(new Date(event.date), 'MMM');
    if (!acc[month]) {
      acc[month] = { inflow: 0, outflow: 0 };
    }
    
    if (event.type === 'REVENUE') {
      acc[month].inflow += event.amount;
    } else {
      acc[month].outflow += event.amount;
    }
    
    return acc;
  }, {});
}