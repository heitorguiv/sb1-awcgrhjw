import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react';
import type { DateRange } from 'react-day-picker';

interface RecentTransactionsProps {
  dateRange?: DateRange;
}

const transactions = [
  {
    id: '1',
    type: 'income',
    description: 'Client Payment',
    amount: 5000.00,
    date: '2024-03-15',
    category: 'Services',
  },
  {
    id: '2',
    type: 'expense',
    description: 'Office Rent',
    amount: 2000.00,
    date: '2024-03-10',
    category: 'Rent',
  },
  {
    id: '3',
    type: 'income',
    description: 'Product Sales',
    amount: 3500.00,
    date: '2024-03-08',
    category: 'Sales',
  },
  {
    id: '4',
    type: 'expense',
    description: 'Marketing Campaign',
    amount: 1500.00,
    date: '2024-03-05',
    category: 'Marketing',
  },
];

export function RecentTransactions({ dateRange }: RecentTransactionsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>
                  <span className="flex items-center">
                    {transaction.type === 'income' ? (
                      <ArrowUpCircle className="mr-2 h-4 w-4 text-green-500" />
                    ) : (
                      <ArrowDownCircle className="mr-2 h-4 w-4 text-red-500" />
                    )}
                    {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                  </span>
                </TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell>{transaction.category}</TableCell>
                <TableCell className="text-right font-medium">
                  ${transaction.amount.toFixed(2)}
                </TableCell>
                <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}