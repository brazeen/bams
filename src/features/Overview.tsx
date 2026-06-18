import { Button } from '@base-ui/react/button'
import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  Plus,
  TrendingUp,
  WalletCards,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../components/ui/card'
import AssetAllocationChart from '../components/AssetAllocationChart'
import PVMChart from '../components/PVMChart'

const metrics = [
  {
    label: 'Total portfolio value',
    value: 'S$25,482.90',
    change: '+S$438.20',
    changeLabel: 'this month',
    icon: WalletCards,
    positive: true,
  },
  {
    label: 'Day gain / loss',
    value: '+S$182.45',
    change: '+0.72%',
    changeLabel: 'today',
    icon: TrendingUp,
    positive: true,
  },
  {
    label: 'Total ROI',
    value: '+18.64%',
    change: '+S$4,006.82',
    changeLabel: 'all time',
    icon: ArrowUpRight,
    positive: true,
  },
]

const entries = [
  { id: 18, assetid: 3, symbol: 'VWRA', name: 'Vanguard FTSE All-World', type: 'ETF', currency: 'USD', price: 138.42, quantity: 4, currentPrice: 141.18, purchasedAt: '2026-06-12T09:35:00+08:00' },
  { id: 17, assetid: 7, symbol: 'CFA', name: 'Nikko AM STI ETF', type: 'ETF', currency: 'SGD', price: 3.78, quantity: 300, currentPrice: 3.86, purchasedAt: '2026-05-28T14:10:00+08:00' },
  { id: 16, assetid: 2, symbol: 'AAPL', name: 'Apple Inc.', type: 'STOCK', currency: 'USD', price: 201.14, quantity: 3, currentPrice: 208.62, purchasedAt: '2026-05-04T22:18:00+08:00' },
  { id: 15, assetid: 9, symbol: 'ME8U', name: 'Mapletree Industrial Trust', type: 'REIT', currency: 'SGD', price: 2.09, quantity: 500, currentPrice: 2.16, purchasedAt: '2026-04-19T11:42:00+08:00' },
  { id: 14, assetid: 4, symbol: 'MSFT', name: 'Microsoft Corp.', type: 'STOCK', currency: 'USD', price: 419.35, quantity: 2, currentPrice: 438.72, purchasedAt: '2026-03-21T21:05:00+08:00' },
  { id: 13, assetid: 11, symbol: 'MBH', name: 'Nikko AM SGD Bond ETF', type: 'BOND', currency: 'SGD', price: 0.92, quantity: 1000, currentPrice: 0.94, purchasedAt: '2026-02-11T10:24:00+08:00' },
  { id: 12, assetid: 6, symbol: 'NVDA', name: 'NVIDIA Corp.', type: 'STOCK', currency: 'USD', price: 152.24, quantity: 5, currentPrice: 157.41, purchasedAt: '2026-01-16T22:32:00+08:00' },
  { id: 11, assetid: 8, symbol: 'C38U', name: 'CapitaLand Integrated Commercial Trust', type: 'REIT', currency: 'SGD', price: 1.93, quantity: 600, currentPrice: 2.01, purchasedAt: '2025-12-08T13:16:00+08:00' },
]

function formatDate(date: Date, options: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat('en-SG', options).format(date)
}

function Overview() {
  const now = new Date()
  const fullDate = formatDate(now, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="w-full">
      <section className="flex min-h-[calc(100svh-14rem)] flex-col gap-3">
        <div className="flex items-center justify-between gap-4 px-1">
          <div className="flex items-center gap-3">
            <span className="glass-button flex size-10 items-center justify-center rounded-xl text-[var(--theme-primary)]">
              <CalendarDays className="size-[1.1rem]" />
            </span>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[var(--theme-muted)]">
                Portfolio overview
              </p>
              <p className="mt-0.5 text-sm font-semibold tracking-[-0.01em] text-[var(--theme-text)] sm:text-base">
                {fullDate}
              </p>
            </div>
          </div>
          <Button
            aria-label="Add transaction"
            className="glass-button group flex size-11 cursor-pointer items-center justify-center rounded-2xl text-[var(--theme-text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--theme-primary)]/30 hover:text-[var(--theme-primary)] focus-visible:ring-2 focus-visible:ring-[var(--theme-primary)]/40 sm:w-auto sm:gap-2 sm:px-4"
          >
            <Plus className="size-5 transition-transform duration-300 group-hover:rotate-90" />
            <span className="hidden text-sm font-semibold sm:inline">Add transaction</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:gap-5">
          {metrics.map((metric) => {
            const Icon = metric.icon
            const ChangeIcon = metric.positive ? ArrowUpRight : ArrowDownRight

            return (
              <Card
                className="min-h-32 justify-between p-0 hover:-translate-y-1 hover:border-[var(--theme-primary)]/25 hover:shadow-[0_28px_70px_color-mix(in_srgb,var(--theme-primary)_12%,transparent)]"
                key={metric.label}
              >
                <CardHeader className="flex flex-row items-start justify-between gap-3 px-5 pt-4">
                  <div>
                    <CardDescription className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--theme-muted)]">
                      {metric.label}
                    </CardDescription>
                    <CardTitle className="mt-2 text-2xl font-semibold tracking-[-0.045em] text-[var(--theme-text)] lg:text-[1.75rem]">
                      {metric.value}
                    </CardTitle>
                  </div>
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-[var(--glass-border)] bg-[var(--glass-strong)] text-[var(--theme-primary)]">
                    <Icon className="size-4" />
                  </span>
                </CardHeader>
                <CardContent className="flex items-center gap-1.5 px-5 pb-4">
                  <span className="flex items-center gap-1 text-xs font-semibold text-[var(--theme-positive)]">
                    <ChangeIcon className="size-3.5" />
                    {metric.change}
                  </span>
                  <span className="text-xs text-[var(--theme-muted)]">{metric.changeLabel}</span>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-1 gap-4 lg:grid-cols-[0.82fr_1.18fr] lg:gap-5">
          <Card className="min-h-[210px] p-0">
            <CardHeader className="flex flex-row items-center justify-between px-5 pt-4">
              <div>
                <CardTitle className="text-base font-semibold tracking-[-0.02em] text-[var(--theme-text)]">
                  Asset allocation
                </CardTitle>
                <CardDescription className="mt-1 text-xs text-[var(--theme-muted)]">
                  Exposure by asset class
                </CardDescription>
              </div>
              <span className="rounded-lg border border-[var(--glass-border)] bg-[var(--glass-strong)] px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[var(--theme-muted)]">
                Live
              </span>
            </CardHeader>
            <CardContent className="min-h-0 flex-1 px-3 pb-3 sm:px-5">
              <AssetAllocationChart />
            </CardContent>
          </Card>

          <Card className="min-h-[210px] p-0">
            <CardHeader className="flex flex-row items-center justify-between px-5 pt-4">
              <div>
                <CardTitle className="text-base font-semibold tracking-[-0.02em] text-[var(--theme-text)]">
                  Portfolio performance
                </CardTitle>
                <CardDescription className="mt-1 text-xs text-[var(--theme-muted)]">
                  Your portfolio vs US and Singapore markets
                </CardDescription>
              </div>
              <span className="hidden rounded-lg border border-[var(--glass-border)] bg-[var(--glass-strong)] px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[var(--theme-muted)] sm:inline">
                Past year
              </span>
            </CardHeader>
            <CardContent className="min-h-0 flex-1 px-2 pb-2 sm:px-4">
              <PVMChart />
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="pt-16 sm:pt-20">
        <div className="mb-5 flex items-end justify-between gap-4 px-1">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--theme-primary)]">
              Transaction ledger
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[var(--theme-text)] sm:text-3xl">
              Investment history
            </h2>
            <p className="mt-1.5 text-sm text-[var(--theme-muted)]">
              Every purchase, organized from newest to oldest.
            </p>
          </div>
          <span className="hidden text-xs font-medium text-[var(--theme-muted)] sm:block">
            {entries.length} transactions
          </span>
        </div>

        <div className="thin-scrollbar overflow-x-auto rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] shadow-[var(--glass-shadow)] lg:overflow-visible">
          <table className="w-full min-w-[900px] border-separate border-spacing-0 text-left">
            <thead>
              <tr>
                {['Purchase date', 'Asset', 'Type', 'Quantity', 'Buy price', 'Current value', 'Return'].map((heading) => (
                  <th
                    className="sticky top-0 z-20 border-b border-[var(--glass-border)] bg-[var(--glass-strong)] px-5 py-4 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[var(--theme-muted)] backdrop-blur-xl first:rounded-tl-3xl last:rounded-tr-3xl"
                    key={heading}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => {
                const currentValue = entry.currentPrice * entry.quantity
                const cost = entry.price * entry.quantity
                const gain = currentValue - cost
                const gainPercent = (gain / cost) * 100

                return (
                  <tr
                    className="group transition-colors hover:bg-[var(--glass-strong)]/70"
                    key={entry.id}
                  >
                    <td className="border-b border-[var(--glass-border)] px-5 py-4 text-sm text-[var(--theme-muted)]">
                      {formatDate(new Date(entry.purchasedAt), {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </td>
                    <td className="border-b border-[var(--glass-border)] px-5 py-4">
                      <div className="flex items-center gap-3">
                        <span className="flex size-10 items-center justify-center rounded-xl border border-[var(--glass-border)] bg-[var(--glass-strong)] text-xs font-bold text-[var(--theme-primary)]">
                          {entry.symbol.slice(0, 2)}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-[var(--theme-text)]">{entry.symbol}</p>
                          <p className="mt-0.5 max-w-[210px] truncate text-xs text-[var(--theme-muted)]">{entry.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[var(--glass-border)] px-5 py-4">
                      <span className="rounded-full border border-[var(--glass-border)] bg-[var(--glass-strong)] px-2.5 py-1 text-[0.66rem] font-semibold tracking-wide text-[var(--theme-muted)]">
                        {entry.type}
                      </span>
                    </td>
                    <td className="border-b border-[var(--glass-border)] px-5 py-4 text-sm font-medium tabular-nums text-[var(--theme-text)]">
                      {entry.quantity.toLocaleString('en-SG')}
                    </td>
                    <td className="border-b border-[var(--glass-border)] px-5 py-4 text-sm font-medium tabular-nums text-[var(--theme-text)]">
                      {entry.currency} {entry.price.toFixed(2)}
                    </td>
                    <td className="border-b border-[var(--glass-border)] px-5 py-4 text-sm font-semibold tabular-nums text-[var(--theme-text)]">
                      {entry.currency} {currentValue.toLocaleString('en-SG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </td>
                    <td className="border-b border-[var(--glass-border)] px-5 py-4">
                      <div className="flex items-center gap-1 font-semibold text-[var(--theme-positive)]">
                        <ArrowUpRight className="size-3.5" />
                        <span className="text-sm tabular-nums">+{gainPercent.toFixed(2)}%</span>
                      </div>
                      <p className="mt-0.5 text-xs tabular-nums text-[var(--theme-muted)]">
                        +{entry.currency} {gain.toFixed(2)}
                      </p>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default Overview
