import { useState, useEffect } from 'react';
import { getFinancialOverview, getExpensesByCategory, getCashFlow } from '@/lib/db/queries';
import type { DateRange } from 'react-day-picker';

export function useFinancialData(dateRange?: DateRange) {
  const [data, setData] = useState({
    overview: null,
    expenses: null,
    cashFlow: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const [overview, expenses, cashFlow] = await Promise.all([
          getFinancialOverview(dateRange),
          getExpensesByCategory(dateRange),
          getCashFlow(dateRange),
        ]);

        setData({
          overview,
          expenses,
          cashFlow,
          isLoading: false,
          error: null,
        });
      } catch (error) {
        setData(prev => ({
          ...prev,
          isLoading: false,
          error: error instanceof Error ? error.message : 'An error occurred while fetching data',
        }));
      }
    }

    fetchData();
  }, [dateRange]);

  return data;
}