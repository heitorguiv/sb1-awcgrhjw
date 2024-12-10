import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  Wallet,
  ArrowUpCircle,
  ArrowDownCircle,
  PieChart,
  BarChart2,
  FileText,
  Settings,
  LogOut,
  Menu,
  ChevronRight,
  DollarSign,
  Building2
} from 'lucide-react';

interface NavItem {
  title: string;
  icon: React.ReactNode;
  href: string;
}

const navItems: NavItem[] = [
  { title: 'Overview', icon: <LayoutDashboard className="h-5 w-5" />, href: '/' },
  { title: 'Bank Accounts', icon: <Building2 className="h-5 w-5" />, href: '/accounts' },
  { title: 'Revenue', icon: <ArrowUpCircle className="h-5 w-5" />, href: '/revenue' },
  { title: 'Expenses', icon: <ArrowDownCircle className="h-5 w-5" />, href: '/expenses' },
  { title: 'Cash Flow', icon: <DollarSign className="h-5 w-5" />, href: '/cash-flow' },
  { title: 'Cost Analysis', icon: <PieChart className="h-5 w-5" />, href: '/costs' },
  { title: 'Reports', icon: <FileText className="h-5 w-5" />, href: '/reports' },
];

const bottomNavItems: NavItem[] = [
  { title: 'Settings', icon: <Settings className="h-5 w-5" />, href: '/settings' },
];

export function Sidebar() {
  const [expanded, setExpanded] = useState(true);

  return (
    <div
      className={cn(
        "relative h-screen bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-all duration-300 ease-in-out",
        expanded ? "w-64" : "w-20"
      )}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="flex h-16 items-center justify-between px-4 py-4">
        {expanded ? (
          <h2 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            FinancePro
          </h2>
        ) : (
          <Wallet className="h-6 w-6 text-blue-600" />
        )}
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6"
          onClick={() => setExpanded(!expanded)}
        >
          <ChevronRight className={cn(
            "h-4 w-4 transition-transform text-slate-600 dark:text-slate-400",
            expanded ? "rotate-180" : ""
          )} />
        </Button>
      </div>

      <div className="space-y-4 py-4">
        <nav className="space-y-1 px-3">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              className={cn(
                "w-full justify-start gap-4 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800",
                !expanded && "justify-center"
              )}
            >
              {item.icon}
              {expanded && <span>{item.title}</span>}
            </Button>
          ))}
        </nav>

        <div className="px-3 py-2">
          <nav className="space-y-1">
            {bottomNavItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-4 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800",
                  !expanded && "justify-center"
                )}
              >
                {item.icon}
                {expanded && <span>{item.title}</span>}
              </Button>
            ))}
          </nav>
        </div>
      </div>

      {expanded && (
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4 rounded-lg bg-slate-50 dark:bg-slate-800 p-4">
          <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
            <Wallet className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">John Smith</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">Premium Account</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto h-8 w-8 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
          >
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}