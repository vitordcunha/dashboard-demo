import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import Overview, { OverviewData } from "../overview";

// mock fetch data function
vi.mock("../../_actions/overview", () => ({
  getOverviewData: vi.fn(),
}));

// mocked data for testing
const mockOverviewData: OverviewData[] = [
  { revenue: 10000, sales: 200, clients: 50, expenses: 5000 },
  { revenue: 20000, sales: 300, clients: 100, expenses: 10000 },
];

// currency formatter
const formatCurrency = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    notation: "compact",
  }).format(value);

// compact number formatter
const formatCompact = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    notation: "compact",
    maximumFractionDigits: 2,
  }).format(value);

describe("Overview Component", () => {
  // basic test to verify if the component renders correctly
  it("should render the KPI cards", async () => {
    // mocked function response
    vi.mocked(
      require("@/app/dashboard/sales/_actions/overview").getOverviewData
    ).mockResolvedValue(mockOverviewData);

    const { container } = render(await Overview());

    // Verifica se os títulos estão sendo exibidos
    expect(screen.getByText("Receita total")).toBeInTheDocument();
    expect(screen.getByText("Despesas")).toBeInTheDocument();
    expect(screen.getByText("Número de vendas")).toBeInTheDocument();
    expect(screen.getByText("Clientes")).toBeInTheDocument();

    // Verifica se o componente gerou o HTML esperado (contém os títulos e valores)
    expect(container.querySelectorAll(".text-2xl").length).toBe(4);
  });

  // Teste para verificar se o total de receita e despesas é calculado corretamente
  it("should correctly calculate and format revenue and expenses", async () => {
    // mocked function response
    vi.mocked(
      require("../../_actions/overview").getOverviewData
    ).mockResolvedValue(mockOverviewData);

    render(await Overview());

    // Calcula os totais manualmente
    const totalRevenue = mockOverviewData.reduce(
      (sum, data) => sum + data.revenue,
      0
    );
    const totalExpenses = mockOverviewData.reduce(
      (sum, data) => sum + data.expenses,
      0
    );

    // Verifica se o valor de receita está formatado corretamente
    const revenueValue = screen.getByText(formatCurrency(totalRevenue));
    expect(revenueValue).toBeInTheDocument();

    // Verifica se o valor de despesas está formatado corretamente
    const expensesValue = screen.getByText(formatCurrency(totalExpenses));
    expect(expensesValue).toBeInTheDocument();
  });

  // Teste para verificar se o número de vendas e clientes é calculado corretamente
  it("should correctly calculate and format sales and clients", async () => {
    // mocked function response
    vi.mocked(
      require("../../_actions/overview").getOverviewData
    ).mockResolvedValue(mockOverviewData);

    render(await Overview());

    // Calcula os totais manualmente
    const totalSales = mockOverviewData.reduce(
      (sum, data) => sum + data.sales,
      0
    );
    const totalClients = mockOverviewData.reduce(
      (sum, data) => sum + data.clients,
      0
    );

    // Verifica se o valor de vendas está formatado corretamente
    const salesValue = screen.getByText(formatCompact(totalSales));
    expect(salesValue).toBeInTheDocument();

    // Verifica se o valor de clientes está formatado corretamente
    const clientsValue = screen.getByText(formatCompact(totalClients));
    expect(clientsValue).toBeInTheDocument();
  });
});
