import { HttpError } from "@pankod/refine-core";
import {
  Edit,
  Box,
  TextField,
  Autocomplete,
  useAutocomplete,
} from "@pankod/refine-mui";
import { Controller, useForm } from "@pankod/refine-react-hook-form";

import { IItem } from "src/interfaces";

export const ItemEdit: React.FC = () => {
  const {
    saveButtonProps,
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
          label="Name"
          name="name"
          autoFocus
        />
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
          {...register("description", {
            required: "This field is required",
          })}
          error={!!errors.content}
          margin="normal"
          label="Description"
          multiline
          rows={4}
        />
        <TextField
          {...register("pictureUrl", {
            required: "This field is required",
          })}
          error={!!errors.content}
          margin="normal"
          label="Picture URL"
          multiline
          rows={4}
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
    </Edit>
  );
};
