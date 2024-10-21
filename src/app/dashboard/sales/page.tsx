import { BentoGrid } from "@/_components/ui/bento-grid";

import Overview from "./_components/overview";
import Revenue from "./_components/revenue";
import { SalesByChanel, SalesByProduct } from "./_components/sales";

import SalesTable from "./_components/sales-table";

export default function SalesDashboard() {
  return (
    <div className="h-screen w-full p-4 overflow-hidden">
      <BentoGrid className="w-full h-full grid-cols-4 md:auto-rows-[9.7rem]">
        <Overview />
        <Revenue />
        <SalesByChanel />
        <SalesByProduct />
        <SalesTable />
      </BentoGrid>
    </div>
  );
}
