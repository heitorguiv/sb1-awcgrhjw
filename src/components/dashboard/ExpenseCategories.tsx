import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChartComponent } from '@/components/charts/PieChartComponent';
import { chartConfig } from '@/lib/chart-utils';
import type { DateRange } from 'react-day-picker';

const data = [
  { name: 'Rent', value: 2500, color: chartConfig.colors.destructive },
  { name: 'Utilities', value: 500, color: chartConfig.colors.warning },
  { name: 'Insurance', value: 300, color: chartConfig.colors.info },
  { name: 'Marketing', value: 1200, color: chartConfig.colors.violet },
  { name: 'Salaries', value: 4500, color: chartConfig.colors.orange },
  { name: 'Equipment', value: 800, color: chartConfig.colors.mint },
  { name: 'Software', value: 600, color: chartConfig.colors.indigo },
  { name: 'Training', value: 400, color: chartConfig.colors.secondary },
];

interface ExpenseCategoriesProps {
  className?: string;
  dateRange?: DateRange;
}

export function ExpenseCategories({ className, dateRange }: ExpenseCategoriesProps) {
  const totalExpenses = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Expense Categories</span>
          <span className="text-sm font-normal text-destructive">
            Total: ${totalExpenses.toLocaleString()}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <PieChartComponent 
          data={data} 
          height={350}
          legendPosition="right"
          customLabel={(entry) => `${entry.name} (${((entry.value / totalExpenses) * 100).toFixed(1)}%)`}
        />
      </CardContent>
    </Card>
  );
}