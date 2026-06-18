import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../../components/ui/chart"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

export default function PVMChart() {
    const chartData = [
        { month: "January", portfolio: 186, US: 245, SG: 92 },
        { month: "February", portfolio: 305, US: 132, SG: 215 },
        { month: "March", portfolio: 237, US: 289, SG: 143 },
        { month: "April", portfolio: 73, US: 94, SG: 320 },
        { month: "May", portfolio: 209, US: 310, SG: 188 },
        { month: "June", portfolio: 214, US: 178, SG: 274 },
        { month: "July", portfolio: 186, US: 221, SG: 105 },
        { month: "August", portfolio: 305, US: 115, SG: 299 },
        { month: "September", portfolio: 237, US: 264, SG: 167 },
        { month: "October", portfolio: 73, US: 82, SG: 236 },
        { month: "November", portfolio: 209, US: 195, SG: 85 },
        { month: "December", portfolio: 214, US: 340, SG: 122 }
    ] //testing

    const chartConfig = {
    portfolio: {
        label: "Portfolio",
        color: "#4ade80",
    },
    US: {
        label: "US Market",
        color: "#3b82f6",
    },
    SG: {
        label: "Singapore Market",
        color: "#f59e0b",
    },
    } satisfies ChartConfig;
    return (
    <ChartContainer config={chartConfig} className="max-h-[200px] w-full">
            <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                left: 12,
                right: 12,
                }}
            >
                <CartesianGrid vertical={false} />
                <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" hideLabel />}
                />
                <Area
                dataKey="portfolio"
                type="linear"
                fillOpacity={0}
                stroke="var(--color-portfolio)"
                />
                 <Area
                dataKey="US"
                type="linear"
                fillOpacity={0}
                stroke="var(--color-US)"

                />
                 <Area
                dataKey="SG"
                type="linear"
                fillOpacity={0}
                stroke="var(--color-SG)"
                />
            </AreaChart>
            </ChartContainer>
    );
}