"use server";

import { Sale } from "../_components/sales-table-columns";

export async function getSales(): Promise<Sale[]> {
  // TODO: Fetch data from API
  return [
    {
      id: 97,
      amount: 2462.81,
      status: "PROCESSING",
      customer: { name: "Elbert Gibson-Marquardt" },
    },
    {
      id: 45,
      amount: 9115.89,
      status: "PROCESSING",
      customer: { name: "Mrs. Thelma Rodriguez" },
    },
    {
      id: 95,
      amount: 877.27,
      status: "SUCCESS",
      customer: { name: "Lillian Lueilwitz" },
    },
    {
      id: 72,
      amount: 6367.36,
      status: "ERROR",
      customer: { name: "Omar Reichel III" },
    },
    {
      id: 56,
      amount: 7850.46,
      status: "PROCESSING",
      customer: { name: "Kate Collins" },
    },
  ];
}
