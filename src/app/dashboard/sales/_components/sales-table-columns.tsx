"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/_components/ui/dropdown-menu";
import { Button } from "@/_components/ui/button";
import { Badge } from "@/_components/ui/badge";

export type Customer = {
  id: number;
  name: string;
  address: string;
};

export enum SaleStatus {
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

export interface Sale {
  id: number;
  status: keyof typeof SaleStatus;
  amount: number;
  customer: Partial<Customer>;
}

export const columns: ColumnDef<Sale>[] = [
  {
    accessorKey: "id",
    header: "id",
    cell: ({ cell }) => <div>#{cell.getValue() as number}</div>,
  },
  {
    accessorKey: "customer.name",
    header: "nome do cliente",
    cell: ({ cell }) => <div>{cell.getValue() as string}</div>,
  },
  {
    accessorKey: "status",
    header: "status",
    cell: ({ cell }) => {
      const statusValue = cell.getValue() as Sale["status"];
      return <Badge>{statusValue}</Badge>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const sale = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(`${sale.id}`)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
