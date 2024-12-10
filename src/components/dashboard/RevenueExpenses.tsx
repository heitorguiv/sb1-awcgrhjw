import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react';

const transactions = [
  {
    id: '1',
    type: 'revenue',
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
  // Add more transactions as needed
];

export function RevenueExpenses() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px]">
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
                      {transaction.type === 'revenue' ? (
                        <ArrowUpCircle className="mr-2 h-4 w-4 text-green-500" />
                      ) : (
                        <ArrowDownCircle className="mr-2 h-4 w-4 text-red-500" />
                      )}
                      {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                    </span>
                  </TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell>{transaction.category}</TableCell>
                  <TableCell className="text-right">
                    ${transaction.amount.toFixed(2)}
                  </TableCell>
                  <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}