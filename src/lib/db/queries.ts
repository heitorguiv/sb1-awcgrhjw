import { supabase } from '@/lib/supabase';
import type { DateRange } from 'react-day-picker';

// Mock data for development
const mockData = {
  overview: {
    revenue: 193000,
    expenses: 85000,
    netIncome: 108000,
    growth: 18.2
  },
  expenses: [
    { category: 'Rent', amount: 2500 },
    { category: 'Utilities', amount: 500 },
    { category: 'Insurance', amount: 300 },
    { category: 'Marketing', amount: 1200 },
    { category: 'Salaries', amount: 4500 },
    { category: 'Equipment', amount: 800 },
    { category: 'Software', amount: 600 },
    { category: 'Training', amount: 400 }
  ],
  cashFlow: [
    { month: 'Jan', inflow: 15000, outflow: 12000 },
    { month: 'Feb', inflow: 18000, outflow: 14000 },
    { month: 'Mar', inflow: 16000, outflow: 13500 },
    { month: 'Apr', inflow: 19000, outflow: 15000 },
    { month: 'May', inflow: 17000, outflow: 14200 },
    { month: 'Jun', inflow: 20000, outflow: 16000 }
  ]
};

export async function getFinancialOverview(dateRange?: DateRange) {
  // For now, return mock data
  return mockData.overview;
}

export async function getExpensesByCategory(dateRange?: DateRange) {
  // For now, return mock data
  return mockData.expenses;
}

export async function getCashFlow(dateRange?: DateRange) {
  // For now, return mock data
  return mockData.cashFlow;
}

export async function getRecentTransactions(limit = 10, dateRange?: DateRange) {
  const { from, to } = dateRange || {};
  
  let query = supabase
    .from('financial_events')
    .select(`
      id,
      type,
      description,
      amount,
      date
    `)
    .order('date', { ascending: false })
    .limit(limit);

  if (from && to) {
    query = query
      .gte('date', from.toISOString().split('T')[0])
      .lte('date', to.toISOString().split('T')[0]);
  }

  const { data, error } = await query;
  
  if (error) throw error;
  
  return data;
}