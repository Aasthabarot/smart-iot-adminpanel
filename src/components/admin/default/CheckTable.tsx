import React from "react";
import CardMenu from "components/card/CardMenu";
import Checkbox from "components/checkbox";
import Card from "components/card";
import { FaCircle, FaCircleNotch } from "react-icons/fa"; // Import icons for online/offline status

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

type RowObj = {
  turbine: string;  // Change deviceName to turbine
  location: string;
  stationPoint: string;
  chargerPoint: string;
  status: "online" | "offline";
};

function CheckTable(props: { tableData: any }) {
  const { tableData } = props;
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [statusFilter, setStatusFilter] = React.useState<"all" | "online" | "offline">("all");

  // Static data for devices (10 entries), change deviceName to turbine
  const staticData: RowObj[] = [
    { turbine: "Turbine 1", location: "Location 1", stationPoint: "Station 1", chargerPoint: "Charger 1", status: "online" },
    { turbine: "Turbine 2", location: "Location 2", stationPoint: "Station 2", chargerPoint: "Charger 2", status: "offline" },
    { turbine: "Turbine 3", location: "Location 3", stationPoint: "Station 3", chargerPoint: "Charger 3", status: "online" },
    { turbine: "Turbine 4", location: "Location 4", stationPoint: "Station 4", chargerPoint: "Charger 4", status: "offline" },
    { turbine: "Turbine 5", location: "Location 5", stationPoint: "Station 5", chargerPoint: "Charger 5", status: "online" },
    { turbine: "Turbine 6", location: "Location 6", stationPoint: "Station 6", chargerPoint: "Charger 6", status: "offline" },
    { turbine: "Turbine 7", location: "Location 7", stationPoint: "Station 7", chargerPoint: "Charger 7", status: "online" },
    { turbine: "Turbine 8", location: "Location 8", stationPoint: "Station 8", chargerPoint: "Charger 8", status: "offline" },
    { turbine: "Turbine 9", location: "Location 9", stationPoint: "Station 9", chargerPoint: "Charger 9", status: "online" },
    { turbine: "Turbine 10", location: "Location 10", stationPoint: "Station 10", chargerPoint: "Charger 10", status: "offline" },
  ];

  const filteredData = staticData.filter((device) => {
    if (statusFilter === "all") return true;
    return device.status === statusFilter;
  });

  const columns = [
    columnHelper.accessor("turbine", {  // Change deviceName to turbine
      id: "turbine",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">TURBINE</p>  // Change header to TURBINE
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">{info.getValue()}</p>
      ),
    }),
    columnHelper.accessor("location", {
      id: "location",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">LOCATION</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">{info.getValue()}</p>
      ),
    }),
    columnHelper.accessor("stationPoint", {
      id: "stationPoint",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">STATION POINT</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">{info.getValue()}</p>
      ),
    }),
    columnHelper.accessor("chargerPoint", {
      id: "chargerPoint",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">CHARGER POINT</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">{info.getValue()}</p>
      ),
    }),
    columnHelper.accessor("status", {
      id: "status",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">STATUS</p>
      ),
      cell: (info) => (
        <div className="flex items-center">
          {info.getValue() === "online" ? (
            <FaCircle className="text-green-500 mr-2" />
          ) : (
            <FaCircleNotch className="text-red-500 mr-2" />
          )}
          <p className="text-sm font-bold text-navy-700 dark:text-white">
            {info.getValue().toUpperCase()}
          </p>
        </div>
      ),
    }),
  ];

  const [data, setData] = React.useState(() => [...filteredData]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  return (
    <Card extra={"w-full h-full sm:overflow-auto px-6"}>
      <header className="relative flex items-center justify-between pt-4">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          Device Table  {/* Change table name to Turbine Table */}
        </div>
        <CardMenu />
      </header>

      {/* Filter Buttons centered with no background and gray border */}
      <div className="flex justify-center space-x-4 mt-4">
        <button
          className="px-6 py-2 border border-gray-400 text-gray-600 rounded-md hover:bg-gray-100"
          onClick={() => setStatusFilter("all")}
        >
          All
        </button>
        <button
          className="px-6 py-2 border border-gray-400 text-green-600 rounded-md hover:bg-gray-100"
          onClick={() => setStatusFilter("online")}
        >
          Online
        </button>
        <button
          className="px-6 py-2 border border-gray-400 text-red-600 rounded-md hover:bg-gray-100"
          onClick={() => setStatusFilter("offline")}
        >
          Offline
        </button>
      </div>

      <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="!border-px !border-gray-400">
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      onClick={header.column.getToggleSortingHandler()}
                      className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start"
                    >
                      <div className="items-center justify-between text-xs text-gray-200">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table
              .getRowModel()
              .rows.slice(0, 5)
              .map((row) => {
                return (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td
                          key={cell.id}
                          className="min-w-[150px] border-white/0 py-3 pr-4"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export default CheckTable;

const columnHelper = createColumnHelper<RowObj>();
