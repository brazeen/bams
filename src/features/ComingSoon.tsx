import { CircleDashed, Sparkles } from 'lucide-react'
import { Card } from '../../components/ui/card'

export default function ComingSoon() {
  return (
    <section className="flex min-h-[calc(100svh-10.5rem)] items-center justify-center py-6">
      <Card className="relative w-full max-w-2xl items-center overflow-hidden px-6 py-16 text-center sm:px-12 sm:py-20">
        <div className="absolute -left-16 -top-16 size-52 rounded-full bg-[var(--theme-primary)]/15 blur-3xl" />
        <div className="absolute -bottom-20 -right-16 size-60 rounded-full bg-[var(--theme-secondary)]/15 blur-3xl" />

        <div className="relative">
          <div className="relative mx-auto flex size-24 items-center justify-center">
            <CircleDashed className="absolute size-24 animate-[spin_18s_linear_infinite] text-[var(--theme-primary)]/35" strokeWidth={1} />
            <div className="flex size-14 rotate-45 items-center justify-center rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-strong)] shadow-[0_16px_40px_color-mix(in_srgb,var(--theme-primary)_18%,transparent)]">
              <Sparkles className="size-6 -rotate-45 text-[var(--theme-primary)]" />
            </div>
          </div>
          <p className="mt-8 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--theme-primary)]">
            The next layer
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-[var(--theme-text)] sm:text-4xl">
            Advanced Analytics Coming Soon
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[var(--theme-muted)]">
            Deeper risk modeling, allocation insights, and smarter portfolio forecasting are being shaped here.
          </p>
        </div>
      </Card>
    </section>
  )
}
