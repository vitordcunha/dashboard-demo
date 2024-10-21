import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/_components/ui/card";
import { DataTable } from "@/_components/ui/data-table";

import { columns } from "./sales-table-columns";

import { getSales } from "../_actions/sale";

/**
 * SalesTable component that displays recent sales data in a card format.
 *
 * This component fetches sales data asynchronously and renders it in a DataTable
 * within a Card component. It provides a visual representation of recent sales
 * history from all channels.
 *
 * @async
 * @returns {Promise<JSX.Element>} A Promise that resolves to a JSX element
 * representing the SalesTable component.
 */
const SalesTable = async (): Promise<JSX.Element> => {
  const sales = await getSales(); // Get sales

  return (
    <Card className="row-span-2 col-span-2">
      <CardHeader>
        <CardTitle>Vendas recentes</CardTitle>
        <CardDescription>
          Histórico recente de vendas provindos todos os canais.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={sales} />
      </CardContent>
    </Card>
  );
};

export default SalesTable;
