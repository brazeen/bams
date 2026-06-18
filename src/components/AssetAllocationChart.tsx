import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '../../components/ui/chart'
import { Cell, Pie, PieChart } from 'recharts'

const allocation = [
  { name: 'ETFs', value: 44, color: 'var(--theme-primary)' },
  { name: 'Stocks', value: 31, color: 'var(--theme-secondary)' },
  { name: 'REITs', value: 17, color: 'var(--theme-accent)' },
  { name: 'Bonds', value: 8, color: 'var(--theme-positive)' },
]

const chartConfig = {
  value: { label: 'Allocation' },
  ETFs: { label: 'ETFs', color: 'var(--theme-primary)' },
  Stocks: { label: 'Stocks', color: 'var(--theme-secondary)' },
  REITs: { label: 'REITs', color: 'var(--theme-accent)' },
  Bonds: { label: 'Bonds', color: 'var(--theme-positive)' },
} satisfies ChartConfig

export default function AssetAllocationChart() {
  return (
    <div className="flex h-full min-h-[145px] items-center gap-2">
      <ChartContainer
        className="h-full min-h-[140px] w-[62%] aspect-auto"
        config={chartConfig}
        initialDimension={{ width: 280, height: 230 }}
      >
        <PieChart>
          <ChartTooltip
            content={
              <ChartTooltipContent
                className="border-[var(--glass-border)] bg-[var(--glass-strong)] backdrop-blur-xl"
                formatter={(value, _name, item) => (
                  <div className="flex min-w-28 items-center justify-between gap-4">
                    <span className="text-[var(--theme-muted)]">{item.payload.name}</span>
                    <span className="font-semibold text-[var(--theme-text)]">{value}%</span>
                  </div>
                )}
                hideIndicator
              />
            }
          />
          <Pie
            cornerRadius={7}
            data={allocation}
            dataKey="value"
            innerRadius="61%"
            nameKey="name"
            outerRadius="84%"
            paddingAngle={4}
            stroke="transparent"
          >
            {allocation.map((item) => (
              <Cell fill={item.color} key={item.name} />
            ))}
          </Pie>
          <text
            dominantBaseline="middle"
            fill="var(--theme-text)"
            fontSize="23"
            fontWeight="650"
            textAnchor="middle"
            x="50%"
            y="47%"
          >
            S$25.5k
          </text>
          <text
            dominantBaseline="middle"
            fill="var(--theme-muted)"
            fontSize="10"
            fontWeight="600"
            letterSpacing="0.08em"
            textAnchor="middle"
            x="50%"
            y="57%"
          >
            INVESTED
          </text>
        </PieChart>
      </ChartContainer>

      <div className="grid min-w-0 flex-1 gap-3">
        {allocation.map((item) => (
          <div className="flex items-center justify-between gap-2" key={item.name}>
            <div className="flex min-w-0 items-center gap-2">
              <span className="size-2 rounded-full" style={{ background: item.color }} />
              <span className="truncate text-xs font-medium text-[var(--theme-muted)]">{item.name}</span>
            </div>
            <span className="text-xs font-semibold tabular-nums text-[var(--theme-text)]">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}
