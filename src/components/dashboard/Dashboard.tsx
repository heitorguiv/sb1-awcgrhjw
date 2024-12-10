import { useState } from 'react';
import { DashboardHeader } from './DashboardHeader';
import { Sidebar } from '@/components/layout/Sidebar';
import { DateRangeFilter } from './DateRangeFilter';
import { FinancialOverview } from './FinancialOverview';
import { RecentTransactions } from './RecentTransactions';
import { AccountsOverview } from './AccountsOverview';
import { ExpenseCategories } from './ExpenseCategories';
import { CashFlowView } from './views/CashFlowView';
import { IncomeStatementView } from './views/IncomeStatementView';
import { CostAnalysisView } from './views/CostAnalysisView';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { useFinancialData } from '@/hooks/useFinancialData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { DateRange } from 'react-day-picker';

export function Dashboard() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2024, 0, 1),
    to: new Date(),
  });

  const { overview, expenses, cashFlow, isLoading, error } = useFinancialData(dateRange);

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-4">
          <p className="text-destructive">Error loading data: {error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="text-primary hover:underline"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#F8FAFC] dark:bg-slate-950">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight">Financial Dashboard</h2>
                <p className="text-sm text-muted-foreground">
                  Track and analyze your financial performance
                </p>
              </div>
              <DateRangeFilter onDateRangeChange={setDateRange} />
            </div>
            
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <Tabs defaultValue="overview" className="space-y-6">
                <TabsList className="bg-white dark:bg-slate-900 p-1 rounded-lg">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="cash-flow">Cash Flow</TabsTrigger>
                  <TabsTrigger value="income">Income Statement</TabsTrigger>
                  <TabsTrigger value="costs">Cost Analysis</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <FinancialOverview data={overview} dateRange={dateRange} />
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                    <AccountsOverview 
                      className="col-span-4" 
                      data={cashFlow} 
                      dateRange={dateRange} 
                    />
                    <ExpenseCategories 
                      className="col-span-3" 
                      data={expenses} 
                      dateRange={dateRange} 
                    />
                  </div>
                  <RecentTransactions dateRange={dateRange} />
                </TabsContent>

                <TabsContent value="cash-flow">
                  <CashFlowView data={cashFlow} dateRange={dateRange} />
                </TabsContent>

                <TabsContent value="income">
                  <IncomeStatementView data={overview} dateRange={dateRange} />
                </TabsContent>

                <TabsContent value="costs">
                  <CostAnalysisView data={expenses} dateRange={dateRange} />
                </TabsContent>
              </Tabs>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}