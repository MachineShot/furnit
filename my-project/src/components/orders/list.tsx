import React from "react";
import { useMany, Option, useSelect } from "@pankod/refine-core";
import {
  useDataGrid,
  DataGrid,
  GridColumns,
  List,
  Stack,
  EditButton,
  DeleteButton,
  ShowButton,
  DateField,
  TagField,
} from "@pankod/refine-mui";

import { IOrder } from "src/interfaces";

export const OrderList: React.FC = () => {
  const { dataGridProps } = useDataGrid<IOrder>();

  const {
    options,
    queryResult: { isLoading },
  } = useSelect<IOrder>({
    resource: "orders",
    hasPagination: false,
  });

  const columns = React.useMemo<GridColumns<IOrder>>(
    () => [
      {
        field: "id",
        headerName: "ID",
        type: "number",
        width: 50,
      },
      {
        field: "dateCreated",
        headerName: "Date Created",
        type: "date",
        minWidth: 220,
        renderCell: function render(params) {
            return (
                <DateField format="LLL" value={params.row.dateCreated} />
            );
        },
      },
      {
        field: "status",
        headerName: "Status",
        minWidth: 150,
        flex: 1,
        renderCell: function render(params) {
            return <TagField value={params.row.status} />;
        },
      },
      {
        field: "totalOrderPrice",
        headerName: "Total",
        type: "number",
        minWidth: 100
      },
      {
        field: "actions",
        type: "actions",
        headerName: "Actions",
        renderCell: function render({ row }) {
          return (
            <Stack direction="row" spacing={1}>
              <ShowButton size="small" hideText recordItemId={row.id}/>
              <EditButton size="small" hideText recordItemId={row.id} />
              <DeleteButton size="small" hideText recordItemId={row.id} />
            </Stack>
          );
        },
        align: "center",
        headerAlign: "center",
        minWidth: 80,
      },
    ],
    [options, isLoading]
  );

  return (
    <List>
      <DataGrid {...dataGridProps} columns={columns} autoHeight />
    </List>
  );
};
