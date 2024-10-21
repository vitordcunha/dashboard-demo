import { Package, PackageCheck, PackageX, Truck } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/_components/ui/card";
import { BentoGrid } from "@/_components/ui/bento-grid";

import { getSalesByChannel } from "../_actions/sale";

import SalesChart from "./sales-chart";

/**
 * Renders a card component displaying sales data categorized by channel.
 *
 * This async function fetches sales data and presents it in a card format,
 * including a chart visualization of sales across different channels.
 *
 * @returns {Promise<JSX.Element>} A Promise that resolves to a JSX element
 * representing the sales by channel card.
 */
export async function SalesByChanel() {
  const sales = await getSalesByChannel();

  return (
    <Card className="row-span-2">
      <CardHeader>
        <CardTitle>Vendas x Canal</CardTitle>
        <CardDescription>Vendas categorizadas por canal</CardDescription>
      </CardHeader>

      <CardContent>
        <SalesChart sales={sales} />
      </CardContent>
    </Card>
  );
}

/**
 * Renders a component displaying sales information by product status.
 *
 * This function creates a grid layout (BentoGrid) containing four cards, each representing
 * a different status of product sales: orders, in delivery, delivered, and canceled.
 * Each card displays an icon and a count (currently hardcoded as 2.2K for demonstration).
 *
 * @returns {JSX.Element} A JSX element containing a grid of cards with sales information.
 */
export function SalesByProduct() {
  return (
    <BentoGrid className="w-full h-full grid-rows-2 row-span-2">
      <Card className="col-span-2 rounded-3xl">
        <CardHeader>
          <CardDescription>Pedidos</CardDescription>
        </CardHeader>

        <CardContent className="flex items-center justify-between gap-2">
          <Package strokeWidth={1} size={45} />
          <CardTitle className="text-4xl font-light">2.2K</CardTitle>
        </CardContent>
      </Card>

      <Card className="col-span-2 rounded-3xl">
        <CardHeader>
          <CardDescription>Em entrega</CardDescription>
        </CardHeader>

        <CardContent className="flex items-center justify-between gap-2">
          <Truck strokeWidth={1} size={45} />
          <CardTitle className="text-4xl font-light">2.2K</CardTitle>
        </CardContent>
      </Card>

      <Card className="col-span-2 rounded-3xl">
        <CardHeader>
          <CardDescription>Entregues</CardDescription>
        </CardHeader>

        <CardContent className="flex items-center justify-between gap-2">
          <PackageCheck strokeWidth={1} size={45} />
          <CardTitle className="text-4xl font-light">2.2K</CardTitle>
        </CardContent>
      </Card>

      <Card className="col-span-2 rounded-3xl">
        <CardHeader>
          <CardDescription>Cancelados</CardDescription>
        </CardHeader>

        <CardContent className="flex items-center justify-between gap-2">
          <PackageX strokeWidth={1} size={45} />
          <CardTitle className="text-4xl font-light">2.2K</CardTitle>
        </CardContent>
      </Card>
    </BentoGrid>
  );
}
