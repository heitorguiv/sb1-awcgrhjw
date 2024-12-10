import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { chartConfig } from '@/lib/chart-utils';

interface PieChartProps {
  data: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  height?: number;
  showLegend?: boolean;
  showTooltip?: boolean;
  className?: string;
  legendPosition?: 'bottom' | 'right';
  customLabel?: (entry: { name: string; value: number }) => string;
}

export function PieChartComponent({ 
  data, 
  height = 300,
  showLegend = true,
  showTooltip = true,
  className,
  legendPosition = 'bottom',
  customLabel
}: PieChartProps) {
  const renderLegend = (props: any) => {
    const { payload } = props;
    return (
      <div className={`flex ${legendPosition === 'bottom' ? 'flex-row flex-wrap justify-center' : 'flex-col'} gap-2`}>
        {payload.map((entry: any, index: number) => (
          <div key={`legend-${index}`} className="flex items-center gap-2 min-w-[120px]">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-xs whitespace-nowrap overflow-hidden text-ellipsis">
              {customLabel ? customLabel(data[index]) : entry.value}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div style={{ height }} className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart margin={{ top: 10, right: legendPosition === 'right' ? 120 : 10, left: 10, bottom: legendPosition === 'bottom' ? 40 : 10 }}>
          <Pie
            data={data}
            cx={legendPosition === 'right' ? '35%' : '50%'}
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={2}
            dataKey="value"
            label={false}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`}
                fill={entry.color}
                stroke="hsl(var(--background))"
                strokeWidth={2}
              />
            ))}
          </Pie>
          {showTooltip && (
            <Tooltip 
              {...chartConfig.tooltipStyle}
              formatter={(value: number, name: string) => [
                `$${value.toLocaleString()}`,
                customLabel ? customLabel({ name, value }) : name
              ]}
            />
          )}
          {showLegend && (
            <Legend
              content={renderLegend}
              layout={legendPosition === 'right' ? 'vertical' : 'horizontal'}
              align={legendPosition === 'right' ? 'right' : 'center'}
              verticalAlign={legendPosition === 'right' ? 'middle' : 'bottom'}
              wrapperStyle={{
                paddingLeft: legendPosition === 'right' ? '20px' : '0',
                maxHeight: '100%',
                overflowY: 'auto'
              }}
            />
          )}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}