import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, ArrowDownRight, DollarSign, TrendingUp } from 'lucide-react';
import type { DateRange } from 'react-day-picker';
import { cn, formatCurrency } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: number;
  change: number;
  icon: React.ReactNode;
}

function StatCard({ title, value, change, icon }: StatCardProps) {
  const isPositive = change > 0;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-8 w-8 rounded-lg bg-blue-50 dark:bg-blue-900 flex items-center justify-center">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{formatCurrency(value)}</div>
        <div className={cn(
          "flex items-center text-sm",
          isPositive ? "text-green-500" : "text-red-500"
        )}>
          {isPositive ? (
            <ArrowUpRight className="mr-1 h-4 w-4" />
          ) : (
            <ArrowDownRight className="mr-1 h-4 w-4" />
          )}
          <span>{Math.abs(change)}% from last month</span>
        </div>
      </CardContent>
    </Card>
  );
}

interface FinancialOverviewProps {
  data: {
    revenue: number;
    expenses: number;
    netIncome: number;
    growth: number;
  } | null;
  dateRange?: DateRange;
}

export function FinancialOverview({ data, dateRange }: FinancialOverviewProps) {
  if (!data) return null;

  const stats = [
    {
      title: 'Total Revenue',
      value: data.revenue,
      change: 20.1,
      icon: <DollarSign className="h-5 w-5 text-blue-600 dark:text-blue-400" />
    },
    {
      title: 'Total Expenses',
      value: data.expenses,
      change: -4.75,
      icon: <DollarSign className="h-5 w-5 text-red-600 dark:text-red-400" />
    },
    {
      title: 'Net Income',
      value: data.netIncome,
      change: 15.35,
      icon: <DollarSign className="h-5 w-5 text-green-600 dark:text-green-400" />
    },
    {
      title: 'Growth Rate',
      value: data.growth,
      change: 2.4,
      icon: <TrendingUp className="h-5 w-5 text-purple-600 dark:text-purple-400" />
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
}