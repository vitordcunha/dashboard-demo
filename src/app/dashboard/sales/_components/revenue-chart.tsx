"use client";

import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/_components/ui/chart";

interface RevenueChartProps {
  data: any;
}

/**
 * A function that renders a revenue chart using Recharts library.
 *
 * @param props - The props for the RevenueChart component.
 * @param props.data - The data to be displayed in the chart.
 *
 * @returns - A React component that renders the revenue chart
 * */
function RevenueChart({ data }: RevenueChartProps) {
  const chartConfig = {
    revenue: {
      label: "Receita",
      color: "hsl(var(--chart-2))",
    },
    sales: {
      label: "Vendas",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={chartConfig} className="h-[190px] w-full">
      <ComposedChart accessibilityLayer data={data} margin={{}}>
        <CartesianGrid vertical={false} />

        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          tickLine={false}
          tickFormatter={(value) => valueFormatter.format(value)}
        />

        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />

        <defs>
          <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-revenue)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="var(--color-revenue)"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>

        <Area
          dataKey="revenue"
          type="natural"
          fill="url(#fillRevenue)"
          fillOpacity={0.4}
          stroke="var(--color-revenue)"
        />
        <Line type="monotone" dataKey="sales" stroke="var(--color-sales)" />
      </ComposedChart>
    </ChartContainer>
  );
}

const valueFormatter = Intl.NumberFormat("pt-BR", {
  notation: "compact",
});

export default RevenueChart;
