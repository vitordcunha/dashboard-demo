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
 * @returns {Promise<JSX.Element>} A React fragment containing Card components for each KPI.
 */
async function Overview(): Promise<JSX.Element> {
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

  // Define the KPI cards and their associated formatting options.
  const cards = [
    {
      key: "revenue",
      title: "Receita total",
      description: "Receita nos ultimos 6 meses",
      format: "currency",
    },
    {
      key: "expenses",
      title: "Despesas",
      description: "Despesas nos ultimos 6 meses",
      format: "currency",
    },
    {
      key: "sales",
      title: "Número de vendas",
      description: "Vendas nos ultimos 6 meses",
    },
    {
      key: "clients",
      title: "Clientes",
      description: "Novos clientes nos ultimos 6 meses",
    },
  ];

  return (
    <>
      {cards.map((card) => (
        <Card key={card.key}>
          <CardHeader>
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </CardHeader>

          <CardContent>
            <CardTitle className="text-2xl">
              {formatValue(
                getTotal(card.key as keyof OverviewData),
                card.format
              )}
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
