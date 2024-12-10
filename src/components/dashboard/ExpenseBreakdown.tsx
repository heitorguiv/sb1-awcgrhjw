import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DonutChart } from '@/components/charts/DonutChart';
import { chartConfig } from '@/lib/chart-utils';
import type { DateRange } from 'react-day-picker';

interface ExpenseBreakdownProps {
  data: Array<{
    category: string;
    amount: number;
  }>;
  dateRange?: DateRange;
}

export function ExpenseBreakdown({ data, dateRange }: ExpenseBreakdownProps) {
  const chartData = data.map((item, index) => ({
    name: item.category,
    value: item.amount,
    color: Object.values(chartConfig.colors)[index % Object.values(chartConfig.colors).length]
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Expense Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <DonutChart data={chartData} height={350} />
      </CardContent>
    </Card>
  );
}