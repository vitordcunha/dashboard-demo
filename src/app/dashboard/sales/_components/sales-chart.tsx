"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/_components/ui/chart";

interface SalesChartProps {
  sales: any;
}

function SalesChart({ sales }: SalesChartProps) {
  const chartConfig = {
    e_commerce: {
      label: "Ecomerce",
      color: "hsl(var(--chart-1))",
    },
    physical_store: {
      label: "Loja física",
      color: "hsl(var(--chart-2))",
    },
    wholesale: {
      label: "Atacado",
      color: "hsl(var(--chart-3))",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={chartConfig} className="h-[190px] w-full">
      <BarChart accessibilityLayer data={sales} barCategoryGap={10}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
        <ChartLegend content={<ChartLegendContent />} />

        <Bar
          dataKey="e_commerce"
          stackId="a"
          fill="var(--color-e_commerce)"
          radius={[0, 0, 4, 4]}
        />
        <Bar
          dataKey="physical_store"
          stackId="a"
          fill="var(--color-physical_store)"
          radius={[0, 0, 0, 0]}
        />
        <Bar
          dataKey="wholesale"
          stackId="a"
          fill="var(--color-wholesale)"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ChartContainer>
  );
}

export default SalesChart;
