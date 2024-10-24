/**
 * Retrieves overview data for sales dashboard.
 *
 * This function returns a predefined set of monthly sales data including
 * revenue, sales, client numbers, and expenses for the first seven months
 * of the year.
 *
 * @returns {Promise<Array<{
 *   month: string,
 *   revenue: number,
 *   sales: number,
 *   clients: number,
 *   expenses: number
 * }>>} A promise that resolves to an array of objects, each representing
 * a month's sales data.
 */
export async function getOverviewData() {
  const data = [
    {
      month: "January",
      revenue: 4000,
      sales: 1300,
      clients: 50,
      expenses: 2500,
    },
    {
      month: "February",
      revenue: 3000,
      sales: 1200,
      clients: 45,
      expenses: 2000,
    },
    {
      month: "March",
      revenue: 3500,
      sales: 1400,
      clients: 48,
      expenses: 2200,
    },
    {
      month: "April",
      revenue: 4200,
      sales: 1600,
      clients: 52,
      expenses: 2800,
    },
    {
      month: "May",
      revenue: 3800,
      sales: 1500,
      clients: 49,
      expenses: 2400,
    },
    {
      month: "June",
      revenue: 4100,
      sales: 1550,
      clients: 51,
      expenses: 2600,
    },
    {
      month: "July",
      revenue: 3800,
      sales: 1500,
      clients: 49,
      expenses: 2400,
    },
  ];

  return data;
}
