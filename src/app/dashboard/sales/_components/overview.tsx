import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/_components/ui/card";

import { getOverviewData } from "../_actions/overview";

export type OverviewData = {
  revenue: number;
  sales: number;
  clients: number;
  expenses: number;
};

/**
 * Overview component for displaying key performance indicators (KPIs).
 *
 * This component renders a series of cards, each representing a different KPI
 * such as revenue, expenses, sales, and number of clients. It calculates totals
 * for each KPI and formats the values appropriately.
 *
 * @returns {JSX.Element} A React fragment containing Card components for each KPI.
 */
async function Overview() {
  const data = await getOverviewData();

  /**
   * Calculates the total value for a given data key across all months.
   *
   * @param {keyof OverviewData} dataKey - The key of the data to sum up.
   * @returns {number} The total sum for the specified data key.
   */
  function getTotal(dataKey: keyof OverviewData): number {
    const result = data.reduce((prev, curr) => {
      return curr[dataKey] + prev;
    }, 0);

    return result;
  }

  /**
   * Formats a numeric value based on the specified type.
   *
   * @param {number} value - The numeric value to format.
   * @param {string} [type] - The type of formatting to apply ('currency' or undefined).
   * @returns {string} The formatted value as a string.
   */
  function formatValue(value: number, type?: string): string {
    switch (type) {
      case "currency":
        return currencyFormatter.format(value);
      default:
        return valueFormatter.format(value);
    }
  }

  const kpis = [
    {
      key: "revenue",
      title: "Receita total",
      format: "currency",
    },
    {
      key: "expenses",
      title: "Despesas",
      format: "currency",
    },
    {
      key: "sales",
      title: "Número de vendas",
    },
    {
      key: "clients",
      title: "Clientes",
    },
  ];

  return (
    <>
      {kpis.map((kpi) => (
        <Card key={kpi.key}>
          <CardHeader>
            <CardTitle>{kpi.title}</CardTitle>
            <CardDescription>Receita nos ultimos 6 meses</CardDescription>
          </CardHeader>

          <CardContent>
            <CardTitle className="text-2xl">
              {formatValue(getTotal(kpi.key as keyof OverviewData), kpi.format)}
            </CardTitle>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

const currencyFormatter = Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  notation: "compact",
});
const valueFormatter = Intl.NumberFormat("pt-BR", {
  notation: "compact",
  maximumFractionDigits: 2,
});

export default Overview;
