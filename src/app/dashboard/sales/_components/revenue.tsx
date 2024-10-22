import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/_components/ui/card";

import RevenueChart from "./revenue-chart";

import { getRevenue } from "../_actions/revenue";

/**
 * Renders a revenue card component displaying historical revenue data.
 *
 * This asynchronous function fetches revenue data and renders it in a card format.
 * The card includes a title, description, and a chart visualizing the revenue history.
 *
 * @returns {Promise<JSX.Element>} A Promise that resolves to a JSX element representing the revenue card.
 */
async function Revenue(): Promise<JSX.Element> {
  const revenue = await getRevenue();

  return (
    <Card className="row-span-2 col-span-2">
      <CardHeader>
        <CardTitle>Historico de receita</CardTitle>
        <CardDescription>Receita nos ultimos 6 meses</CardDescription>
      </CardHeader>

      <CardContent>
        <RevenueChart data={revenue} />
      </CardContent>
    </Card>
  );
}

export default Revenue;
