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
  GridValueFormatterParams,
} from "@pankod/refine-mui";

import { IItem } from "src/interfaces";

export const ItemList: React.FC = () => {
  const { dataGridProps } = useDataGrid<IItem>();

  const {
    options,
    queryResult: { isLoading },
  } = useSelect<IItem>({
    resource: "items",
    hasPagination: false,
  });

  const columns = React.useMemo<GridColumns<IItem>>(
    () => [
      {
        field: "id",
        headerName: "ID",
        type: "number",
        width: 50,
      },
      {
        field: "name",
        headerName: "Name",
        minWidth: 400,
        flex: 1,
      },
      {
        field: "description",
        headerName: "Description",
        minWidth: 400,
        flex: 1,
      },
      {
        field: "price",
        headerName: "Price",
        type: "number",
        width: 50
      },
      {
        field: "actions",
        type: "actions",
        headerName: "Actions",
        renderCell: function render({ row }) {
          return (
            <Stack direction="row" spacing={1}>
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
