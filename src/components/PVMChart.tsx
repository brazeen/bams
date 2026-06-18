import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '../../components/ui/chart'
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from 'recharts'

const chartData = [
  { month: 'Jul', portfolio: 100, US: 100, SG: 100 },
  { month: 'Aug', portfolio: 102.8, US: 101.4, SG: 100.8 },
  { month: 'Sep', portfolio: 101.6, US: 99.8, SG: 99.2 },
  { month: 'Oct', portfolio: 105.2, US: 102.1, SG: 101.7 },
  { month: 'Nov', portfolio: 108.9, US: 104.8, SG: 102.4 },
  { month: 'Dec', portfolio: 107.7, US: 105.4, SG: 103.6 },
  { month: 'Jan', portfolio: 112.4, US: 107.2, SG: 104.8 },
  { month: 'Feb', portfolio: 114.1, US: 108.8, SG: 106.1 },
  { month: 'Mar', portfolio: 113.2, US: 107.5, SG: 105.4 },
  { month: 'Apr', portfolio: 117.8, US: 110.6, SG: 107.3 },
  { month: 'May', portfolio: 119.6, US: 112.3, SG: 108.9 },
  { month: 'Jun', portfolio: 121.4, US: 113.1, SG: 110.2 },
]

const chartConfig = {
  portfolio: {
    label: 'Your portfolio',
    color: 'var(--theme-primary)',
  },
  US: {
    label: 'US market',
    color: 'var(--theme-secondary)',
  },
  SG: {
    label: 'SG market',
    color: 'var(--theme-positive)',
  },
} satisfies ChartConfig

export default function PVMChart() {
  return (
    <ChartContainer
      className="h-full min-h-[145px] w-full aspect-auto"
      config={chartConfig}
      initialDimension={{ width: 620, height: 260 }}
    >
      <AreaChart data={chartData} margin={{ left: 0, right: 10, top: 8, bottom: 0 }}>
        <defs>
          <linearGradient id="portfolio-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="5%" stopColor="var(--color-portfolio)" stopOpacity={0.3} />
            <stop offset="95%" stopColor="var(--color-portfolio)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="var(--glass-border)" strokeDasharray="4 5" vertical={false} />
        <XAxis
          axisLine={false}
          dataKey="month"
          tickLine={false}
          tickMargin={10}
        />
        <YAxis
          axisLine={false}
          domain={['dataMin - 2', 'dataMax + 2']}
          tickLine={false}
          tickMargin={8}
          width={42}
        />
        <ChartTooltip
          content={
            <ChartTooltipContent
              className="border-[var(--glass-border)] bg-[var(--glass-strong)] backdrop-blur-xl"
              indicator="line"
            />
          }
          cursor={{ stroke: 'var(--glass-border)', strokeDasharray: '4 4' }}
        />
        <Area
          dataKey="US"
          fill="transparent"
          stroke="var(--color-US)"
          strokeDasharray="5 5"
          strokeWidth={2}
          type="monotone"
        />
        <Area
          dataKey="SG"
          fill="transparent"
          stroke="var(--color-SG)"
          strokeDasharray="2 5"
          strokeWidth={2}
          type="monotone"
        />
        <Area
          dataKey="portfolio"
          fill="url(#portfolio-fill)"
          stroke="var(--color-portfolio)"
          strokeWidth={2.6}
          type="monotone"
        />
        <ChartLegend content={<ChartLegendContent />} />
      </AreaChart>
    </ChartContainer>
  )
}
