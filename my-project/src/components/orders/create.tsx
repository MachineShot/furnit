import { HttpError } from "@pankod/refine-core";
import {
  Create,
  Box,
  TextField,
  Autocomplete,
  useAutocomplete,
} from "@pankod/refine-mui";
import { Controller, useForm } from "@pankod/refine-react-hook-form";

import { IOrder } from "src/interfaces";

export const OrderCreate: React.FC = () => {
  const {
    saveButtonProps,
    register,
    control,
    formState: { errors },
  } = useForm<IOrder, HttpError>();

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
      >
        <TextField
          {...register("name", {
            required: "This field is required",
          })}
          error={!!errors.title}
          margin="normal"
          fullWidth
          label="Name"
          name="name"
          autoFocus
        />
        <TextField
          {...register("price", {
            required: "This field is required",
          })}
          error={!!errors.content}
          margin="normal"
          label="Price"
          multiline
          rows={4}
        />
      </Box>
    </Create>
  );
};
