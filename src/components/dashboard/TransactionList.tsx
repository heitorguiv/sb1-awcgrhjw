import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/utils';

interface Transaction {
  id: string;
  product: string;
  date: string;
  status: 'completed' | 'pending';
  reference: string;
}

const transactions: Transaction[] = [
  {
    id: '1',
    product: 'Premium T-Shirt',
    date: '2024-03-15',
    status: 'completed',
    reference: '0JWE.JS7SNC'
  },
  {
    id: '2',
    product: 'Playstation 5',
    date: '2024-03-15',
    status: 'pending',
    reference: '0JWE.JS7SNC'
  },
  {
    id: '3',
    product: 'Hoodie Gombrang',
    date: '2024-03-14',
    status: 'pending',
    reference: '0JWE.JS7SNC'
  },
  {
    id: '4',
    product: 'iPhone 15 Pro Max',
    date: '2024-03-14',
    status: 'completed',
    reference: '0JWE.JS7SNC'
  },
  {
    id: '5',
    product: 'Lotee',
    date: '2024-03-13',
    status: 'completed',
    reference: '0JWE.JS7SNC'
  }
];

export function TransactionList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Reference</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">{transaction.product}</TableCell>
                <TableCell>{formatDate(new Date(transaction.date))}</TableCell>
                <TableCell>
                  <Badge variant={transaction.status === 'completed' ? 'success' : 'warning'}>
                    {transaction.status}
                  </Badge>
                </TableCell>
                <TableCell className="font-mono text-sm">{transaction.reference}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}