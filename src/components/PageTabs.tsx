import { Tabs } from '@base-ui/react/tabs';
import Overview from '../features/Overview';

const tabClassName =
  'flex h-[calc(2rem+1px)] items-center justify-center bg-transparent px-2 py-0 font-inherit text-sm font-normal leading-5 break-keep whitespace-nowrap text-neutral-600 outline-none select-none hover:text-neutral-950 focus-visible:border-zinc-700 dark:focus-visible:outline-white data-active:text-neutral-950 dark:text-neutral-300 dark:hover:text-white dark:data-active:text-white border-zinc-400 border-t border-r border-l  order-2 rounded-t-lg';

const panelClassName =
  'col-start-1 row-start-1 flex w-full bg-white bg-opacity-75 p-4 text-sm text-neutral-950 z-10 dark:bg-neutral-950 dark:text-white [[hidden]]:hidden border border-2 rounded-b-lg border-zinc-500 dark:border-white rounded-b-lg rounded-tr-lg';

export default function PageTabs() {
  return (
    <Tabs.Root className="w-full h-full" defaultValue="overview">
      <Tabs.List className="relative z-1 -mb-px flex gap-1">
        <Tabs.Tab className={tabClassName} value="overview">
          Overview
        </Tabs.Tab>
        <Tabs.Tab className={tabClassName} value="dividends">
          Dividends
        </Tabs.Tab>
        <Tabs.Tab className={tabClassName} value="account">
          Account
        </Tabs.Tab>
        <Tabs.Indicator className="absolute top-0 left-0 -z-1 h-full w-(--active-tab-width) translate-x-(--active-tab-left) z-10 border-zinc-500 border-2 rounded-t-lg bg-transparent transition-[translate,width] duration-150 ease-in-out dark:border-white dark:bg-neutral-950" />
      </Tabs.List>
      <div className="grid w-full min-h-full grid-cols-1">
        <Tabs.Panel className={panelClassName} value="overview">
          <Overview />
        </Tabs.Panel>
        <Tabs.Panel className={panelClassName} value="dividends">
          <p>Milestones and deadlines.</p>
        </Tabs.Panel>
        <Tabs.Panel className={panelClassName} value="account">
          <p>Profile and preferences.</p>
        </Tabs.Panel>
      </div>
    </Tabs.Root>
  );
}
