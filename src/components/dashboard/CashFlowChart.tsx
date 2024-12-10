import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from '@/components/charts/BarChart';
import { chartConfig } from '@/lib/chart-utils';
import type { DateRange } from 'react-day-picker';

interface CashFlowChartProps {
  data: Array<{
    month: string;
    inflow: number;
    outflow: number;
  }>;
  dateRange?: DateRange;
}

export function CashFlowChart({ data, dateRange }: CashFlowChartProps) {
  const bars = [
    { key: 'inflow', name: 'Cash In', color: chartConfig.colors.primary },
    { key: 'outflow', name: 'Cash Out', color: chartConfig.colors.destructive }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cash Flow</CardTitle>
      </CardHeader>
      <CardContent>
        <BarChart
          data={data}
          xAxisKey="month"
          bars={bars}
          height={350}
        />
      </CardContent>
    </Card>
  );
}