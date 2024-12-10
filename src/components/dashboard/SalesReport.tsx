import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import type { DateRange } from 'react-day-picker';

interface SalesReportProps {
  dateRange?: DateRange;
}

export function SalesReport({ dateRange }: SalesReportProps) {
  const salesData = {
    launched: 233,
    ongoing: 123,
    sold: 482,
  };

  const maxValue = Math.max(salesData.launched, salesData.ongoing, salesData.sold);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales Report</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Product Launched ({salesData.launched})</span>
            <span className="text-sm text-muted-foreground">{((salesData.launched / maxValue) * 100).toFixed(1)}%</span>
          </div>
          <Progress value={(salesData.launched / maxValue) * 100} className="h-2" />
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Ongoing Product ({salesData.ongoing})</span>
            <span className="text-sm text-muted-foreground">{((salesData.ongoing / maxValue) * 100).toFixed(1)}%</span>
          </div>
          <Progress value={(salesData.ongoing / maxValue) * 100} className="h-2" />
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Product Sold ({salesData.sold})</span>
            <span className="text-sm text-muted-foreground">{((salesData.sold / maxValue) * 100).toFixed(1)}%</span>
          </div>
          <Progress value={(salesData.sold / maxValue) * 100} className="h-2" />
        </div>
      </CardContent>
    </Card>
  );
}