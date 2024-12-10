import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { chartConfig } from '@/lib/chart-utils';

interface BarChartProps {
  data: any[];
  xAxisKey: string;
  bars: Array<{
    key: string;
    name: string;
    color: string;
  }>;
  height?: number;
  showLegend?: boolean;
  showGridLines?: boolean;
  showTooltip?: boolean;
  className?: string;
}

export function BarChartComponent({ 
  data, 
  xAxisKey, 
  bars, 
  height = 300,
  showLegend = true,
  showGridLines = true,
  showTooltip = true,
  className 
}: BarChartProps) {
  return (
    <div style={{ height }} className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          {showGridLines && <CartesianGrid {...chartConfig.gridProps} />}
          <XAxis 
            dataKey={xAxisKey}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
            dy={10}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
            dx={-10}
          />
          {showTooltip && <Tooltip {...chartConfig.tooltipStyle} />}
          {showLegend && <Legend wrapperStyle={{ paddingTop: '20px' }} />}
          {bars.map(({ key, name, color }) => (
            <Bar 
              key={key}
              dataKey={key}
              name={name}
              fill={color}
              radius={[4, 4, 0, 0]}
              maxBarSize={50}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}