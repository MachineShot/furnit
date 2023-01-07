import { HttpError } from "@pankod/refine-core";
import {
  Edit,
  Box,
  TextField,
  Autocomplete,
  useAutocomplete,
  MenuItem,
} from "@pankod/refine-mui";
import { Controller, useForm } from "@pankod/refine-react-hook-form";

import { IItem } from "src/interfaces";

const statuses = [
  {
    value: 'CREATED',
    label: 'Created',
  },
  {
    value: 'PAID',
    label: 'Paid',
  },
  {
    value: 'SHIPPED',
    label: 'Shipped',
  },
];

export const OrderEdit: React.FC = () => {
  const {
    saveButtonProps,
    refineCore: { queryResult },
    register,
    control,
    formState: { errors },
  } = useForm<IItem, HttpError>();

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
      >
        <TextField
          {...register("id", {
            required: "This field is required",
          })}
          error={!!errors.title}
          margin="normal"
          fullWidth
          label="Id"
          name="id"
          InputProps={{
            readOnly: true,
          }}
          autoFocus
        />
        <TextField
          {...register("dateCreated")}
          error={!!errors.title}
          margin="normal"
          label="Date Created"
          name="dateCreated"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          {...register("status", {
            required: "This field is required",
          })}
          select
          error={!!errors.title}
          margin="normal"
          label="Status"
          name="status"
          defaultValue={"status"}
        >
          {statuses.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          {...register("numberOfItems")}
          error={!!errors.title}
          margin="normal"
          label="No. of Items"
          name="numberOfItems"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          {...register("totalOrderPrice")}
          error={!!errors.title}
          margin="normal"
          label="Total Order Price"
          name="totalOrderPrice"
          InputProps={{
            readOnly: true,
          }}
        />
      </Box>
    </Edit>
  );
};
