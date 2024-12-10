import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Building2 } from 'lucide-react';

const accounts = [
  {
    id: '1',
    bank: 'Chase Bank',
    accountType: 'Checking',
    balance: 25000.00,
    lastUpdated: '2024-03-15',
  },
  {
    id: '2',
    bank: 'Bank of America',
    accountType: 'Savings',
    balance: 50000.00,
    lastUpdated: '2024-03-15',
  },
  // Add more accounts as needed
];

export function Accounts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building2 className="h-5 w-5" />
          Bank Accounts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Bank</TableHead>
                <TableHead>Account Type</TableHead>
                <TableHead className="text-right">Balance</TableHead>
                <TableHead>Last Updated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {accounts.map((account) => (
                <TableRow key={account.id}>
                  <TableCell className="font-medium">{account.bank}</TableCell>
                  <TableCell>{account.accountType}</TableCell>
                  <TableCell className="text-right">
                    ${account.balance.toFixed(2)}
                  </TableCell>
                  <TableCell>{new Date(account.lastUpdated).toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}