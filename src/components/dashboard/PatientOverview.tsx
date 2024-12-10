import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, ArrowDownRight, Users, UserPlus, AlertTriangle, Calendar } from 'lucide-react';
import type { DateRange } from 'react-day-picker';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
}

function StatCard({ title, value, change, icon }: StatCardProps) {
  const isPositive = change > 0;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-8 w-8 rounded-lg bg-blue-50 flex items-center justify-center">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className={cn(
          "flex items-center text-sm",
          isPositive ? "text-green-500" : "text-red-500"
        )}>
          {isPositive ? (
            <ArrowUpRight className="mr-1 h-4 w-4" />
          ) : (
            <ArrowDownRight className="mr-1 h-4 w-4" />
          )}
          <span>{Math.abs(change)}% since last week</span>
        </div>
      </CardContent>
    </Card>
  );
}

interface PatientOverviewProps {
  dateRange?: DateRange;
}

export function PatientOverview({ dateRange }: PatientOverviewProps) {
  const stats = [
    {
      title: 'Total Patients',
      value: '6,025',
      change: 68.95,
      icon: <Users className="h-5 w-5 text-blue-600" />
    },
    {
      title: 'New This Week',
      value: '4,152',
      change: 4.17,
      icon: <UserPlus className="h-5 w-5 text-green-600" />
    },
    {
      title: 'Critical Alerts',
      value: '5,948',
      change: -92.05,
      icon: <AlertTriangle className="h-5 w-5 text-red-600" />
    },
    {
      title: 'Appointments',
      value: '5,626',
      change: 27.47,
      icon: <Calendar className="h-5 w-5 text-purple-600" />
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
}