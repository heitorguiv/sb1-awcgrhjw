import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { DateRange } from 'react-day-picker';

const data = [
  { month: 'Jan', inflow: 15000, outflow: 12000 },
  { month: 'Feb', inflow: 18000, outflow: 14000 },
  { month: 'Mar', inflow: 16000, outflow: 13500 },
  { month: 'Apr', inflow: 19000, outflow: 15000 },
  { month: 'May', inflow: 17000, outflow: 14200 },
  { month: 'Jun', inflow: 20000, outflow: 16000 },
];

interface CashFlowViewProps {
  dateRange?: DateRange;
}

export function CashFlowView({ dateRange }: CashFlowViewProps) {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Inflow</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$105,000</div>
            <p className="text-xs text-muted-foreground">+20.1% from last period</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Outflow</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$84,700</div>
            <p className="text-xs text-muted-foreground">+12.5% from last period</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Net Cash Flow</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$20,300</div>
            <p className="text-xs text-muted-foreground">+15.3% from last period</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cash Flow Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  dataKey="month"
                  tick={{ fill: 'hsl(var(--foreground))' }}
                  axisLine={{ stroke: 'hsl(var(--border))' }}
                />
                <YAxis 
                  tick={{ fill: 'hsl(var(--foreground))' }}
                  axisLine={{ stroke: 'hsl(var(--border))' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '0.5rem',
                    color: 'hsl(var(--foreground))'
                  }}
                />
                <Bar dataKey="inflow" name="Cash In" fill="hsl(var(--primary))" />
                <Bar dataKey="outflow" name="Cash Out" fill="hsl(var(--destructive))" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}