export const chartConfig = {
  axisProps: {
    tick: { 
      fill: 'hsl(var(--muted-foreground))',
      fontSize: 12 
    },
    axisLine: { 
      stroke: 'hsl(var(--border))',
      strokeWidth: 1
    },
    tickLine: {
      stroke: 'hsl(var(--border))',
      strokeWidth: 1
    }
  },
  tooltipStyle: {
    contentStyle: {
      backgroundColor: 'hsl(var(--card))',
      border: '1px solid hsl(var(--border))',
      borderRadius: '0.5rem',
      color: 'hsl(var(--foreground))',
      fontSize: '12px',
      padding: '8px 12px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
  },
  gridProps: {
    strokeDasharray: '3 3',
    stroke: 'hsl(var(--border))',
    vertical: false
  },
  colors: {
    primary: 'hsl(221.2 83.2% 53.3%)',
    secondary: 'hsl(215 20.2% 65.1%)',
    success: 'hsl(142.1 76.2% 36.3%)',
    warning: 'hsl(37.7 92.1% 50.2%)',
    info: 'hsl(199 89% 48%)',
    destructive: 'hsl(0 84.2% 60.2%)',
    violet: 'hsl(262 83% 58%)',
    orange: 'hsl(27 96% 61%)',
    mint: 'hsl(168 75% 43%)',
    indigo: 'hsl(226 70% 55.5%)',
  },
};

export const formatCurrency = (value: number) => 
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

export const formatPercentage = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value / 100);