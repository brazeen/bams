import { Tabs } from '@base-ui/react/tabs'
import { ChartNoAxesCombined, CircleEllipsis, LayoutDashboard } from 'lucide-react'
import Overview from '../features/Overview'
import Dividends from '../features/Dividends'
import ComingSoon from '../features/ComingSoon'

const tabClassName =
  'relative z-10 flex h-10 items-center justify-center gap-2 rounded-t-xl border border-b-0 border-[var(--glass-border)] bg-[color-mix(in_srgb,var(--browser-panel-bg)_52%,transparent)] px-3.5 text-sm font-medium text-[var(--theme-muted)] outline-none backdrop-blur-md transition-all duration-200 hover:bg-[var(--browser-panel-bg)] hover:text-[var(--theme-text)] focus-visible:ring-2 focus-visible:ring-[var(--theme-primary)]/40 data-active:bg-[var(--browser-panel-bg)] data-active:text-[var(--theme-text)] sm:px-5'

const panelClassName =
  'browser-panel w-full rounded-b-[1.6rem] rounded-tr-[1.6rem] border border-[var(--glass-border)] p-3 text-[var(--theme-text)] shadow-[var(--glass-shadow)] outline-none backdrop-blur-md [[hidden]]:hidden sm:p-4'

export default function PageTabs() {
  return (
    <Tabs.Root className="w-full" defaultValue="overview">
      <div className="relative z-10 -mb-px flex">
        <Tabs.List className="relative inline-flex items-end gap-1">
          <Tabs.Tab aria-label="Overview" className={tabClassName} value="overview">
            <LayoutDashboard className="size-4" />
            <span className="hidden sm:inline">Overview</span>
          </Tabs.Tab>
          <Tabs.Tab aria-label="Dividends" className={tabClassName} value="dividends">
            <ChartNoAxesCombined className="size-4" />
            <span className="hidden sm:inline">Dividends</span>
          </Tabs.Tab>
          <Tabs.Tab aria-label="Analytics" className={tabClassName} value="analytics">
            <CircleEllipsis className="size-4" />
            <span className="hidden sm:inline">Analytics</span>
          </Tabs.Tab>
          <Tabs.Indicator className="absolute bottom-0 left-0 h-0.5 w-(--active-tab-width) translate-x-(--active-tab-left) bg-[var(--theme-primary)] transition-[translate,width] duration-300 ease-out" />
        </Tabs.List>
      </div>

      <Tabs.Panel className={panelClassName} value="overview">
        <Overview />
      </Tabs.Panel>
      <Tabs.Panel className={panelClassName} value="dividends">
        <Dividends />
      </Tabs.Panel>
      <Tabs.Panel className={panelClassName} value="analytics">
        <ComingSoon />
      </Tabs.Panel>
    </Tabs.Root>
  )
}
