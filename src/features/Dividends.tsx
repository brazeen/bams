import { ArrowUpRight, Coins } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../components/ui/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '../../components/ui/chart'

const dividendData = [
  { month: 'Jul', dividends: 42.8 },
  { month: 'Aug', dividends: 18.4 },
  { month: 'Sep', dividends: 68.2 },
  { month: 'Oct', dividends: 31.6 },
  { month: 'Nov', dividends: 25.4 },
  { month: 'Dec', dividends: 96.8 },
  { month: 'Jan', dividends: 38.2 },
  { month: 'Feb', dividends: 21.6 },
  { month: 'Mar', dividends: 74.5 },
  { month: 'Apr', dividends: 44.1 },
  { month: 'May', dividends: 29.7 },
  { month: 'Jun', dividends: 88.9 },
]

const totalDividends = dividendData.reduce((total, item) => total + item.dividends, 0)

const chartConfig = {
  dividends: {
    label: 'Dividends',
    color: 'var(--theme-primary)',
  },
} satisfies ChartConfig

export default function Dividends() {
  return (
    <section className="flex min-h-[calc(100svh-10.5rem)] items-center py-3">
      <Card className="w-full p-0">
        <CardHeader className="flex flex-row items-start justify-between gap-4 px-6 pt-6 sm:px-8">
          <div>
            <p className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--theme-primary)]">
              Income stream
            </p>
            <CardTitle className="text-2xl font-semibold tracking-[-0.04em] text-[var(--theme-text)] sm:text-3xl">
              Dividend payouts
            </CardTitle>
            <CardDescription className="mt-2 text-sm text-[var(--theme-muted)]">
              Monthly income across the rolling past 12 months.
            </CardDescription>
          </div>
          <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-strong)] text-[var(--theme-primary)]">
            <Coins className="size-5" />
          </span>
        </CardHeader>

        <CardContent className="px-3 pt-2 sm:px-7">
          <ChartContainer
            className="h-[220px] w-full aspect-auto 2xl:h-[320px]"
            config={chartConfig}
            initialDimension={{ width: 1100, height: 390 }}
          >
            <BarChart data={dividendData} margin={{ left: 4, right: 12, top: 24, bottom: 0 }}>
              <defs>
                <linearGradient id="dividend-bars" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="var(--theme-primary)" stopOpacity={1} />
                  <stop offset="100%" stopColor="var(--theme-secondary)" stopOpacity={0.58} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="var(--glass-border)" strokeDasharray="4 5" vertical={false} />
              <XAxis axisLine={false} dataKey="month" tickLine={false} tickMargin={12} />
              <YAxis
                axisLine={false}
                tickFormatter={(value) => `S$${value}`}
                tickLine={false}
                tickMargin={8}
                width={54}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    className="border-[var(--glass-border)] bg-[var(--glass-strong)] backdrop-blur-xl"
                    formatter={(value) => (
                      <div className="flex min-w-32 items-center justify-between gap-4">
                        <span className="text-[var(--theme-muted)]">Collected</span>
                        <span className="font-semibold text-[var(--theme-text)]">S${Number(value).toFixed(2)}</span>
                      </div>
                    )}
                    hideIndicator
                  />
                }
                cursor={{ fill: 'var(--glass-border)' }}
              />
              <Bar
                dataKey="dividends"
                fill="url(#dividend-bars)"
                maxBarSize={54}
                radius={[9, 9, 3, 3]}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>

        <div className="mx-6 mb-6 flex flex-col justify-between gap-4 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-strong)] px-5 py-4 sm:mx-8 sm:flex-row sm:items-center sm:px-6">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-[var(--theme-muted)]">
              Total dividends collected (past year)
            </p>
            <p className="mt-2 text-3xl font-semibold tracking-[-0.045em] text-[var(--theme-text)]">
              S${totalDividends.toFixed(2)}
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold text-[var(--theme-positive)]">
            <span className="flex size-8 items-center justify-center rounded-full bg-emerald-500/10">
              <ArrowUpRight className="size-4" />
            </span>
            14.8% vs previous year
          </div>
        </div>
      </Card>
    </section>
  )
}
