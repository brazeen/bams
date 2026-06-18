import { useEffect, useState } from 'react'
import { Activity, LogOutIcon, Sparkles } from 'lucide-react'
import PageTabs from './components/PageTabs'
import { Button } from '@base-ui/react/button'

type TimePeriod = 'morning' | 'afternoon' | 'sunset' | 'night'

function getTimePeriod(date: Date): TimePeriod {
  const hour = date.getHours()

  if (hour >= 5 && hour < 12) return 'morning'
  if (hour >= 12 && hour < 17) return 'afternoon'
  if (hour >= 17 && hour < 19) return 'sunset'
  return 'night'
}

function getGreeting(period: TimePeriod, name: string) {
  if (period === 'morning') return `Good morning, ${name}`
  if (period === 'night' || period === 'sunset') return `Good evening, ${name}`
  return `Good afternoon, ${name}`
}

type MarketStatus = {
  isOpen: boolean
  label: string
}

function getZonedTime(date: Date, timeZone: string) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date)
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]))

  return {
    weekday: values.weekday,
    minutes: Number(values.hour) * 60 + Number(values.minute),
  }
}

function getMarketStatus(date: Date, market: 'US' | 'SG'): MarketStatus {
  const timeZone = market === 'US' ? 'America/New_York' : 'Asia/Singapore'
  const { weekday, minutes } = getZonedTime(date, timeZone)
  const isWeekday = !['Sat', 'Sun'].includes(weekday)

  if (market === 'US') {
    const isOpen = isWeekday && minutes >= 9 * 60 + 30 && minutes < 16 * 60
    return { isOpen, label: isOpen ? 'Trading' : 'Closed' }
  }

  const morningSession = minutes >= 9 * 60 && minutes < 12 * 60
  const afternoonSession = minutes >= 13 * 60 && minutes < 17 * 60
  const isOpen = isWeekday && (morningSession || afternoonSession)

  return {
    isOpen,
    label: isOpen ? 'Trading' : minutes >= 12 * 60 && minutes < 13 * 60 ? 'Lunch break' : 'Closed',
  }
}

function MarketBadge({
  market,
  status,
}: {
  market: 'US' | 'SG'
  status: MarketStatus
}) {
  return (
    <div
      className="flex items-center gap-2"
      title={`${market} regular market session status`}
    >
      <span
        className={`size-2 rounded-full ${
          status.isOpen
            ? 'bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]'
            : 'bg-zinc-400/80'
        }`}
      />
      <span className="text-xs font-semibold text-[var(--theme-text)]">
        {market} market
      </span>
      <span className="text-[0.68rem] text-[var(--theme-muted)]">
        {status.label}
      </span>
    </div>
  )
}

function App() {
  const [now, setNow] = useState(() => new Date())
  const [glowPhase, setGlowPhase] = useState(0)
  const [brandExpanded, setBrandExpanded] = useState(false)
  const period = getTimePeriod(now)
  const usMarket = getMarketStatus(now, 'US')
  const sgMarket = getMarketStatus(now, 'SG')

  useEffect(() => {
    const clock = window.setInterval(() => setNow(new Date()), 60_000)
    const glow = window.setInterval(
      () => setGlowPhase((phase) => (phase + 1) % 3),
      6_500,
    )

    return () => {
      window.clearInterval(clock)
      window.clearInterval(glow)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', period === 'night')
  }, [period])

  return (
    <div
      className="app-shell min-h-screen"
      data-glow={glowPhase}
      data-time={period}
    >
      <div aria-hidden="true" className="mesh-background">
        <div className="mesh-orb mesh-orb-primary" />
        <div className="mesh-orb mesh-orb-secondary" />
        <div className="mesh-orb mesh-orb-accent" />
        <div className="mesh-noise" />
      </div>

      <main className="relative z-10 mx-auto w-full max-w-[1480px] px-4 pb-24 pt-5 sm:px-6 lg:px-10">
        <header className="relative mb-7 min-h-24 px-1 sm:min-h-28">
          <div className="flex items-start justify-between gap-4">
            <div
              className="group flex cursor-default items-center gap-2 rounded-xl outline-none"
              data-expanded={brandExpanded}
              onBlur={() => setBrandExpanded(false)}
              onFocus={() => setBrandExpanded(true)}
              onMouseEnter={() => setBrandExpanded(true)}
              onMouseLeave={() => setBrandExpanded(false)}
              tabIndex={0}
              title="Brandon's Asset Management System"
            >
              <span className="brand-label relative block h-4 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--theme-muted)]">
                <span className="brand-short absolute left-0 top-0 whitespace-nowrap">
                  BAMS
                </span>
                <span className="brand-full absolute left-0 top-full whitespace-nowrap opacity-0">
                  Brandon&apos;s Asset Management System
                </span>
              </span>
            </div>

            <div className="hidden items-center gap-4 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] px-3.5 py-2 backdrop-blur-md sm:flex">
              <Activity className="size-3.5 text-[var(--theme-primary)]" />
              <MarketBadge market="US" status={usMarket} />
              <span className="h-4 w-px bg-[var(--glass-border)]" />
              <MarketBadge market="SG" status={sgMarket} />
            </div>
          </div>

          <div className="absolute inset-x-0 top-10 text-center sm:top-12">
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-[var(--theme-text)] sm:text-5xl">
              {getGreeting(period, 'Brandon')}
            </h1>
            <Button className={'border-[var(--glass-border)] bg-[var(--glass-strong)] rounded-lg opacity-75 px-3.5 py-1.5 text-[var(--theme-muted)] hover:bg-[var(--glass-bg)] hover:text-[var(--theme-text)] hover:border-[var(--theme-primary)]/25 hover:shadow-[0_28px_70px_color-mix(in_srgb,var(--theme-primary)_12%,transparent)] transition-colors duration-200 mt-5 cursor-pointer'}>
              <div className="flex items-center gap-2">
                <LogOutIcon className="size-3.5 text-[var(--theme-muted)]" />
                <span className="text-[0.68rem] font-semibold text-[var(--theme-muted)]">
                  Sign out
                </span>
              </div>
              
            </Button>
          </div>

          <div className="absolute inset-x-0 top-[5.4rem] flex justify-center gap-4 sm:hidden">
            <MarketBadge market="US" status={usMarket} />
            <MarketBadge market="SG" status={sgMarket} />
          </div>
        </header>

        <PageTabs />
      </main>
    </div>
  )
}

export default App
