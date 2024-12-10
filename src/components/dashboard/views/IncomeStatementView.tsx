import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { DateRange } from 'react-day-picker';

interface IncomeStatementViewProps {
  dateRange?: DateRange;
}

const incomeStatementData = {
  revenue: [
    { category: 'Product Sales', amount: 150000 },
    { category: 'Service Revenue', amount: 75000 },
    { category: 'Other Income', amount: 15000 },
  ],
  expenses: [
    { category: 'Cost of Goods Sold', amount: 85000 },
    { category: 'Operating Expenses', amount: 45000 },
    { category: 'Marketing', amount: 25000 },
    { category: 'Administrative', amount: 35000 },
  ],
};

export function IncomeStatementView({ dateRange }: IncomeStatementViewProps) {
  const totalRevenue = incomeStatementData.revenue.reduce((sum, item) => sum + item.amount, 0);
  const totalExpenses = incomeStatementData.expenses.reduce((sum, item) => sum + item.amount, 0);
  const netIncome = totalRevenue - totalExpenses;

  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-blue-50 dark:bg-blue-950">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
          </CardContent>
        </Card>
        <Card className="bg-red-50 dark:bg-red-950">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalExpenses.toLocaleString()}</div>
          </CardContent>
        </Card>
        <Card className="bg-green-50 dark:bg-green-950">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Net Income</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${netIncome.toLocaleString()}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Income Statement</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50%]">Category</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell colSpan={2} className="font-bold bg-muted">Revenue</TableCell>
              </TableRow>
              {incomeStatementData.revenue.map((item) => (
                <TableRow key={item.category}>
                  <TableCell>{item.category}</TableCell>
                  <TableCell className="text-right">${item.amount.toLocaleString()}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell className="font-bold">Total Revenue</TableCell>
                <TableCell className="text-right font-bold">${totalRevenue.toLocaleString()}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2} className="font-bold bg-muted">Expenses</TableCell>
              </TableRow>
              {incomeStatementData.expenses.map((item) => (
                <TableRow key={item.category}>
                  <TableCell>{item.category}</TableCell>
                  <TableCell className="text-right">${item.amount.toLocaleString()}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell className="font-bold">Total Expenses</TableCell>
                <TableCell className="text-right font-bold">${totalExpenses.toLocaleString()}</TableCell>
              </TableRow>
              <TableRow className="bg-muted">
                <TableCell className="font-bold">Net Income</TableCell>
                <TableCell className="text-right font-bold">${netIncome.toLocaleString()}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}