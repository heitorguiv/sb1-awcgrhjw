import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { DateRange } from 'react-day-picker';

interface CostAnalysisViewProps {
  dateRange?: DateRange;
}

const costData = [
  { name: 'Labor', value: 45000, color: 'hsl(var(--primary))' },
  { name: 'Materials', value: 30000, color: 'hsl(142.1 76.2% 36.3%)' },
  { name: 'Overhead', value: 25000, color: 'hsl(37.7 92.1% 50.2%)' },
  { name: 'Marketing', value: 15000, color: 'hsl(243.4 75.4% 58.6%)' },
  { name: 'Administrative', value: 20000, color: 'hsl(331.3 74.1% 57.7%)' },
];

export function CostAnalysisView({ dateRange }: CostAnalysisViewProps) {
  const totalCost = costData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Cost Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={costData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={{ stroke: 'hsl(var(--foreground))' }}
                  >
                    {costData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color}
                        stroke="hsl(var(--background))"
                        strokeWidth={2}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '0.5rem',
                      color: 'hsl(var(--foreground))'
                    }}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, 'Cost']}
                  />
                  <Legend 
                    formatter={(value) => (
                      <span style={{ color: 'hsl(var(--foreground))' }}>{value}</span>
                    )}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cost Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Category</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead className="text-right">% of Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {costData.map((item) => (
                  <TableRow key={item.name}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell className="text-right">
                      ${item.value.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      {((item.value / totalCost) * 100).toFixed(1)}%
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow className="font-bold">
                  <TableCell>Total</TableCell>
                  <TableCell className="text-right">
                    ${totalCost.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right">100%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}