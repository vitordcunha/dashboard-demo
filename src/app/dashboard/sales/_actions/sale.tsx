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

export async function getSalesByChannel() {
  const data = [
    {
      month: "January",
      sales: 1300,
      e_commerce: 500,
      physical_store: 600,
      wholesale: 200,
    },
    {
      month: "February",
      sales: 1200,
      e_commerce: 400,
      physical_store: 550,
      wholesale: 250,
    },
    {
      month: "March",
      sales: 1400,
      e_commerce: 550,
      physical_store: 600,
      wholesale: 250,
    },
    {
      month: "April",
      sales: 1600,
      e_commerce: 600,
      physical_store: 700,
      wholesale: 300,
    },
    {
      month: "May",
      sales: 1500,
      e_commerce: 500,
      physical_store: 700,
      wholesale: 300,
    },
    {
      month: "June",
      sales: 1550,
      e_commerce: 550,
      physical_store: 700,
      wholesale: 300,
    },
    {
      month: "July",
      sales: 1500,
      e_commerce: 500,
      physical_store: 700,
      wholesale: 300,
    },
  ];

  return data;
}

export async function getSalesByProduct() {
  const data = [
    {
      month: "January",
      revenue: 4000,
      product_a: 900,
      product_b: 700,
      product_c: 500,
      product_d: 1100,
      product_e: 800,
    },
    {
      month: "February",
      revenue: 3000,
      product_a: 800,
      product_b: 600,
      product_c: 400,
      product_d: 800,
      product_e: 400,
    },
    {
      month: "March",
      revenue: 3500,
      product_a: 1000,
      product_b: 700,
      product_c: 500,
      product_d: 900,
      product_e: 400,
    },
    {
      month: "April",
      revenue: 4200,
      product_a: 1100,
      product_b: 800,
      product_c: 600,
      product_d: 1000,
      product_e: 700,
    },
    {
      month: "May",
      revenue: 3800,
      product_a: 1000,
      product_b: 700,
      product_c: 500,
      product_d: 900,
      product_e: 700,
    },
    {
      month: "June",
      revenue: 4100,
      product_a: 1100,
      product_b: 800,
      product_c: 600,
      product_d: 900,
      product_e: 700,
    },
  ];

  return data;
}
