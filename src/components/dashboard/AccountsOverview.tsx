import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChartComponent } from '@/components/charts/BarChartComponent';
import { chartConfig } from '@/lib/chart-utils';
import type { DateRange } from 'react-day-picker';

const data = [
  { month: 'Jan', revenue: 4000, expenses: 2400 },
  { month: 'Feb', revenue: 3000, expenses: 1398 },
  { month: 'Mar', revenue: 2000, expenses: 9800 },
  { month: 'Apr', revenue: 2780, expenses: 3908 },
  { month: 'May', revenue: 1890, expenses: 4800 },
  { month: 'Jun', revenue: 2390, expenses: 3800 },
];

interface AccountsOverviewProps {
  className?: string;
  dateRange?: DateRange;
}

export function AccountsOverview({ className, dateRange }: AccountsOverviewProps) {
  const bars = [
    { key: 'revenue', name: 'Revenue', color: chartConfig.colors.primary },
    { key: 'expenses', name: 'Expenses', color: chartConfig.colors.destructive },
  ];

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Financial Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <BarChartComponent 
          data={data}
          xAxisKey="month"
          bars={bars}
          height={300}
        />
      </CardContent>
    </Card>
  );
}